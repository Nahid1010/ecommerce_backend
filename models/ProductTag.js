// sequelize model, datatypes and connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create fields/columns for Tag
class ProductTag extends Model {}

ProductTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id',
                unique: true
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id',
                unique: true
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag'
    }
);

// export
module.exports = ProductTag;