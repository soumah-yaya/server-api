// const util = require("util")
const multer = require("multer")
const maxSize = 2 * 1024 * 1024  //restrict file size to 2MB
// configure multer o use the disc storage engine.
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "uploads/") //folder used to store the uploaded files
    },
    filename: (req, file, cb) => { //specify the name that will be used in storsge
        console.log(file.fieldname)
        cb(null, file.originalname) //get the original name of the file
    }
})

// set multer
let upload = multer({
    storage,
    limits: { fileSize: maxSize }
})

// allow async/await on the middleware
// let uploadFileMiddleware = util.promisify(uploadFile)

module.exports = upload