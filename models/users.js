// const bcrypt = require('bcrypt-nodejs'),
//  mongoose = require('mongoose')
//   Schema = mongoose.Schema,
//   UserSchema = new Schema({
//     name: {
//       type: String,
//       required : [true, ' El nombre es Requerido']
//     },
//     email: {
//       type: String,
//       lowercase: true,
//       required: [true, ' El Email es Requerido'],
//       unique: true
//     },
//     password: {
//       type: String,
//       required: [false, ' El Pasword es Requerido']
//     },
//     token: {
//       type: String
//     }
//   })

//   UserSchema.methods.validPassword = function (user, password) {
//     console.log(user.password, password)
//     if(password === user.password){
//       console.log('autorizado')
//     }else {
//       console.log('no autorizado')
//     }

//     // return bcrypt.compareSync(password, user.password);
//   };

//   module.exports = mongoose.model('User', UserSchema)