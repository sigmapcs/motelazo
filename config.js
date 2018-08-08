process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000
process.env.TOKEN_SECRET = process.env.TOKEN_SECRET || "tokenultrasecreto"

if (process.env.NODE_ENV === 'dev') {
  process.env.URL_DB = 'mongodb://localhost:27017/motel'
}
