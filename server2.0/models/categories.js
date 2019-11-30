module.exports = (db, DataTypes) => {
    return db.define(
        'categories',
        {
            c_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            c_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            c_score: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    )
}