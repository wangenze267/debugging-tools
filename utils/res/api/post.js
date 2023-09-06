function getHeader(req){
  const { header } = req.body
  return `${req.headers[header.toLowerCase()]}`
}

function getBody(req){
  const data = req.body
  return data
}

module.exports =  {
  getHeader,
  getBody
}
