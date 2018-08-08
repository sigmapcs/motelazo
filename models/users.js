const mongoose = require('mongoose')
  Schema = mongoose.Schema,
  UserSchema = new Schema({
    name: {
      type: String,
      required : [true, ' El nombre es Requerido']
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, ' El Email es Requerido'],
      unique: true
    },
    password: {
      type: String,
      required: [false, ' El Pasword es Requerido']
    },
    token: {
      type: String
    }
  })

  module.exports = mongoose.model('User', UserSchema)