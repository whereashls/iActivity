const router = require('koa-router')()
const forActivities = require('../controller/forActivities')
router.prefix('/activities')

router.post('/', forActivities.applyActivity)

module.exports = router