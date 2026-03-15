# JWT with EdDSA on Deno
セッションレスのサーバーアクセスを実現するJWT。

## 機能
- EdDSAを使ったJWT生成と検証
- Denoでの使用に最適化

## 使い方
```JavaScript
import { JWT } from "./JWT.js";

const jwt = new JWT();
const data = { id: "abc" };
const res = await jwt.fetchJSON("http://localhost:8888/api/test", data);
console.log(res);
```

## テスト
```sh
deno run -A server.js 8888
```

```sh
deno run -A post.js
```

## ライセンス
MIT License