const {Types} = require('mongoose')
const GoodsDAO = require('../dao/goodsDAO')

exports.getGoods = async (req,res)=>{

    const {query, pagenum, pagesize} = req.params
    let filter = { goods_name : new RegExp(query,'i')}
let skip = pagesize*(pagesize - 1)
let limit = parseInt(pagesize)
    let total = await GoodsDAO.count()

    const data = await GoodsDAO.find(filter).skip(skip).limit(limit)
    if (!data) return res.json({
        data:null,
        meta:{
            status: 400,
            msg:"获取商品列表失败"
        }
    })
    res.json({
        data,
        meta: {
            status: 200,
            msg: "获取商品列表成功"
        },
        total,
        pagenum
    })
   
}
exports.addGoods = async (req,res)=>{
    const formData = {...req.body}
    const dataField = {
        goods_name: formData.goods_name,
        goods_price: parseFloat(formData.goods_price),
        goods_number: parseInt(formData.goods_number,10),
        goods_weight: parseFloat(formData.goods_weight),
        cat_id: new Types.ObjectId(formData.goods_cat.split(',')[2]),
        goods_introduce: formData.goods_introduce,
        goods_big_logo: '',
        goods_small_logo: '',
        cat_one_id: new Types.ObjectId(formData.goods_cat.split(',')[0]),
        cat_two_id: new Types.ObjectId(formData.goods_cat.split(',')[1]),
        cat_three_id: new Types.ObjectId(formData.goods_cat.split(',')[2]),       

    }
    
    
    const data = await GoodsDAO.create(dataField)
    if (!data) return res.json({
        data:null,
        meta:{
            status: 400,
            msg:"添加商品失败"
        }
    })
    res.json({
        data:[],
        meta: {
            status: 201,
            msg: "添加商品成功"
        },
        
    })
   
}

exports.deleteGoodsById = async (req, res) => {
    const { id } = req.params

    let goods = await GoodsDAO.findOneAndDelete({ _id: id })
    if (!goods) {
        res.json({
            data: null,
            meta: {
                status: 400,
                msg: '删除商品失败'
            }
        })
        return
    }
    res.json({
        data: null,
        meta: {
            status: 200,
            msg: '删除商品成功'
        }
    })
}