const ActivitiesDao = require('../service/ActivitiesDao')
module.exports = {

    //申请活动或报名活动
    applyActivity: async (ctx, next) => {
        let details = ctx.request.body
        try{
            await ActivitiesDao.applyActivity(details)
            ctx.body = {
                code: 1,
                message:'活动已申请，等待审批'
            }
        }catch{
            ctx.status = 402
            ctx.body = {
                code: 0,
                message:'申请活动失败'
            }
        }
    }
}
