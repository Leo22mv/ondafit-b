const User = require("../entity/user");
const passwordService = require('./passwordService');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const Role = require("../entity/role");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "Usuario inexistente." });
        } else if (user.deleted) {
            return res.status(401).json({ error: "Usuario eliminado." });
        }
        const isMatch = await passwordService.comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Contraseña incorrecta." });
        }
        res.status(200).json({ msg: 'Inicio de sesión exitoso' });
    } catch (error) {
        res.status(500).json({ error: "Error al iniciar sesión. Vuelva a intentarlo en unos minutos." });
    }
};