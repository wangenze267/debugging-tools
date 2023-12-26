const fs = require('fs/promises');
const os = require("os")

const { timestampToTime } = require('../../utils')

function receptionDemo(req) {
  const data = req.query
  const timeNow = new Date()
  const str = `${timestampToTime(timeNow)} ${JSON.stringify(data)}${os.EOL}`
  console.log(str)
  // writeFile(str)
}

// async function writeFile(data) {
//   try {
//     await fs.appendFile('./src/reception/data.txt', data);
//   } catch (err) {
//     console.log(err);
//   }
// }

module.exports = {
    receptionDemo
}