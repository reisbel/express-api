const jwt = require('jsonwebtoken');

module.exports = callback => {
    return (request, response) => {
        jwt.verify(request.headers.token, process.env.JWT_PRIVATE_KEY, (error, payload) => {
            if (error) {
                response.sendStatus(403);
            } else {
                callback(request, response);
            }
        });
    };
}