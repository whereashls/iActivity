const UsersDao = require('../service/UsersDao')
const MD5 = require('../middleware/home').MD5
const uuid = require('node-uuid')
module.exports = {
    addUser: async (ctx, next) => {
        let newUser = ctx.request.body
        //密码加密
        let solt = uuid.v4() //盐值
        newUser["password"] = await MD5(newUser.password, solt)
        newUser["solt"] = solt
        try {
            await UsersDao.add(newUser)
            ctx.status = 200
            ctx.body = {
                added: true
            }
        } catch {
            ctx.status = 402
            ctx.body = {
                added: false
            }
        }
    },


    getList: async (ctx, next) => {
        let query = ctx.query
        let users = await UsersDao.getList(query)
        ctx.body = users
    },


    getUserInfo: async (ctx, next) => {
        let user = await UsersDao.getUserInfo(ctx.params.id)
        if (!user) {
            ctx.body = {
                code: 0,
                message: '查无此人'
            }
        } else {
            ctx.body = {
                code: 1,
                userInfo: user
            }
        }
    },


    updateUserInfo: async (ctx, next) => {
        let id = ctx.params.id
        let newInfo = ctx.request.body
        let {
            password
        } = newInfo
        if (password) {
            let solt = uuid.v4()
            password = await MD5(password, solt)
            newInfo["password"] = password
            newInfo["solt"] = solt
        }
        ctx.body = await UsersDao.updateUserInfo(id, newInfo)
    },


    deleteUser: async (ctx, next) => {
        let result = await UsersDao.disableUser(ctx.params.id)
        switch (result[0]) {
            case 1:
                ctx.body = {
                    code: 1,
                    message: '禁用成功'
                }
            case 0:
                ctx.body = {
                    code: 0,
                    message: '账号已禁用或账号不存在'
                }
        }
    },


    checkLogin: async (ctx, next) => {
        let {
            u_id,
            password
        } = ctx.request.body
        // console.log({u_id, password})
        let result = await UsersDao.getUserPassword(u_id)
        // console.log(result)
        if (!result) {
            ctx.body = {
                code: 0,
                message: '账号或密码不正确'
            }
        } else {
            let correctPassword = result.password
            let {
                solt
            } = result
            // console.log(correctPassword,solt)

            password = await MD5(password, solt)

            if (password === correctPassword) {
                ctx.body = {
                    code: 1,
                    message: "登录成功"
                }
            } else {
                ctx.body = {
                    code: 0,
                    message: "账号或密码不正确"
                }
            }
        }
    }
}