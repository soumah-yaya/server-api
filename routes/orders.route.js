const Router = require('express')
const OrdersCtr = require('../controller/order.controller')
const route = new Router()

route.get('/', OrdersCtr.getAllOrders)

module.exports = route