const multer = require('multer')
const {Router} = require('express')
const uploadCtrl = require('../controller/upload.controller')
// const upload = require('../middleware/upload')


const upload = multer({dest:'tmp_uploads/'})
const route = new Router()

// add file
route.post('/', upload.single('file'), uploadCtrl.uploadFile )
route.post('/files',upload.array('files', 12), uploadCtrl.getListFiles )
route.get('/files/:name', uploadCtrl.download )

module.exports = route