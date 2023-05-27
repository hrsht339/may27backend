const cors = require("cors")
const jsonServer = require("json-server")
const path = require("path")

const app = jsonServer.create()
const router = jsonServer.router(path.join(__dirname,"db.json"))

app.use(cors())
app.use(router)

app.listen(4500,()=>{
    console.log("server connected")
})
