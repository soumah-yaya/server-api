// express
const express = require('express')
const { json } = require('express')
const path = require('path')

// cors
const cors = require('cors')

// body parser
const bodyParser = require('body-parser')

// expressJWT
const { expressjwt } = require("express-jwt")


// create server
const app = express();

//users route
const users = require('./routes/users.route')
// menus route
const menus = require('./routes/menus.route')
// login route
const loginCtrl = require('./controller/login.controller')
// rights route
const rights = require('./routes/rights.route')
// roles route
const roles = require('./routes/roles.route')
// categories route
const categories = require('./routes/categorie.route')
// goods route
const goods = require('./routes/goods.route')
// order route
const orders = require('./routes/orders.route')

// upload route
const upload = require('./routes/upload.route')
// kuaidi route
const kuaidi = require('./controller/kuaidi.controller')



// secretkey
const secretkey = process.env.SECRET_KEY

//set cors
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

// json files
app.use(json())

// set body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set header for all responses
app.all('api/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With', 'Content-Type', 'Authorization')
    res.setHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
    res.header('Access-Control-Allow_Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    if (req.method === 'OPTIONS') res.send(200)
    else next()
})
// require('./dao/ExpressDAO')
// denie access to all unthorized request
app.use(expressjwt(
    {
        secret: secretkey,
        algorithms: ['HS256']
    }
).unless({ path: [/api\/v1\/private\/login/] }))
// path: [/api\/v1\/private\/users/] })
/* ==== all routers =====*/
// const path = '/api/v1/private'

// login request
app.use('/api/v1/private/login', loginCtrl.login)

// menus route
app.use('/api/v1/private/menus', menus)

// users route
app.use('/api/v1/private/users', users)

// rigts route
app.use('/api/v1/private/rights', rights)
// roles route
app.use('/api/v1/private/roles', roles)
// categorie route
app.use('/api/v1/private/categories', categories)
// goods route
app.use('/api/v1/private/goods', goods)
// upload route
app.use('/api/v1/private/upload', upload)
// order route
app.use('/api/v1/private/orders', orders)
// kuaidi route
app.get('/api/v1/private/kuaidi/:id', kuaidi.getKuaidiInfo)

app.use( express.static(path.join(__dirname, 'tmp_uploads')))
// page not found error
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404;
    next(error)
})

// intercept all errors
app.use((err, req, res, next) => {
    // missing token
    if (err.name === 'UnauthorizedError') {
        return res.json({
            meta: {
                status: 401,
                msg: '无效的token'
            }
        })
        return
    }
    res.json({
        meta: {
            status: err.status || 500,
            msg: err.msg
        }
    })
})


module.exports = app