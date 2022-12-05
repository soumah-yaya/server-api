const MenusDAO = require('../dao/menusDAO')

exports.menus_sidebar_list = async (req, res) => {
    
    let list = await MenusDAO.find({})

    if (!list) {
        res.json({
            data: [],
            meta: {
                status: 401,
                msg: '获取侧边栏数据失败'
            }
        })
        return
    }
    res.json({
        data: list,
        meta: {
            status: 200,
            msg: '获取侧边栏数据成功'
        }
    })
}