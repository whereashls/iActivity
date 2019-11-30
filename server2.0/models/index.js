const db = require('../config/db')

const Categories = db.import(__dirname + '/categories.js')

const Organizations = db.import(__dirname + '/organizations.js')

const Roles = db.import(__dirname + '/roles.js')

const Users = db.import(__dirname + '/users.js')

const Activities = db.import(__dirname + '/activities.js') 

Users.belongsTo(Organizations, {
    foreignKey: 'o_id',
    sourceKey: 'o_id'
})

Organizations.hasMany(Users, {
    foreignKey: 'o_id',
    targetKey: 'o_id'
})

Users.belongsTo(Roles, {
    foreignKey:'r_id',
    sourceKey:'r_id'
})

Roles.hasMany(Users,{
    foreignKey: 'r_id',
    targetKey: 'r_id'
})

Activities.hasMany(Users, {
    foreignKey: ['t_id','s_id'],
    targetKey: 'u_id'
})

Activities.belongsTo(Organizations, {
    foreignKey: 'o_id',
    sourceKey: 'o_id'
})


module.exports = db.models