const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GETTING ALL POSTS
router.get('/', async (req, res) => {
    try {
        const collectedPosts = await Post.find();
        res.json(collectedPosts);
    } catch (err) {
        res.json(err);
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
        res.json(err);
    }
});

module.exports = router;