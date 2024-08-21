const express = require('express');
// const authenticateJWT = require('../middleware/auth');
const { createUser, deleteUser } = require('../service/userService');
const { login, loginGoogle } = require('../service/authService');

const router = express.Router();

// router.post('/plant',authenticateJWT, createPlant);
// router.get('/plant',authenticateJWT, getPlants);
// router.get('/plant/:id',authenticateJWT, getPlantById);
// router.put('/plant/:id',authenticateJWT, updatePlant);
// router.delete('/plant/:id',authenticateJWT, deletePlant);

router.post('/register', createUser);
router.post('/login', login);
router.post('/login/google', loginGoogle);
// router.get('/plant/:id', getPlantById);
// router.put('/plant/:id', updatePlant);
router.delete('/:id', deleteUser);

module.exports = router;