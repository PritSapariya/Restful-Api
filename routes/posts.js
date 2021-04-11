const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GETTING ALL POSTS
router.get('/', async (req, res) => {
    try {
        const collectedPosts = await Post.find();
        res.json(collectedPosts);
    } catch (err) {
        res.json({message: err});
    }
});

//SUBMITING A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

//SPECIFIC POST
router.get('/:postID', async (req, res) => {
    try{
        const collectedPost = await Post.findById(req.params.postID);
        res.json(collectedPost);
    }catch(err){
        res.json({message: err});
    }
});

//DELETING POST
router.delete('/:postID', async (req, res) => {
    try {
        const deletePost = await Post.remove({_id: req.params.postID});
        res.json(deletePost);
    } catch (err) {
        res.json({message: err});
    }
});

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