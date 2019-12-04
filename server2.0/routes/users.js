const router = require('koa-router')()
const forUsers = require('../controller/forUsers')
const passport = require('koa-passport')
router.prefix('/users')
//用户登录接口（未完善）
router.post('/login', forUsers.checkLogin)
//获取所有用户（实现分页以及条件搜素功能）
router.get('/',
    passport.authenticate('jwt',{session:false}), 
    forUsers.getList)
//根据id获取用户
router.get('/:id',forUsers.getUserInfo)
//添加用户
router.post('/', forUsers.addUser)
//修改用户信息
router.put('/:id', forUsers.updateUserInfo)
//删除（禁用）用户账号
router.delete('/:id', forUsers.deleteUser)

module.exports = router