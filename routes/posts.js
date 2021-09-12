const express = require('express');
const { getAllPosts, addPost, getSpecificPost, deleteSpecificPost, updatePostByID } = require('../controllers/postControllers');
const router = express.Router();


router.route('/').get(getAllPosts).post(addPost);
router.route('/:postID').get(getSpecificPost).delete(deleteSpecificPost).patch(updatePostByID);

module.exports = router;