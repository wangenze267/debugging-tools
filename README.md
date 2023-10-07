## debugging-tools

🧰 Develop debugging tools ( 开发调试工具 )

[文档](https://tools.wangez.site/)

## Api

| 接口名           | 参数名 | 参数类型 | 可选参数            | 请求方式 | 备注 |
| ---------------- | ------ | -------- | ------------------- | -------- | ---- |
| /api/getHeader   | header | String   | -                   | post     | -    |
| /api/getParams   | -      | -        | -                   | get      | -    |
| /api/getBody     | -      | -        | -                   | post     | -    |
| /api/getTypeData | type   | String   | pie,line,table,tree | get      | -    |
| /api/getFile     | type   | String   | txt,word,excel,pdf  | get      | -    |
| /api/parseExcel  | file   | file     | -                   | post     | -    |

## How to Use

（暂时）本地用 node 服务启动本项目，请求`localhost:12345/你需要的api`即可
