import * as sec from "https://code4fukui.github.io/sec.js/sec.js";
import { JWT } from "./JWT.js";

const prikey = sec.prikey();
const pubkey = sec.pubkey(prikey);

//const jwt = new JWT({ pubkey, prikey });
const jwt = new JWT();
const data = { id: "abc" };
const res = await jwt.fetchJSON("http://localhost:8888/api/test", data);
console.log(res);
