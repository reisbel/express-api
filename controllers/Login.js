const jwt = require('jsonwebtoken');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./db');


module.exports = {
    authenticate(request, response) {
        if (request.body.email && request.body.password) {
            // Fetch user's data and verify credentials, this is only for demonstration purposes, never do this for a production app
            const user = JSON.parse(localStorage.getItem('users')).filter(user => user.email === request.body.email 
                && user.password === request.body.password);

            if(typeof user != "undefined" && user != null && user.length != null && user.length > 0)
            {
                //Payload
                let payload = {
                    userId: user.id,
                    email: user.email
                };

                //console.log(signature);
                jwt.sign(payload, process.env.JWT_PRIVATE_KEY, (error, token) => {
                    response.json({
                        token
                    });
                });
            }
            else {
                console.log(user);
                response.sendStatus(401);
            }
        } else {
            response.json({
                error: 'We\'ve couldn\'t sign you in 😔'
            });
        }
    }
};