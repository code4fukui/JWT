import { JWT } from "./JWT.js";

const jwt = new JWT();
const data = { id: "abc" };
const res = await jwt.fetchJSON("http://localhost:8888/api/test", data);
console.log(res);
