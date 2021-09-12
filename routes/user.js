const express = require('express');
const { getAllUser, addUser, getUser } = require('../controllers/userControllers');
const router = express.Router();

router.route('/').get(getAllUser).post(addUser);
router.route('/:id').get(getUser);

module.exports = router