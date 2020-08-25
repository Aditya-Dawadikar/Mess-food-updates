const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.decode(token, process.env.JWT_KEY);
        if (decoded.role != "customer") {
            throw new jwt.JsonWebTokenError;
        }
    } catch (err) {
        //console.log(err);
        res.status(401).json({
            message: "unauthorized user",
            error: "Permission denied to fetch the resource. This might occur because of invalid access token"
        })
    }

    next();
}