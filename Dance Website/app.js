const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const port = 3000;
main().catch(err => console.log(err));
//connecting nodejs to mongodb using mongoose
async function main() {
  await mongoose.connect('mongodb://localhost:27017/contactDance');
}

// EXPRESS SETUP
app.use("/static", express.static("static"))//This will allow express to access any file in that folder
app.use(express.urlencoded())



//Define mongoose Schema

const constactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
  });

  // compiling out Schema into model
const Contact = mongoose.model('Contact', constactSchema);

// creating an object of Contact model(class)
// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); 

// PUG RELATED THING
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

// ENDPOINTS
app.get("/", (req, res)=>{
    const params = {
        "title":"best dacing website"
    }
    res.status(200).render("home.pug", params)
    // res.send("hie there!")
})
app.get("/contact", (req, res)=>{
    const params = {
        "title":"best dacing website"
    }
    res.status(200).render("contact.pug", params)
    // res.send("hie there!")
})
app.post("/contact", (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("your data has been saved:)")
    }).catch(()=>{
        res.status(400).send("your data is not saved !")
    })

    
})

//START SERVER
app.listen(port, ()=>{
    console.log(`listen to the port ${port}`);
})