'use strict';
const authorize = require('../authorize');

const routes = (app) => {
    const todo = require('../controllers/Todo');
    const login = require('../controllers/Login');
    const config = require('dotenv').config();

    // auth routes
   app.route('/login')
       .post(login.authenticate);

    // Todo Route
    app.route('/todo/:id?/')
        .get(authorize(todo.get))
        .post(authorize(todo.create))
        .put(authorize(todo.update))
        .delete(authorize(todo.delete));
};

module.exports = routes;