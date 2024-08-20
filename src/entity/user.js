const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./role')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  phone: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;