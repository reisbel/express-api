'use strict';

const routes = (app) => {
    const todo = require('../controllers/Todo');
    const login = require('../controllers/Login');
    const config = require('dotenv').config();

    // auth routes
   app.route('/login')
       .post(login.authenticate);

    // Todo Route
    app.route('/todo/:id?/')
        .get(todo.get)
        .post(todo.create)
        .put(todo.update)
        .delete(todo.delete);
};

module.exports = routes;