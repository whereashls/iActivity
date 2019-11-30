const models = require('../models/index')
class CommonDao {
    static async getList(modelName) {
        //找到对应的模型
        let model = models[modelName]
        return await model.findAll()
    }

    static async getById(modelName,id){
        let model = models[modelName]
        return await model.findByPk(id)
    }

    static async add(modelName, newObj) {
        let model = models[modelName]
        return await model.create(newObj)
    }

    static async update(modelName, id, newValue) {
        let model = models[modelName]
        //转换成对应的id字段名
        let _id = modelName.substring(0, 1) + '_id'
        let where = {}
        where[_id] = id
        return await model.update(newValue, {
            where: where
        })
    }

    static async delete(modelName, id) {
        //找到对应的模型
        let model = models[modelName]
        // 转换成对应的id字段名
        let _id = modelName.substring(0, 1) + '_id'
        let where = {}
        where[_id] = id
        return await model.destroy({where})
    }
}



module.exports = CommonDao