/**
 *  基于   http://jsonplaceholder.typicode.com/posts
 */

async function getArticles() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}


module.exports = {
  getArticles,
}
