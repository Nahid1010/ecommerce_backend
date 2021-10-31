// sequelize model, datatypes and connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create Tsg model
class Tag extends Model {}

// create fields/columns for Tag
Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tag_name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag'
    }
);

// export
module.exports = Tag;