const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  
  entry: {
    num1: Number,
    num2: Number,
    operation: String,
    result: Number,
    timestamp: Date
  }
  

  // avatar: {
  //   type: String
  // },
  // firstname: {
  //   type: String
  // },
  // lastname: {
  //   type: String
  // },
})

// userSchema.plugin(passportLocalMongoose, {
//   usernameField: 'email'
// })

module.exports = mongoose.model('ClientRegister', userSchema);