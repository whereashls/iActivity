//权限验证
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1X2lkIjoxNzQwNjI0MjA2LCJ1X25hbWUiOiLliJjor5for5ciLCJpYXQiOjE1NzU0MTcwNDcsImV4cCI6MTU3NTQyMDY0N30.tnGJcaxXvEsv5byI8oVVwuHoAziEtSDpUBnXKdNEYvo
const passport = require('koa-passport')

let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'mykey'
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    let {u_id} = jwt_payload
    const UserDao = require('../service/UsersDao')
    let user = await UserDao.getLoginInfo(u_id)
    let role = user.role.r_name
    if(role != null){
        return done(null, role)
    }else{
        return done(null, false)
    }
}))

module.exports =  passport
