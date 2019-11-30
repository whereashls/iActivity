module.exports = (db, DataTypes) => {
    return db.define(
        'users',
        {
            ID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            u_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            u_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.UUIDV4,
                allowNull: false
            },
            solt: {
                type: DataTypes.UUIDV4,
                allowNull: false
            },
            r_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            o_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            disable: {
                type: DataTypes.BOOLEAN,
                allowNull:false,
                defaultValue:true
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    )
}