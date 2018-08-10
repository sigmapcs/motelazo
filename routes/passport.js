// const passport = require('passport'),
//     localStrategy = require('passport-local').Strategy
//     user = require('../models/users')

// passport.use((new localStrategy(
//    {
//        usernameField: 'email',
//        passwordField : 'password'
//    },
//     (email, password, done) => {
//         console.log(email,password)
//         user.findOne({ email}, (err,user) =>{
//             console.log(user)
//             if (err) { return done(err)}
//             if (!user) {
//                 return done(null, false, {message: 'usuario incorrecto'})
//             }
//             if (!user.validPassword(user,password)){
//                 return done(null, false, {message: 'Contraseña Incorrecta'})
//             }
//             return done(null, user)
//         })
//     }
// )))

// module.exports = passport