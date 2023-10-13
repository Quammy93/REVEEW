const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {
    try {
        const token = req.header.authentication.split('')[1]  //the user should send their token as a header as authentication key 
        const decode = jwt.verify(token, 'secretValue')

        req.user = decode
        next()
    }

    catch (error) {
        res.json({
            message: 'authentication Fail'
        })
        
    }
}

module.exports = authentication