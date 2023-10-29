/**
 *  基于   http://jsonplaceholder.typicode.com/posts
 */

async function getAllComments() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const data = await res.json()
  return data
}

async function getAllCommentsByArticleId(req) {
  const { postId } = req.query
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  const data = await res.json()
  return data
}

module.exports = {
  getAllComments,
  getAllCommentsByArticleId
}