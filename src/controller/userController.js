const express = require('express');
const { getUsers, deleteUser } = require('../service/userService');

const router = express.Router();

router.get('/', getUsers);
router.delete('/:id', deleteUser);

module.exports = router;