const { Schema, model, Types} = require('mongoose')
const schema = {
    username: {
        type: String,
        required: [true, '请输入用户名']
    },
    password: {
        type: String,
        required: [true, '请输入密码']
    },
    mobile: String,
    type: Number,
    email: {
        type: String,
        required: [true, '请输入密码']
    },
    rid: { type: Schema.Types.ObjectId, ref: 'role', autopopulate:true },
    create_time: Date,
    modify_time: Date,
    mg_state: Boolean, // 当前用户的状态
    role_name: String,
    isDelete: Boolean,
    isActive: Boolean
}
const usersSchema = new Schema(schema, { autoIndex: false })

const Users = model('UserList', usersSchema)


const useCrypt = require('../util/useCrypt')
//sample
// Users.insertMany(
//     [
//         {
//             username: "admin",
//             password: useCrypt('123456'),
//             mobile: "18616358651",
//             type: 1,
//             email: "admin@qq.com",
//             rid: new Types.ObjectId("637323bf57f8cdd4f8e8c496"),
//             create_time: new Date(),
//             mg_state: true, // 当前用户的状态
            
//             isDelete: false,
//             isActive: false
//         },
//         {
//             username: "zs",
//             password: useCrypt('123456'),
//             mobile: "18616358651",
//             type: 1,
//             email: "zs@qq.com",
//             rid: new Types.ObjectId("637323bf57f8cdd4f8e8c496"),
//             create_time: new Date(),
//             mg_state: true, // 当前用户的状态
            
//             isDelete: false,
//             isActive: false
//         },
//         {
//             username: "lisi",
//             password: useCrypt('123456'),
//             mobile: "18616358651",
//             type: 1,
//             email: "lisi@qq.com",
//             rid: new Types.ObjectId("637323bf57f8cdd4f8e8c497"),
//             create_time: new Date(),
//             mg_state: true, // 当前用户的状态
            
//             isDelete: false,
//             isActive: false
//         },
//         {
//             username: "amy",
//             password: useCrypt('123456'),
//             mobile: "18616358651",
//             type: 1,
//             email: "amy@qq.com",
//             rid: new Types.ObjectId("637323bf57f8cdd4f8e8c499"),
//             create_time: new Date(),
//             mg_state: true, // 当前用户的状态
            
//             isDelete: false,
//             isActive: false
//         },

//     ]
// )

module.exports = Users