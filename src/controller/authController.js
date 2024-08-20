const express = require('express');
// const authenticateJWT = require('../middleware/auth');
const { createUser, getUsers, deleteUser } = require('../service/userService');

const router = express.Router();

// router.post('/plant',authenticateJWT, createPlant);
// router.get('/plant',authenticateJWT, getPlants);
// router.get('/plant/:id',authenticateJWT, getPlantById);
// router.put('/plant/:id',authenticateJWT, updatePlant);
// router.delete('/plant/:id',authenticateJWT, deletePlant);

router.post('/register', createUser);
// router.get('/plant/:id', getPlantById);
// router.put('/plant/:id', updatePlant);
router.delete('/:id', deleteUser);

module.exports = router;