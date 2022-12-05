const { Router } = require('express')
const menusCtrl = require('../controller/menus.controller')

const router = new Router()

router.get('/', menusCtrl.menus_sidebar_list)

module.exports = router