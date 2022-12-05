const mongoose = require('mongoose')

require('dotenv').config()
// import server
const app = require('./app.js')

// port
const port = process.env.PORT || 8080

// uri
const uri = process.env.URI

mongoose.connect(uri, function (err) {
    if (err) return console.log('datbase connection failed')
    console.log('database connected successfully')
    app.listen(port, () => {
        console.log(`server running at ${port}`)
    })
})
