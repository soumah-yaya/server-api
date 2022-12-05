const jwt = require('jsonwebtoken')

// import bcrypt from 'bcrypt'
const bcrypt = require('bcrypt')

secretkey = process.env.SECRET_KEY

exports.validatePasswork = (password1, password2) =>{
    return bcrypt.compareSync(password1, password2)
}

exports.createToken = (field, value)=>{
    return jwt.sign({ [field]: value }, secretkey, { expiresIn: '2400h' })
}

