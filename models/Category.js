// sequelize model, datatypes and connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create Category model
class Category extends Model {}

// create fields/columns for Category
Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

// export
module.exports = Category;