
const express = require("express")
const app = express();
const path = require("path")
const fs = require("fs")
const port = 80;

app.use("/static", express.static("static"))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "view"))


// ONLY END POINTS

app.get('/', function (req, res) {
    params={
        "title":"best tutorial",
        "content":"all about using pug"
    }
    res.render('index')
  })
app.post('/', function (req, res) {
    names = req.body.names
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let formData = `The name of the client is ${names}, age is ${age}, ${gender}. he/she stays at ${address}, more about the client: ${more} `
    fs.writeFileSync("formDetail", formData)

    params={
        "message":"your details has been listed to our document"
    }
    res.render('index', params)
  })
// ONLY TO RUN THE SEVER
app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
})