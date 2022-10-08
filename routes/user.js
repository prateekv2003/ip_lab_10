const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get("/all", async (req, res, next) => {
    const users = await User.find();
    res.json({
        "success": true,
        "msg": "OK",
        "users": users
    });
})


router.post("/new", async (req, res, next) => {
    const user = req.body;
    const data = await User.create(user);
    res.json({
        "success": true,
        "msg": "User Added successfully!",
        "user": data
    });
})

router.get("/:id", async (req, res, next) => {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
        res.end("User not found!")
    }
    res.json({
        "success": true,
        "msg": "OK",
        "user": user
    });
})

router.put("/:id", async (req, res, next) => {
    const id = req.params.id;
    const newUser = req.body;

    const u = await User.findById(id);

    if (!u) {
        res.end("User not found!")
    }

    const user = await User.findByIdAndUpdate(id, newUser);

    res.json({
        "success": true,
        "msg": "User updated successfully!",
        "user": newUser
    });
})

router.delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
        res.end("User not found!")
    }
    const result = await User.findByIdAndDelete(id);
    res.json({
        "success": true,
        "msg": "User deleted successfully!"
    });
})

module.exports = router