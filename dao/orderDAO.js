const {Schema, model} = require('mongoose')

const schema = new Schema({
    
    "user_id": Schema.Types.ObjectId,
    "order_number": String,
    "order_price": { type: Number , default: 0},
    "order_pay": {type: String, enum:['0','1','2','3'], default: '1'},
    "is_send": {type:String, enum:['是','否'], default: '否'},
    "trade_no": String,
    "order_fapiao_title": {type:String, enum:['个人','公司']},
    "order_fapiao_company": {type:String, default:""},
    "order_fapiao_content": {type:String, default:""},
    "consignee_addr": String,
    "pay_status": {type:String,enum:['0','1'], default:'0'},
    "create_time": {type: Date, default: Date.now},
    "update_time": { type: Date, default: Date.now }
})

const OrderDAO = model('Order', schema)

const data = [
    {

        "user_id": '6373305124e8b175e8ab5394',
        "order_number": "itcast-59e7502d7993d",
        "order_price": 322,
        "order_pay": "1",
        "is_send": "是",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "办公用品",
        "consignee_addr": "a:7:{s:6:\"cgn_id\";i:1;s:7:\"user_id\";i:133;s:8:\"cgn_name\";s:9:\"王二柱\";s:11:\"cgn_address\";s:51:\"北京市海淀区苏州街长远天地大厦305室\";s:7:\"cgn_tel\";s:11:\"13566771298\";s:8:\"cgn_code\";s:6:\"306810\";s:11:\"delete_time\";N;}",
        "pay_status": "1",        
    },
    {

        "user_id": '6373305124e8b175e8ab5394',
        "order_number": "itcast-59e7502d7993d",
        "order_price": 322,
        "order_pay": "1",
        "is_send": "是",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "办公用品",
        "consignee_addr": "a:7:{s:6:\"cgn_id\";i:1;s:7:\"user_id\";i:133;s:8:\"cgn_name\";s:9:\"王二柱\";s:11:\"cgn_address\";s:51:\"北京市海淀区苏州街长远天地大厦305室\";s:7:\"cgn_tel\";s:11:\"13566771298\";s:8:\"cgn_code\";s:6:\"306810\";s:11:\"delete_time\";N;}",
        "pay_status": "1",        
    },
    {

        "user_id": '6373305124e8b175e8ab5394',
        "order_number": "itcast-59e7502d7993d",
        "order_price": 322,
        "order_pay": "1",
        "is_send": "是",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "办公用品",
        "consignee_addr": "a:7:{s:6:\"cgn_id\";i:1;s:7:\"user_id\";i:133;s:8:\"cgn_name\";s:9:\"王二柱\";s:11:\"cgn_address\";s:51:\"北京市海淀区苏州街长远天地大厦305室\";s:7:\"cgn_tel\";s:11:\"13566771298\";s:8:\"cgn_code\";s:6:\"306810\";s:11:\"delete_time\";N;}",
        "pay_status": "1",        
    },
]


// OrderDAO.insertMany(data)

module.exports = OrderDAO