const User = require('./user');
const Role = require('./role');
const sequelize = require('../config/database');


Role.hasMany(User, {
    foreignKey: 'role_id', // El nombre de la clave foránea en la tabla User
    as: 'users' // Alias para la relación
});

User.belongsTo(Role, {
    foreignKey: 'role_id', // El nombre de la clave foránea en la tabla User
    as: 'role' // Alias para la relación
});

module.exports = { User, Role, sequelize };