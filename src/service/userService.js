const User = require("../entity/user");
const passwordService = require('./passwordService');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const Role = require("../entity/role");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios. Vuelva a intentarlo en unos minutos." });
    }
};

// exports.getUserById = async (req, res) => {
//   try {
//     const plant = await Plant.findByPk(req.params.id);
//     if (!plant) {
//       return res.status(404).json({ error: "Planta no encontrada" });
//     }
//     res.status(200).json(plant);
//   } catch (error) {
//     res.status(500).json({ error: "Error al obtener la planta" });
//   }
// };

exports.createUser = async (req, res) => {
    try {
        const { password, ...userData } = req.body;
        const hashedPassword = await passwordService.hashPassword(password);
        const newUser = await User.create({
            ...userData,
            password: hashedPassword,
        });
        if (userData.email.length < 1) {
            newUser.email = null;
        }
        newUser.role_id = 2;
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        if (error.name == 'SequelizeUniqueConstraintError') {
            res.status(409).json({ error: "El usuario ya existe." });
        } else if (error instanceof ValidationError) {
            res.status(400).json({ error: "Datos de usuario inválidos." });
        } else {
            // res.status(500).json({ error: "Error al crear usuario. Vuelva a intentarlo en unos minutos." });
            res.status(500).json({ error: error.name });
        }
    }
};

// exports.updatePlant = async (req, res) => {
//   try {
//     const [plant] = await Plant.update(req.body, {
//         where: { id: req.params.id }
//     });
//     if (plant) {
// 			const updatedPlant = await Plant.findByPk(req.params.id);
//       res.status(200).json(updatedPlant);
//     } else {
//       return res.status(404).json({ error: "Planta no encontrada" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Error al actualizar la planta" });
//   }
// };

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByPk(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: "Usuario inexistente." });
        }
        if (deletedUser.deleted) {
            return res.status(400).json({ error: "Usuario eliminado previamente." });
        }
        deletedUser.deleted = true;
        await deletedUser.save();
        return res.status(200).json({ msg: "Usuario eliminado correctamente." });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar usuario. Vuelva a intentarlo en unos minutos." });
    }
};