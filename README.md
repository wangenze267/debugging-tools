## debugging-tools

🧰 Develop debugging tools ( 开发调试工具 )

[文档](https://tools.wangez.site/)

## Api

| 接口名           | 参数名  | 参数类型          | 可选参数               | 请求方式 | 备注 |
| ---------------- | ------- | ----------------- | ---------------------- | -------- | ---- |
| /api/getHeader   | -       | -                 | -                      | post     | -    |
| ~                | header  | `string`          | -                      | -        | -    |
| /api/getParams   | -       | -                 | -                      | get      | -    |
| /api/getBody     | -       | -                 | -                      | post     | -    |
| /api/getTypeData | -       | -                 | -                      | get      | -    |
| ~                | type    | `string`          | pie, line, table, tree | -        | -    |
| /api/getFile     | -       | -                 | -                      | get      | -    |
| ~                | type    | `string`          | txt, word, excel, pdf  | -        | -    |
| /api/parseExcel  | -       | -                 | -                      | post     | -    |
| ~                | file    | `file`            | -                      | -        | -    |
| /api/parseYaml   | -       | -                 | -                      | post     | -    |
| ~                | content | `file` / `string` | -                      | -        | -    |
| ~                | to      | `string`          | yaml, json             | -        | -    |

## How to Use

（暂时）本地用 node 服务启动本项目，请求`localhost:12345/你需要的api`即可
