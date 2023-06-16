import { serveAPI } from "https://code4fukui.github.io/wsutil/wsutil.js";
//import { serveAPI } from "../../util/wsutil/wsutil.js";
import { JWT } from "./JWT.js";

serveAPI("/api/", async (param, req, path, conninfo) => {
  param = JWT.parseToken(param);
  return param;
});
