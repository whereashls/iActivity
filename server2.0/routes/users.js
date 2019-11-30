const router = require('koa-router')()
const forUsers = require('../controller/forUsers')
router.prefix('/users')

router.post('/login', forUsers.checkLogin)

router.get('/', forUsers.getList)

router.get('/:id', forUsers.getUserInfo)

router.post('/', forUsers.addUser)


router.put('/:id', forUsers.updateUserInfo)

router.delete('/:id', forUsers.deleteUser)

module.exports = router