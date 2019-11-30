const Sequelize = require('sequelize')

const db = new Sequelize('iactivity', 'root', '928178', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        charset: 'utf8mb4',
        collate:'utf8mb4_unicode_ci', //校对
        supportBigNumbers: true,    //是否支持BigNumbers类型
        bigNumberStrings: true 
    },

    //连接池属性
    pool: { 
        max: 5, //最大连接数
        min: 0, //最小连接数
        idle: 10000 //空置时间
    },

})

db.authenticate()
    .then(() => {
        console.log('连接成功')
    })
    .catch(err => {
        console.error('Unable to connect to the database:' + err)
    })
module.exports = db