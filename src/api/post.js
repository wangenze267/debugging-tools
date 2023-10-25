const fs = require('node:fs')
const xlsx = require('node-xlsx').default
const yaml = require('yaml')

function getHeader(req) {
  const { header } = req.body
  return `${req.headers[header.toLowerCase()]}`
}

function getBody(req) {
  const data = req.body
  return data
}

function getExcelData(path) {
  const xlsxArr = xlsx.parse(path)
  const data = xlsxArr.map((xlsx) => {
    return parseExcel(xlsx)
  })
  return data
}

function parseExcel(obj) {
  const { data: list } = obj
  const headers = list.shift()
  const data = list.map((item) => {
    const col = {}
    for (let i = 0; i < item.length; i++) {
      col[headers[i]] = item[i]
    }
    return col
  })
  return { headers, data }
}

function getParseYaml(req) {
  const { to = 'json', content = req.file.path } = req.body
  const contentData = content.startsWith('utils')
    ? fs.readFileSync(content, 'utf-8')
    : content
  let contentType = ''
  let data
  try {
    data = JSON.parse(contentData)
    contentType = 'json'
  } catch (error) {
    data = yaml.parse(contentData)
    contentType = 'yaml'
  }
  // console.log(`from: ${contentType}, to: ${to}`)
  // console.log(`old: ${contentData}`)
  if (to === contentType) return contentData
  if (to === 'yaml') data = yaml.stringify(data)
  // console.log(`now: ${data}`)
  return data
}

module.exports = {
  getHeader,
  getBody,
  getExcelData,
  getParseYaml
}
