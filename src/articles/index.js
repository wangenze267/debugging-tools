/**
 *  基于   http://jsonplaceholder.typicode.com/posts
 */

async function getArticles() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

async function getArticleById(req) {
  const { articleId } = req.query
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
  const data = await res.json()
  return data
}

async function addArticle(req) {
  const { userId, body, title } = req.body
  const data = {
    userId, body, title
  }
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
    method: 'post',
    body: data
  })
  const { id } = await res.json()
  return { id }
}

module.exports = {
  getArticles,
  getArticleById,
  addArticle
}
