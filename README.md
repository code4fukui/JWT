# JWT with EdDSA on Deno

sessionless server access by JWT

## Usage

```JavaScript
import { JWT } from "./JWT.js";

const jwt = new JWT();
const data = { id: "abc" };
const res = await jwt.fetchJSON("http://localhost:8888/api/test", data);
console.log(res);
```

## Test

```sh
deno run -A server.js 8888
```

```sh
deno run -A post.js
```
