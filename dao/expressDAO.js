const {Schema, model} = require('mongoose')

const schema = new Schema({
    order_id: Schema.Types.ObjectId,
    express_com: String,
    express_nu:  String,
    create_time: {type: Date, default: Date.now},
    update_time: {type: Date, default: Date.now},
})


const data = [
    {
        order_id: "6388bb8b16d8c5958affc8d1",
        express_com: '汇通快递',
        express_nu: '70365716896101',       
    },
    {
        order_id: "6388bb8b16d8c5958affc8d1",
        express_com: '圆通快递',
        express_nu: '70365716896101',       
    },
    {
        order_id: "6388bb8b16d8c5958affc8d1",
        express_com: '顺丰快递',
        express_nu: '70365716896101',       
    },
]

const ExpressDAO = model('Express', schema)

ExpressDAO.insertMany(data)

module.exports = ExpressDAO