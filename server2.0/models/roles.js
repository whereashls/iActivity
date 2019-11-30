module.exports = (db, DataTypes) => {
    return db.define(
        'roles',
        {
            r_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            r_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    )
}