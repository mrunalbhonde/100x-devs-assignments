const { Router } = require("express");
const { Admin }  = require("../db");
const { Course }  = require("../db");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic 
    const username = req.body.username;
    const password = req.body.password;

    //check if user alredy exists dont add in db

    await Admin.create({
        username, //can write like this if username: username
        password
    })
    res.json({
        message : "Admin is created successfully"
    })



});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.usernme;
    const password = req.body.password;

    const user = await user.find({
        username,
        password
    })

    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;