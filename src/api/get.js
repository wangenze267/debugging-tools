const data = require('../data/index')
const { files } = require('../data/files/files')

const fs = require('node:fs/promises')

function getParams(req) {
  const data = req.query
  return data
}

function getTypeData(req) {
  const { type } = req.query
  if (type === 'pie') {
    return data.pieData
  } else if (type === 'line') {
    return data.lineData
  } else if (type === 'table') {
    return data.tableData
  } else if (type === 'tree') {
    return data.treeData
  }
}

async function getFile(req) {
  const { type } = req.query

  const contentTypeMap = {
    word: 'application/msword',
    excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    pdf: 'application/pdf',
    txt: 'text/plain'
  }

  const allowedFileTypes = Object.keys(contentTypeMap)

  if (!allowedFileTypes.includes(type)) {
    return { data: '类型不存在' }
  }

  const contentType = contentTypeMap[type]
  const filePath = `./utils/res/data/files/${files[type]}`

  try {
    const data = await fs.readFile(filePath)
    return {
      file: files[type],
      contentType,
      data
    }
  } catch (error) {
    return {
      data: '没找到文件'
    }
  }
}

module.exports = {
  getParams,
  getTypeData,
  getFile
}
