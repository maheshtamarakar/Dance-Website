const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/maheshKart', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection
db.on('error', console.error.bind(console, "connetion error:'"))
// db.once('open', function(){
//     console.log("we're connected");
// })

var kittySchema = new mongoose.Schema({
    name:String
})
kittySchema.methods.speaks = function(){
    var greeting = "my name is " + this.name
    console.log(greeting);
}

var kitten = mongoose.model('kitten', kittySchema)

var maheshKitty = new kitten({name:"mahesh tamrakar"})
var maheshKitty2 = new kitten({name:"suraj tamrakar"})
// console.log(maheshKitty.name);
// maheshKitty.speaks()
maheshKitty.save(function(err, maheshKitty){
    if(err) return console.error(err);
    // maheshKitty.speaks();
})
maheshKitty2.save(function(err, anything){
    if(err) return console.error(err);
    // anything.speaks();
})

kitten.find({name:"mahesh tamrakar"}, function(err, k){
    if(err) return console.error(err);
    console.log(k);
})