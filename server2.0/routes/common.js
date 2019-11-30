//通用路由（活动分类表categories,身份表：roles,组织表：organizations）
const router = require('koa-router')()
const forCommon = require('../controller/forCommon')
router.prefix('/common')

router.get('/:modelName', forCommon.getList)

router.get('/:modelName/:id', forCommon.getById)

router.post('/:modelName', forCommon.add)

router.put('/:modelName/:id', forCommon.update)

router.delete('/:modelName/:id', forCommon.delete)

module.exports = router