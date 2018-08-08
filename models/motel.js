const mongoose = require('mongoose')
  Schema = mongoose.Schema,
  MotelSchema = new Schema({
    name: {
      type: String,
      required: [true, ' El nombre es Requerido'],
      unique: true
    },
    description: {
      type: String,
      required: [true, ' La Descripcion es Requerida']
    },
    address: {
      type: String,
      required: [true, ' El Domicio es Requerido']
    },
    phone: {
      type: String,
    },
    photo: {
      type: String,
      lowercase: true,
      required: [true, ' El Teléfono es Requerido']
    },
    video: {
      type: String,
      lowercase: true,
      required: [true, ' El Video es Requerido']
    },
    email: {
      type: String,
      lowercase: true,
    },
    price: {
      type: String,
      required: [true, ' El Precio es Requerido']
    },
    premium: {
      type: Boolean
    }
  })

module.exports = mongoose.model('Motel', MotelSchema)