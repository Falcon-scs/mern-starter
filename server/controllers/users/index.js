const express = require('express');
const UsersController = require('./users.controller');

const router = express.Router();

const users = new UsersController();
router.get('/list', users.listUser.bind(users));
router.post('/create', users.createUser.bind(users));
router.post('/get', users.getUser.bind(users));
router.post('/login', users.loginUser.bind(users));

module.exports = router;