const mongoose = require ('mongoose')
  moment = require('moment')
  Schema = mongoose.Schema
  SaleSchema = new Schema({
    motel: {
      type: String
    },
    dateSale: {
      type: Date
    },
    validTo: {
      type: Date
    },
    email: {
      type: String,
      lowercase: true
    },
    validationCode : {
      type: String

    },
    normalPrice: {
      type: String
    },
    payPrice: {
      type: String
    },
    payment: {
      type: Boolean
    },
    payCode: {
      type: String
    },
    payMethod: {
      type : String
    }
  })

const generate = (estcode) => {
  let c = estcode
  const str = ['abcdefghijklmnpqrstuvwxyz', '123456789', 'ABCDEFGHIJKLMNPQRSTUVWXYZ']
  let code = moment()
    .get("hour")
    .toString();
  code += moment()
    .get("minute")
    .toString();
  code += moment()
    .get("millisecond")
    .toString();
  for (let i = 0; i < 3; i++) {
    let l = Math.round(Math.random() * (2 - 0) + 0)
    code += str[l][Math.round(Math.random() * ((str[l].length - 1) - 0) + 0)];
  }
  for (let i = 0; i < 2; i++) {
    let l = Math.round(Math.random() * (2 - 0) + 0)
    code += str[l][Math.round(Math.random() * ((str[l].length - 1) - 0) + 0)];
  }
  return code
}

SaleSchema.pre('save', function (next) {
  moment.locale('es');
  if (this.isNew) {
    this.dateSale = moment().subtract(5, 'hour')
    this.validTo = moment().add(30, 'days')
    this.validationCode = generate(this.validationCode)
    next()
  } else {
    next();
  }
});


module.exports = mongoose.model('Sale', SaleSchema)