const Router = require('express')

const rightsCtrl = require('../controller/rights.controller')

const router = new Router()

router.get('/:type', rightsCtrl.rights_list)

module.exports = router