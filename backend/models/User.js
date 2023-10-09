//defining a schema for a user {a schema is a pre define structure for documentation}

const mongoose = require('mongoose')
const schema   = mongoose.Schema

//function in a structure of schema
const userschema = new schema({
    name: {
        type : String
    },
    email: {
        type : String
    },
    phone: {
        type : Number
    },
    password: {
        type : String
    }
}, { timestamp: true })

const User = mongoose.model('User', userschema)
module.export = User