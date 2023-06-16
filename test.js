// https://stackoverflow.com/questions/66893790/alg-value-for-ed25519

import * as sec from "https://code4fukui.github.io/sec.js/sec.js";

import { Base64URL } from "https://code4fukui.github.io/Base64URL/Base64URL.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

//const token = "eyJhbGciOiJFZERTQSJ9.eyJpZCI6MX0.RAxBAQPFOxrCfgqb56eaAz9u2lByj-WEO-JWgJH3Cyx1o1Hwjn1pA2M4NgJeob9vb2Oaw4FOeYFr6_33XMTnAQ";
//const token = "eyJhbGciOiJFZERTQSJ9.eyJpZCI6MX0.RAxBAQPFOxrCfgqb56eaAz9u2lByj-WEO-JWgJH3Cyx1o1Hwjn1pA2M4NgJeob9vb2Oaw4FOeYFr6_33XMTnAQ";

const token = "eyJraWQiOiItMTkwOTU3MjI1NyIsImFsZyI6IkVkRFNBIn0.eyJqdGkiOiIyMjkxNmYzYy05MDkzLTQ4MTMtODM5Ny1mMTBlNmI3MDRiNjgiLCJkZWxlZ2F0aW9uSWQiOiJiNGFlNDdhNy02MjVhLTQ2MzAtOTcyNy00NTc2NGE3MTJjY2UiLCJleHAiOjE2NTUyNzkxMDksIm5iZiI6MTY1NTI3ODgwOSwic2NvcGUiOiJyZWFkIG9wZW5pZCIsImlzcyI6Imh0dHBzOi8vaWRzdnIuZXhhbXBsZS5jb20iLCJzdWIiOiJ1c2VybmFtZSIsImF1ZCI6ImFwaS5leGFtcGxlLmNvbSIsImlhdCI6MTY1NTI3ODgwOSwicHVycG9zZSI6ImFjY2Vzc190b2tlbiJ9.rjeE8D_e4RYzgvpu-nOwwx7PWMiZyDZwkwO6RiHR5t8g4JqqVokUKQt-oST1s45wubacfeDSFogOrIhe3UHDAg";
// RSA
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGV4YW1wbGUuY29tIiwibmFtZSI6IkpXVCBUYXJvIiwiaWF0IjoxNTUwMzU2NzA1LCJleHAiOjE1NTAzNTY3MDh9.ZcF5pZC0vQerzQqNfYZ9_mghAuMoqfOVnVjSJf87EWU";

//const pubkey = Base64URL.decode("MCowBQYDK2VwAyEA7fySb/9h7hVH8j1paD5IoLfXj4prjfNLwOPUYKvsTOc=");
//const prikey = Base64URL.decode("MC4CAQAwBQYDK2VwBCIEIIJtJBnTuKbIy5YjoNiH95ky3DcA3kRB0I2i7DkVM6Cf");


const pubkey = Base64URL.decode("XWxGtApfcqmKI7p0OKnF5JSEWMVoLsytFXLEP7xZ_l8");

console.log(pubkey.length);

const ts = token.split(".");
const bin = ts.map(m => Base64URL.decode(m));
const ss = bin.map(b => new TextDecoder().decode(b));
console.log(ss);
const payload = new TextEncoder().encode(ts[1]);
//const payload = bin[1];
console.log(ts[1]);
const sig = bin[2];
//const sig = new TextEncoder().encode(ts[2]);
console.log(sec.verify(sig, pubkey, payload));
