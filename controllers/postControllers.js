const Post = require('../models/Post');

const getAllPosts = async (req, res) => {
    try {
        const collectedPosts = await Post.find();
        res.json(collectedPosts);
    } catch (err) {
        res.json({message: err});
    }
}
const addPost = async (req, res) => {
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
}

const getSpecificPost = async (req, res) => {
    try{
        const collectedPost = await Post.findById(req.params.postID);
        res.json(collectedPost);
    }catch(err){
        res.json({message: err});
    }
}

const deleteSpecificPost = async (req, res) => {
    try {
        const deletePost = await Post.remove({_id: req.params.postID});
        res.json(deletePost);
    } catch (err) {
        res.json({message: err});
    }
}

module.exports = {
    getAllPosts,
    addPost,
    getSpecificPost,
    deleteSpecificPost
}