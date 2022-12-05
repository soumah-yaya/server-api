const { Router } = require('express')
const usersCtrl = require('../controller/users.controller')
const menusCtrl = require('../controller/menus.controller')
const router = new Router()

router.get('/:id', usersCtrl.users_get_by_id)
router.get('/', usersCtrl.users_list)
router.put('/:uid/state/:type', usersCtrl.users_update_state)
router.put('/:id/role', usersCtrl.users_update_role_name)
router.put('/:id', usersCtrl.users_update_by_id)
router.delete('/:id', usersCtrl.users_delete)
router.post('/', usersCtrl.users_create)

module.exports = router