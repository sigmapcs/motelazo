const mongoose = require ('mongoose')
  Schema = mongoose.Schema
  SaleSchema = new Schema({
    motel: {
      type: String,
      required: [true, ' el Motel es Necesario']
    },
    dateSale: {
      type: Date,
      required: [true, ' La fecha de compra es Necesaria']
    },
    validTo: {
      type: Date,
        required: [true, ' La fecha valida es Necesaria']
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, ' El Email es Necesario']
    },
    validationCode : {
      type: String,
      required: [true, ' El Código es Necesario']
    },
    normalPrice: {
      type: String,
      required: [true, ' El Precio de venta es Nesario']
    },
    payPrice: {
      type: String,
      required: [true, ' El Precio de venta es Nesario']
    },
    payment: {
      type: Boolean,
      required: [true, ' El Pago es Nesario']
    },
    payCode: {
      type: String,
      required: [true, ' El Codigo  de Pago es Nesario']
    },
    payMethod: {
      type : String
    }
  })

module.exports = mongoose.model('Sale', SaleSchema)