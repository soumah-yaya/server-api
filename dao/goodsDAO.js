const { Schema, model } = require('mongoose')

const goodsSchema = new Schema({
    goods_name: { type: String, required: true },
    goods_price: { type: Number, required: true, default: 0.00 },
    goods_number: { type: Number, required: true, default: 0 },
    goods_weight: { type: Number, required: true, default: 0 },
    cat_id: { type: Schema.Types.ObjectId, },
    goods_introduce: { type: String },
    goods_big_logo: { type: String, default: '' },
    goods_small_logo: { type: String, default: '' },
    is_del: { type: Boolean, default: false },
    add_time: { type: Date, default: Date.now },
    upd_time: { type: Date, default: null },
    delete_time: { type: Date, default: null },
    cat_one_id: { type: Schema.Types.ObjectId, },
    cat_two_id: { type: Schema.Types.ObjectId, },
    cat_three_id: { type: Schema.Types.ObjectId, },
    hot_number: { type: Number, default: 0 },
    is_promote: { type: Boolean, default: false },
    goods_state: { type: Number, default: 0 },
})

const Goods = model('Good', goodsSchema)

const data = [
    {
        goods_name: '南极人女士三角内裤 中腰可爱无痕女士内裤 均码 k102P1027',
        goods_price: 49.00,
        goods_number: 100,
        goods_weight:100,
        cat_id: '637c17200cc74c68e2fd4d58',
        goods_introduce: '商品详情',
        is_del:false,
        add_time: Date.now(),
        cat_one_id: '637c17200cc74c68e2fd4d58',
        cat_two_id: '637c173a0cc74c68e2fd4d67',
        cat_three_id: '637c17990cc74c68e2fd4de4',      
        
    },
    {
        goods_name: '南极人女士三角内裤 中腰可爱无痕女士内裤 均码 k102P1027',
        goods_price: 49.00,
        goods_number: 100,
        goods_weight:100,
        cat_id: '637c17200cc74c68e2fd4d58',
        goods_introduce: '商品详情',
        is_del:false,
        add_time: Date.now(),
        cat_one_id: '637c17200cc74c68e2fd4d58',
        cat_two_id: '637c173a0cc74c68e2fd4d67',
        cat_three_id: '637c17990cc74c68e2fd4de4',      
        
    },
    
]

// Goods.insertMany(data)

module.exports = Goods;
