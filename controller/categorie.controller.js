const { json } = require('body-parser');
const CategoriesDAO = require('../dao/categoriesDAO')

exports.getCateList = async (req, res) => {
    const { type, pagenum, pagesize } = req.query
    if(!type){
        let lists = await CategoriesDAO.find();
        if (!lists) return res.json(response(null, 400, "获取分类数据失败"))
        res.json({
            data: lists,
            meta: {
                status: 200,
                msg: "获取分类数据成功"
            }
        })
    } else{

        let total = await CategoriesDAO.count()
    
        let cate;
        switch (type) {
            case '1':
                cate = await CategoriesDAO.find().select('cat_name cat_pid cat_level');
                break;
            case '2':
                let temp = await CategoriesDAO.find().select('cat_name cat_pid cat_level children');
                cate = temp.map(item => {
                    if (item.children) {
                        item.children = item.children.map(subItem => {
                            let { _id, cat_name, cat_pid, cat_level, cat_delete } = subItem
                            return { _id, cat_name, cat_pid, cat_level, cat_delete }
                        })
                    }
                    return item
                })
                break;
            case '3':
                if (pagesize && pagenum){
                    let limit = parseInt(pagesize);
                    let skip = pagesize * (pagenum - 1);
                    cate = await CategoriesDAO.find().skip(skip).limit(limit);
                }
                else
                cate = await CategoriesDAO.find();
    
                break;
        }
    
        // console.log(data)
        // res.json(data)
    
        if (!cate) {
            res.json(response(null, 400, "获取分类数据失败"))
            return
        }
        res.json({
            data: cate,
            meta: {
                status: 200,
                msg: "获取分类数据成功"
            },
            total,
        })
    }
}

exports.addCate = async (req, res) => {
    let { cat_pid, cat_name, cat_level } = req.body
    // console.log(cat_pid, cat_name, cat_level)
    let data
    switch (cat_level) {
        case "0":
            data = {
                cat_name,
                cat_pid,
                cat_level,
                cat_deleted: false,
                children: []
            }
            let level1 = await CategoriesDAO.insertMany(data)
            if (!level1) return res.json(response(null, 401, "添加分类失败"))
            res.json(response(level1, 201, "添加分类成功"))
            break;
        case "1":
            data = {
                cat_name,
                cat_pid,
                cat_level,
                cat_deleted: false,
                children: []
            }
            CategoriesDAO.findById({ _id: cat_pid }, function (err, parent) {
                if (err) return res.json(response(null, 401, "添加分类失败"))
                // append data to level1 document
                console.log('data1', data)
                parent.children.push(data)
                parent.save(function (err) {
                    if (err) return res.json(response(null, 401, "添加分类失败"))
                    res.json(response(data, 201, "添加分类成功"))
                })

            })
            break;

        case "2":
            data = {
                cat_name,
                cat_pid,
                cat_level,
                cat_deleted: false,

            }
            CategoriesDAO.findOne({ "children": { $elemMatch: { _id: cat_pid } } }, function (err, categorie) {
                if (err) return res.json(response(null, 401, "添加分类失败"))
                // find cat_pid and add the child document
                categorie.children.forEach(element => {

                    if (element._id.toString() === cat_pid) {
                        element.children.push(data)
                    }
                })
                // save the change to the database
                categorie.save(function (error) {
                    if (error) return res.json(response(null, 401, "添加分类失败"))
                    res.json(response(categorie, 201, "添加分类成功"))
                })
            })

            break;

        default: break;
    }
}
function response(data, status, message) {
    return ({
        data,
        meta: {
            status,
            msg: message
        }
    })
}

exports.updateCateById = (req, res) => {
    // console.log(req.params, req.body)
    CategoriesDAO.find({}, function (err, resp) {
        let flag = false // true there is match
        // if (err) console.log(err)
        // console.log('resp',resp)
        for (let level1 of resp) {
            if (level1._id.toString() === req.params.id) {
                // console.log('level 0')
                // update if level=0
                level1.cat_name = req.body.cat_name
                level1.save(function (err) {
                    if (err) return res.json(response(null, 401, "更新分类失败"))
                    return res.json(response(level1, 201, "更新分类成功"))
                })
                flag = true // there is a match
                break
            }
            // find in the subdoc level 1
            const doc = level1.children?.id(req.params.id)
            if (doc) {
                // console.log('level 1')
                doc.cat_name = req.body.cat_name
                level1.save(function (err) {
                    if (err) return res.json(response(null, 401, "更新分类失败"))
                    return res.json(response(doc, 201, "更新分类成功"))
                })
                flag = true // there is a match
                break
            }
            // find in the subdoc level 2
            // const doc2 = level1.children?.children?.id(req.params.id)
            for (let level2 of level1.children) {
                let doc2 = level2.children.id(req.params.id)
                if (doc2) {
                    // console.log('level 2')
                    doc2.cat_name = req.body.cat_name
                    doc2.ownerDocument().save(function (err) {
                        if (err) return res.json(response(null, 401, "更新分类失败"))
                        return res.json(response(doc2, 201, "更新分类成功"))
                    })
                    flag = true // there is a match
                    break
                }


            }

        }
        // console.log('loop end')
        if (flag === false) { // there is no match
            return res.json(response(null, 401, "更新分类失败"))

        }
    })
    // res.json('ok')
}

exports.deleteCateById = async (req, res) => {
    let { id } = req.params
    // find in level 0
    let doc1 = await CategoriesDAO.findOneAndDelete({ _id: id })
    if (doc1) {
        return res.json(response(doc1, 200, "删除分类成功"))
    }
    // no delete then  find in level 1
    CategoriesDAO.find({}, function (err, resp) {
        if (err) return res.json(response(null, 401, "删除分类失败"))
        for (let level0 of resp) {
            let deleted_doc0 = level0.children.id(id)
           
            if (deleted_doc0) { // document deleted
                deleted_doc0.remove()
                level0.save(function (err) {
                    return res.json(response(deleted_doc0, 200, "删除分类成功"))
                })
                break
            }
            // document not deleted
            // find in level 2
            for (let level1 of level0.children) {
                let deleted_doc1 = level1.children.id(id)
                if (deleted_doc1) {
                    deleted_doc1.remove()
                    level1.ownerDocument().save(function (err) {
                        console.log('level2-deleted')
                        return res.json(response(deleted_doc1, 200, "删除分类成功"))
                    })
                    break
                } 
            }
            
        }
        // document not deleted therefor document doesn't exists
        // if (flag === false) {
       
// }
    })
    
}