const xlsx = require('node-xlsx').default

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

module.exports = {
  getHeader,
  getBody,
  getExcelData
}
