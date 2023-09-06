function getHeader(req){
  const { header } = req.body
  return `${req.headers[header.toLowerCase()]}`
}

module.exports =  {
  getHeader
}
