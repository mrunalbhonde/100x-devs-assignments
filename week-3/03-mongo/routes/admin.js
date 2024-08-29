const { Router } = require("express");
const { Admin }  = require("../db");
const { Course }  = require("../db");
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imagelink;
    const price = req.body.price;
    //ideally we should use zod here to do input validation

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });

    //console.log(newCourse); //to see how the object looks
    // {
    //     title: 'WebD',
    //     description: 'full stack web dev',
    //     price: 50,
    //     _id: new ObjectId('6676fc2612571ff245b8315a'),
    //     __v: 0
    //   }

    res.json({
        message: "Course create succesfully",
        courseId : newCourse._id
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

module.exports = router;