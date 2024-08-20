const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user')

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    tableName: 'roles',
    timestamps: false,
});

module.exports = Role;
