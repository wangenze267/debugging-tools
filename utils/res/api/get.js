const data = require('../data/index')

function getParams(req) {
  const data = req.query
  return data
}

function getTypeData(req) {
  const { type } = req.query
  if(type === 'pie'){
    return data.pieData
  }else if(type === 'line'){
    return data.lineData
  }else if(type === 'table'){
    return data.tableData
  }
}

module.exports = {
  getParams,
  getTypeData
}