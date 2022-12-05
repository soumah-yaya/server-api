const AttributeDAO = require('../dao/attributeDAO')
const response = require('../util/requestResponse')

exports.getAttrList = (req, res) => {
    let { id } = req.params
    let { sel } = req.query
    AttributeDAO.find({ cat_id: id, attr_sel: sel }, function (err, resp) {
        if (err) return res.json(response(null, 400, "获取分类删除失败"))

        res.json(response(resp, 200, "获取分类参数成功"));
    })
}

exports.addAttribute = (req, res) => {
    let { id } = req.params
    let { attr_name, attr_sel, attr_vals } = req.body
    // console.log(id, attr_name, attr_sel, attr_vals)
    AttributeDAO.create([
        {
            cat_id: id,
            attr_name,
            attr_sel,
            attr_vals: attr_vals || "",
            attr_write: attr_sel === 'only' ? 'manual' : 'list'
        }
    ], function (err, resp) {
        if (err) return res.json(response(null, 401, "添加参数失败"))
        res.json(response(resp, 201, "添加参数成功"))
    })
}
exports.deleteAttribute = (req, res) => {
    let { id, attrId } = req.params
    console.log(id, attrId)
    AttributeDAO.deleteOne(
        { _id: id, cat_id:attrId },
        function (err) {
            if (err) return res.json(response(null, 401, "删除参数失败"))
            res.json(response(null, 201, "删除参数成功"))
        }
    )
}
exports.editAttribute = (req, res) => {
    let { id, attrId } = req.params
    let { attr_name, attr_sel, attr_vals } = req.body
    console.log(id, attr_name, attr_sel, attr_vals)
    AttributeDAO.updateOne({ _id: attrId },
        {
            cat_id: id,
            attr_name,
            attr_sel,
            attr_vals: attr_vals || "",
            attr_write: attr_sel === 'only' ? 'manual' : 'list'
        }
        , function (err, resp) {
            if (err) return res.json(response(null, 401, "修改参数失败"))
            res.json(response(resp, 201, "修改参数成功"))
        })
}
exports.updateAttribute = (req, res) => {
    let { id, attrId } = req.params
    let { attr_name, attr_sel, attr_vals } = req.body
    // console.log(id, attr_name, attr_sel, attr_vals)
    AttributeDAO.updateOne({ _id: attrId },
        {
            cat_id: id,
            attr_name,
            attr_sel,
            attr_vals: attr_vals || "",
            attr_write: attr_sel === 'only' ? 'manual' : 'list'
        }
        , function (err, resp) {
            if (err) return res.json(response(null, 401, "修改参数失败"))
            res.json(response(resp, 201, "修改参数成功"))
        })
}