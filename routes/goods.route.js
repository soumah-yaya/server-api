const Router = require('express')
const GoodsCtrl = require('../controller/goods.controller')
const route = new Router()

route.get('/', GoodsCtrl.getGoods)
route.post('/', GoodsCtrl.addGoods)
route.delete('/:id', GoodsCtrl.deleteGoodsById)

module.exports = route