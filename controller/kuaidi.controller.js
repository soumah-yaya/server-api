const KuaidiDAO = require('../dao/kuaidiDAO')

exports.getKuaidiInfo =async (req, res) => {
    
    let list = await KuaidiDAO.find({ kuaidi_num: req.params.id })
    // console.log(list)
    if (!list) return res.json({
            data: null,
            meta: {
                status: 400,
                msg: "获取快递信息失败"
            }
        })
        res.json({
            data: list,
            meta: {
                status: 200,
                msg: "获取快递信息成功"
            }
        })
}