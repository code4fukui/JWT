import { serveAPI } from "https://code4fukui.github.io/wsutil/wsutil.js";

serveAPI("/api/", async (param, req, path, conninfo) => {
  return "ok";
});
