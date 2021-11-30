const express = require('express')
const app = express()
const path = require('path')
const port = 8000;

// EXPRESS SETUP
app.use("/static", express.static("static"))//This will allow express to access any file in that folder
app.use(express.urlencoded())

// PUG RELATED THING
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

// ENDPOINTS
app.get("/", (req, res)=>{
    const params = {
        "title":"best dacing website"
    }
    res.render("index.pug", params)
    // res.send("hie there!")
})

//START SERVER
app.listen(port, ()=>{
    console.log(`listen to the port ${port}`);
})