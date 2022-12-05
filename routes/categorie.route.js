const Router = require('express')
const CategorieCtrl = require('../controller/categorie.controller')
const AttributeCtrol = require('../controller/arrtibute.controller')
const route = new Router()

route.get('/', CategorieCtrl.getCateList)
route.post('/', CategorieCtrl.addCate)
route.put('/:id/attributes/:attrId', AttributeCtrol.editAttribute)
route.delete('/:id/attributes/:attrId', AttributeCtrol.deleteAttribute)
route.put('/:id', CategorieCtrl.updateCateById)
route.get('/:id/attributes', AttributeCtrol.getAttrList)
route.post('/:id/attributes', AttributeCtrol.addAttribute)
route.put('/:id/attributes/:attrId', AttributeCtrol.addAttribute)
route.delete('/:id', CategorieCtrl.deleteCateById)



module.exports = route