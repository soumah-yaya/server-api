// const uploadFile = require("../middleware/upload")
const path = require('path')
const fs = require('fs')
const baseURL = process.env.baseURL

exports.uploadFile = async (req, res) => {

    console.log(req.file)
    let fileExtArray = req.file.originalname.split(".");
    let ext = fileExtArray[fileExtArray.length - 1];
    let targetPath = req.file.filename + "." + ext;
    fs.rename(path.join(process.cwd(), "/" + req.file.path), path.join(req.file.destination, targetPath), function (err) {
        if (err) {
            return res.json({
                data: null,
                meta: {
                    status: 400,
                    msg: "上转文件失败"
                }
            });
        }
        res.json({
            data: {
                "tmp_path": 'tmp_uploads/' + targetPath, "url": baseURL + 'tmp_uploads/' + targetPath
            },
            meta: {
                status: 200,
                msg: "上转文件成功"
            }
        });
    })

}

exports.getListFiles = (req, res) => {
    const directoryPath = __basedir + "/uploads/";
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "获取文件失败!",
            });
        }
        let fileInfos = [];
        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });
        res.status(200).send(fileInfos);
    });
};

exports.download = (req, res) => {
    const fileName = req.params.name;  // define uploads folder path
    const directoryPath = __basedir + "/uploads/";
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "加载文件失败. "
            });
        }
    });
};

