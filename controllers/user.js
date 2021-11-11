const { response } = require("express")

const userGet = (req, res = response) => {
  res.json({
    msg: "get api controller"
  })
}
const userPost = (req, res = response) => {
  res.json({
    msg: "post api controller"
  })
}
const userPut = (req, res = response) => {
  res.json({
    msg: "put api controller"
  })
}
const userDelete = (req, res = response) => {
  res.json({
    msg: "delete api controller"
  })
}

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete
}