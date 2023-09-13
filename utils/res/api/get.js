const data = require('../data/index')
const {files} = require('../data/files/files')

const fs = require('fs');

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
  const allowedFileTypes = ['word', 'excel', 'pdf', 'txt'];

  if (!allowedFileTypes.includes(type)) {
    return {data:'类型不存在'}
  }

  const contentTypeMap = {
    word: 'application/msword',
    excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    pdf: 'application/pdf',
    txt: 'text/plain'
  };

  const contentType = contentTypeMap[type];
  const filePath = `./utils/res/data/files/${files[type]}`

  if(type !== 'txt'){
    return new Promise((resolve,reject)=>{
      fs.readFile(filePath, (err, data) => {
        if (err) {
          return reject({data:'没找到文件'})
        }
        return resolve({data, contentType, file:files[type]})
      })
    })
  }else{
    return new Promise((resolve,reject)=>{
      fs.readFile(filePath,'utf-8', (err, data) => {
        if (err) {
          return reject({data:'没找到文件'})
        }
        return resolve({data, contentType, file:files[type]})
      })
    })
  }
}

module.exports = {
  getParams,
  getTypeData,
  getFile
}