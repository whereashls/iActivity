const {activities} = require('../models/index')

class ActivitiesDao {
    //学生干部申请活动
    static async applyActivity(details){
        return await activities.create(details)
    }

    //报名活动
    static async joinActivity(id, attributes) {
        return await activities.update({
            where:{a_id: id}
        },attributes)
    }

    //审批活动
    static async approvalActivity(id, attributes) {
        return await activities.update({
            where:{a_id: id}
        },attributes)
    }


}


module.exports = ActivitiesDao