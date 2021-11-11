const express = require("express")
const cors = require("cors")

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    // middlewares 
    this.middlewares()

    // routes
    this.routes() 
  }

  middlewares() {
    this.app.use(express.static("public"))
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.use("/api/user", require("../routes/user"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port)
    })
  }

}

module.exports = Server