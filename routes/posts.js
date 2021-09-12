const express = require('express');
const { getAllPosts, addPost, getSpecificPost, deleteSpecificPost } = require('../controllers/postControllers');
const router = express.Router();
const Post = require('../models/Post');

//GETTING ALL POSTS
//SUBMITING A POST
router.route('/').get(getAllPosts).post(addPost);

//SPECIFIC POST
//DELETING POST
router.route('/:postID').get(getSpecificPost).delete(deleteSpecificPost);

//UPDATING POST
router.patch('/:postID', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({_id: req.params.postID},{
            $set: {
                title: "my updated post",
                description: "this is decription for updating post"
            }
        });
        res.json(updatePost);
    } catch (err) {
        res.json(res);
    }
});

module.exports = router;