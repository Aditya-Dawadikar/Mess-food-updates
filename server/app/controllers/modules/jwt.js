const jwt = require('jsonwebtoken');

module.exports = class Authorization {
    constructor() {}

    //send token
    createToken(email, role, time) {
        const token = jwt.sign({
                email: email,
                role: role
            },
            process.env.JWT_KEY, {
                expiresIn: time
            }
        );
        /*
            const refreshToken = jwt.sign({
                    email: doc[0].Admin_email,
                    role: "admin"
                },
                process.env.JWT_REFRESH_KEY, {
                    expiresIn: 60 * 40
                }
            );
        */

        return token;
    }

    //send forgot password token
    createForgotPasswordToken(email, userId, role, time) {
        const token = jwt.sign({
                email: email,
                userId: userId,
                role: role
            },
            process.env.JWT_KEY, {
                expiresIn: time
            }
        );
        return token
    }

    //verify token 
}