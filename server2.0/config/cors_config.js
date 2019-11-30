//跨域配置
const Cors = require('koa2-cors')

const cors = Cors({
    origin: ctx => {    //设置允许来自指定域名的请求
        return 'http://localhost:8080'
    },
    maxAge: 5,//指定本次预检的有效期，单位为秒
    credentials: true,//是否允许发送cookie
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],//设置允许的http请求方法
})


module.exports = cors