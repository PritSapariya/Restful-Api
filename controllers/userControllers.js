const User = require('../models/User');

const getAllUser = async (req, res) => {
    try {
        const userCollections = await User.find();
        res.json(userCollections);
    } catch (error) {
        res.json(error)
    }
}

const addUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        location: req.body.location
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json(error);
    }
}

const getUser = async (req, res) => {
    try {
        const userdata = await User.findById(req.params.id);
        res.json(userdata);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {
    getAllUser,
    addUser, 
    getUser
}