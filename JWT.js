import * as sec from "https://code4fukui.github.io/sec.js/sec.js";
import { Base64URL } from "https://code4fukui.github.io/Base64URL/Base64URL.js";

export class JWT {
  constructor(keys) {
    if (!keys) {
      const prikey = sec.prikey();
      const pubkey = sec.pubkey(prikey);
      keys = { prikey, pubkey };
    }
    this.prikey = keys.prikey;
    this.pubkey = keys.pubkey;
  }
  makeJWT(payload) {
    const enc = new TextEncoder();
    //const h = { alg: "EdDSA", pubkey: Base64URL.encode(this.pubkey) };
    const h = { alg: "EdDSA" };
    payload.pubkey = Base64URL.encode(this.pubkey);
    const header = Base64URL.encode(enc.encode(JSON.stringify(h)));
    const data = Base64URL.encode(enc.encode(JSON.stringify(payload)));
    //console.log("data", data);
    const sig = Base64URL.encode(sec.sign(this.prikey, enc.encode(data)));
    return header + "." + data + "." + sig;
  }
  async fetchJSON(url, req) {
    const method = "POST";
    const body = this.makeJWT(req);
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/jwt",
    };
    return await (await fetch(url, { method, headers, body })).json();
  }
  static parseToken(token) {
    const ts = token.split(".");
    const header = JSON.parse(new TextDecoder().decode(Base64URL.decode(ts[0])));
    if (header.alg != "EdDSA") {
      throw new Error("only supported alg: EdDSA");
    }
    const payload = new TextEncoder().encode(ts[1]);
    const json = JSON.parse(new TextDecoder().decode(Base64URL.decode(ts[1])));
    if (!json.pubkey) {
      throw new Error("header needs pubkey");
    }
    const pubkey = Base64URL.decode(json.pubkey);
    const sig = Base64URL.decode(ts[2]);
    if (!sec.verify(sig, pubkey, payload)) {
      throw new Error("can't verify");
    }
    return json;
  }
}
