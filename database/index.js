const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catsList');
var db = mongoose.connection;
db.on('error' , function(){
	console.log('mongoose not Connected !')
})
db.once('open' , function () {
	console.log("mongoose Connected !")
})


let catSchema = mongoose.Schema({
  
  catName:String,
  ownerEmail:String,
  imageUrl:String,
  adoptionMessage:String
});

let Cat = mongoose.model('Cat', catSchema);

let save = (data,callback) => {
   var cat = new Cat(data)
      cat.save(function (err, elem) {
        if (err) { callback(err, null) }
        callback(null, elem)
      })
  
}

module.exports.save = save;
module.exports.Cat = Cat;
