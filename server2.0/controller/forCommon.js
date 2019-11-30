const CommonDao = require('../service/CommonDao')
module.exports = {
    getList: async (ctx, next) => {
        let modelName = ctx.params.modelName
        let result = await CommonDao.getList(modelName)
        ctx.body = result
    },

    getById: async (ctx, next) => {
        let modelName = ctx.params.modelName
        let id = ctx.params.id;
        let result = await CommonDao.getById(modelName,id)
        ctx.body = result
    },

    add: async (ctx, next) => {
        let modelName = ctx.params.modelName
        let newObj = ctx.request.body
        try{
            await CommonDao.add(modelName, newObj)
            ctx.status = 201
            ctx.body = {added:true}
        }catch{
            ctx.status = 402
        }
    },
    update: async(ctx, next) => {
        let modelName = ctx.params.modelName
        let id = ctx.params.id
        let newValue = ctx.request.body
        await CommonDao.update(modelName,id, newValue)
        ctx.body = {update: true}
        
    },

    delete: async (ctx, next) => {
        let modelName = ctx.params.modelName
        let id = ctx.params.id
        let result = await CommonDao.delete(modelName,id)
        if(result===1){
            ctx.status = 200
            ctx.body = {deleted: true}
        }else{
            ctx.status = 402
            ctx.body = {deleted: false}
        }
    }
}