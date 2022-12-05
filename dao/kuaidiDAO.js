const { Schema, model } = require('mongoose')

const schema = new Schema({
    kuaidi_num: String,    
    time: { type: Date, default: Date.now },
   ftime: { type: Date, default: Date.now },
   context: String,
   location: String
})


const data = [
    {
        kuaidi_num:"804909574412544580",
        context: "已签收,感谢使用顺丰,期待再次为您服务",
        location: ""
    },
    {
        kuaidi_num:"804909574412544580",
        context: "[北京市]北京海淀育新小区营业点派件员 顺丰速运 95338正在为您派件",
        location: ""
    },
    {
       kuaidi_num:"804909574412544580",
        context: "快件到达 [北京海淀育新小区营业点]",
        location: ""
    },
    {
        kuaidi_num:"804909574412544580",
        context: "快件在[北京顺义集散中心]已装车,准备发往 [北京海淀育新小区营业点]",
        location: ""
    },
    {
        kuaidi_num:"804909574412544580",
        context: "快件到达 [北京顺义集散中心]",
        location: ""
    },
    {
       kuaidi_num:"804909574412544580",
        context: "快件在[北京宝胜营业点]已装车,准备发往 [北京顺义集散中心]",
        location: ""
    },
    {
       kuaidi_num:"804909574412544580",
        context: "顺丰速运 已收取快件",
        location: ""
    },
    {
        kuaidi_num:"804909574412544580",
        context: "卖家发货",
        location: ""
    },
    {
       kuaidi_num:"804909574412544580",
        context: "您的订单将由HLA(北京海淀区清河中街店)门店安排发货。",
        location: ""
    },
    {
       kuaidi_num:"804909574412544580",
        context: "商品已经下单",
        location: ""
    }
]

const KuaidiDAO = model('Kuaidi', schema)

// KuaidiDAO.insertMany(data)

module.exports = KuaidiDAO