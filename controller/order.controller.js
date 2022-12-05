const OrderDAO = require('../dao/orderDAO')

exports.getAllOrders = async (req,res)=>{
    const { query, pagenum, pagesize } = req.query
    
    let skip = (pagenum - 1) * pagesize;
    let limit = parseInt(pagesize,10)
    let total = await OrderDAO.count()
    let search = query ? { order_fapiao_company : new RegExp(query,'i')} : {}

    let response = await OrderDAO.find(search).skip(skip).limit(limit)
    if (!response) return res.json({
        data: null,
        meta: {
            status: 400,
            msg: "获取订购单列表失败"
        }
    })

    res.json({
        data: response,
        meta: {
            status: 200,
            msg: "获取订购单列表成功"
        },
        total,
        pagenum
    })
    
}