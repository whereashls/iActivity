module.exports = (db, DataTypes) => {
    return db.define(
        'activities',
        {
            a_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            a_title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            a_introduce: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            a_startTime: {
                type: DataTypes.DATE,
                allowNull: false
            },
            a_endTime: {
                type: DataTypes.DATE,
                allowNull: false
            },
            apply_time: {
                type: DataTypes.DATE,
                allowNull: false
            },
            release_time: {
                type: DataTypes.DATE,
                allowNull: true
            },
            s_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            c_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            t_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            o_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            timestamps: false,  //取消时间戳
            freezeTableName: true,//取消自动取名
        }
    )
}