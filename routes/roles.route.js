const Router = require('express')
const RolesCtrl = require('../controller/roles.controller')


const router = new Router()

router.get('/', RolesCtrl.getRolesList)
router.post('/', RolesCtrl.addNewRole)
router.put('/:id', RolesCtrl.updateRole)
router.delete('/:roleId/rights/:rightId', RolesCtrl.deleteRoleByTagId)
router.post('/:roleId/rights', RolesCtrl.updateRoleRights)
router.delete('/:id', RolesCtrl.deleteRole)

module.exports = router