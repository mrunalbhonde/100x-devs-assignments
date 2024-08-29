const jwt = require("jsonwebtoken");
const secret = require("../index");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;

    //get the bearer string
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, secret);
    //diff between authtication and authorisation
    if(decodedValue.username){
        next();
    } else {
        res.status(403).json({
            message: "User not authenticated"
        })
    }
}

module.exports = userMiddleware;