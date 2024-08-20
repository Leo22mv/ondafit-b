const express = require('express');
// const authenticateJWT = require('../middleware/auth');
const { createUser, getUsers, deleteUser } = require('../service/userService');

const router = express.Router();

router.get('/', getUsers);
router.delete('/:id', deleteUser);

module.exports = router;