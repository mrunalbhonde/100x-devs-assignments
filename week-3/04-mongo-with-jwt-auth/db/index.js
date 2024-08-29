const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:VbmCBFTByiVJGAUl@cluster0.rkvlplz.mongodb.net/course_selling_app_2');
//after the url we can add db name

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{ //bit confusing
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition 
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}