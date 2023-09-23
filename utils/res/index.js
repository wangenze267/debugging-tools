const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './utils/res/data/store/uploads')
  },
  filename(req, file, cb) {
    const suffix = file.originalname.split('.')[1]
    cb(null, `xlsx1.${suffix}`)
  }
})

const uploadFile = multer({ storage })
const { getHeader, getBody, getExcelData } = require('./api/post')
const { getParams, getTypeData, getFile } = require('./api/get')
const app = express()
const port = 12345
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

//设置允许跨域的域名，*代表允许任意域名跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') //允许的header类型
  res.header('Access-Control-Allow-Headers', '*') //跨域允许的请求方式
  res.header(
    'Access-Control-Allow-Methods',
    'PUT,POST,GET,DELETE,OPTIONS,PATCH'
  ) //可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
  res.header('Access-Control-Max-Age', 1728000) //预请求缓存20天
  next()
})

const router = express.Router()

app.use('/api', router)

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/getHeader', (req, res) => {
  const header = getHeader(req)
  res.json({
    status: 200,
    message: '请求成功',
    data: {
      header
    }
  })
})

app.get('/api/getParams', (req, res) => {
  const params = getParams(req)
  res.json({
    status: 200,
    message: '请求成功',
    data: {
      params
    }
  })
})

app.post('/api/getBody', (req, res) => {
  const body = getBody(req)
  res.json({
    status: 200,
    message: '请求成功',
    data: {
      body
    }
  })
})

app.get('/api/getTypeData', (req, res) => {
  const data = getTypeData(req)
  res.json({
    status: 200,
    message: '请求成功',
    data
  })
})

app.get('/api/getFile', async (req, res) => {
  const { data, contentType, file } = await getFile(req)
  if (contentType) {
    res.setHeader('Content-Type', contentType)
    res.setHeader('Content-Disposition', `attachment; filename=${file}`)
  }
  // console.log(data)
  res.send(data)
})

app.post('api/parseExcel', uploadFile.single('file'), (req, res) => {
  const data = getExcelData(req.file.path)
  console.log(req.file)
  res.json({
    data,
    status: 200,
    message: '上传成功'
  })
})

app.listen(port, () => {
  console.log(`你已经成功启动express服务，端口号为： ${port}`)
})
