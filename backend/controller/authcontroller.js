// we need import the user model into the authcontroller file inside controller folder

const User   = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt    = require('jsonwebtoken')

// function for registration process

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
    })

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
    
module.exports = {
    register
}