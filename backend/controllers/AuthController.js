// we need import the user model into the authcontroller file inside controller folder

const User   = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt    = require('jsonwebtoken')

// function for registration process

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
    })   //this or process will encrypt the password submitted

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPass
        
    })
    user.save()
        .then(user => {
            res.json({
                message: 'user add successfully'
            })
        })
        .catch(error => {
                res.json({
                    message: 'An error occure'
                })
        })
    
}
    
//login function
const login = (req, res, next) => {
    //variables to keep or store the username and password.
    
    var username = req.body.username
    var password = req.body.password

    user.findOne({ $or: [{ email: username }, { phone: username }] })
    .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error:err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({name: user.name}, 'verySecretValue', {expireIn: '1h'})
                        res.json({
                            message: 'Login Successful',
                            token
                        })
                    } else {
                        res.json({
                            message: 'password does not matched!'
                        })
                    }
                })
        }else {
                res.json({
                message: 'no user found!'
            })
        }
    })
}  



module.exports = {
    register, login
}

