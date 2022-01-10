const session = require('express-session');
const Login = require('../models/LoginModel');


exports.register = async (req, res) =>{
    const login = new Login(req.body)
    await login.register();

    if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(function() {
            return res.redirect('/');
        })
        return
    }

    req.flash('success', 'Email cadastrado');
    req.session.save(function() {
       return res.redirect('/');
    })

}


exports.login = async (req, res) =>{
    const login = new Login(req.body)
    await login.login();

    if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(function() {
            return res.redirect('/');
        })
        return
    }

    req.flash('success', 'Você esta logado')
    req.session.user = login.user;
    req.session.save(function() {
       return res.redirect('/');
    })
}

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
}