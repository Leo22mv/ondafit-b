const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
const allowedOrigins = ["http://localhost:4200", "https://ondafit-emp.web.app"];
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Origen bloqueado por CORS"));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// const authenticateJWT = require("./middleware/auth");
// app.use(authenticateJWT);

const authController = require('./controller/authController');
app.use('/auth', authController);

const userController = require('./controller/userController');
app.use('/user', userController);

const { sequelize, User, Role } = require('./entity/initUserEntity');
sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(3000, () => {
        console.log(`Servidor escuchando en el puerto 3000`);
        });
    })
    .catch(err => console.error('No se pudo sincronizar la base de datos:', err));

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

module.exports = app;