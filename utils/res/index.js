const express = require('express')
const { getHeader, getBody } = require('./api/post')
const { getParams } = require('./api/get')
const app = express()
const port = 12345
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

//设置允许跨域的域名，*代表允许任意域名跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //允许的header类型
  res.header("Access-Control-Allow-Headers", "*"); //跨域允许的请求方式
  res.header(
    "Access-Control-Allow-Methods",
    "PUT,POST,GET,DELETE,OPTIONS,PATCH"
  ); //可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
  res.header("Access-Control-Max-Age", 1728000); //预请求缓存20天
  next();
});

const router = express.Router()

app.use('/api', router)

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/getHeader',(req,res)=>{
  const header = getHeader(req)
  res.json({
    status:200,
    message:'请求成功',
    data:{
      header
    }
  })
})

app.get('/api/getParams',(req,res)=>{
  const params = getParams(req)
  res.json({
    status:200,
    message:'请求成功',
    data:{
      params
    }
  })
})

app.post('/api/getBody',(req,res)=>{
  const body = getBody(req)
  res.json({
    status:200,
    message:'请求成功',
    data:{
      body
    }
  })
})

app.listen(port, () => {
  console.log(`你已经成功启动express服务，端口号为： ${port}`)
})