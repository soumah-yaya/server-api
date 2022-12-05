
const { Schema, model } = require('mongoose')

const fields = {
    _id: String,
    authName: String,
    level: String,
    path: String,
    pid: String,
    children: [
        {
            _id: String,
            authName: String,
            path: String,
            pid: String,
            children: [{
                _id: String,
                authName: String,
                path: String,
                pid: String,
                children: Array
            }]
        }
    ]
}
const schema = new Schema(fields, { new: true })

const Rights = model("rights", schema)

// Rights.insertMany(
// [
//     {
//         _id: "11",
//         authName: "商品管理",
//         path: "goods",
//         level: '0',
//         pid: "0",
//         children: [
//             {
//                 _id: "111",
//                 authName: "商品列表",
//                 path: "goods",
//                 pid: "11",
//                 children: [
//                     {
//                         _id: "1111",
//                         authName: "添加商品",
//                         path: "goods",
//                         pid: "11,111",

//                     },
//                     {
//                         _id: "1112",
//                         authName: "商品修改",
//                         path: "goods/:id",
//                         pid: "11,111",

//                     },
//                     {
//                         _id: "1113",
//                         authName: "商品删除",
//                         path: "goods/:id",
//                         pid: "11,111",

//                     },
//                     {
//                         _id: "1114",
//                         authName: "更新商品图片",
//                         path: "goods/:id",
//                         pid: "11,111",

//                     },
//                     {
//                         _id: "1115",
//                         authName: "更新商品属性",
//                         path: "goods/:id",
//                         pid: "11,111",

//                     },
//                     {
//                         _id: "1116",
//                         authName: "更新商品状态",
//                         path: "goods/:id",
//                         pid: "11,111",

//                     },
//                     {
//                         _id: "1117",
//                         authName: "获取商品详情",
//                         path: "goods/:id",
//                         pid: "11,111",

//                     },
//                 ]
//             },
//             {
//                 _id: "112",
//                 authName: "分类参数",
//                 path: "goods",
//                 pid: "11",
//                 children: [
//                     {
//                         _id: "1121",
//                         authName: "获取参数列表",
//                         path: "goods",
//                         pid: "11,112",

//                     },
//                     {
//                         _id: "1122",
//                         authName: "创建商品参数",
//                         path: "goods",
//                         pid: "11,112",

//                     },
//                     {
//                         _id: "1123",
//                         authName: "删除商品参数",
//                         path: "goods",
//                         pid: "11,112",

//                     },


//                 ]
//             },
//             {
//                 _id: "113",
//                 authName: "商品分类",
//                 path: "goods",
//                 pid: "11",
//                 children: [
//                     {
//                         _id: "1131",
//                         authName: "添加分类",
//                         path: "goods",
//                         pid: "11,113",

//                     },
//                     {
//                         _id: "1132",
//                         authName: "删除分类",
//                         path: "goods",
//                         pid: "11,113",

//                     },
//                     {
//                         _id: "1133",
//                         authName: "获取分类详情",
//                         path: "goods",
//                         pid: "11,113",

//                     },


//                 ]
//             },
//         ]
//     },
//     {
//         _id: "22",
//         authName: "订单管理",
//         path: "orders",
//         level: '2',
//         pid: "0",
//         children: [
//             {
//                 _id: "221",
//                 authName: "订单列表",
//                 path: "orders",
//                 pid: "22",
//                 children: [
//                     {
//                         _id: "2211",
//                         authName: "添加订单",
//                         path: "orders/:id",
//                         pid: "22,221",

//                     },
//                     {
//                         _id: "2212",
//                         authName: "订单更新",
//                         path: "goods/:id",
//                         pid: "22,221",

//                     },

//                     {
//                         _id: "2213",
//                         authName: "获取订单详情",
//                         path: "goods/:id",
//                         pid: "22,221",

//                     },
//                 ]
//             },

//         ]
//     },
//     {
//         _id: "33",
//         authName: "权限管理",
//         path: "rights",
//         level: '2',
//         pid: "0",
//         children: [
//             {
//                 _id: "331",
//                 authName: "角色列表",
//                 path: "rights/:type",
//                 pid: "33",
//                 children: [
//                     {
//                         _id: "3311",
//                         authName: "添加角色",
//                         path: "roles",
//                         pid: "33,331",

//                     },
//                     {
//                         _id: "3312",
//                         authName: "删除角色",
//                         path: "roles/:id",
//                         pid: "33,331",

//                     },
//                     {
//                         _id: "3313",
//                         authName: "角色授权",
//                         path: "roles/:id",
//                         pid: "33,331",

//                     },
//                     {
//                         _id: "3314",
//                         authName: "取消角色授权",
//                         path: "roles/:id",
//                         pid: "33,331",

//                     },
//                     {
//                         _id: "3315",
//                         authName: "获取角色列表",
//                         path: "roles/:id",
//                         pid: "33,331",

//                     },
//                     {
//                         _id: "3316",
//                         authName: "获取角色详情",
//                         path: "roles/:id",
//                         pid: "33,331",

//                     },
//                     {
//                         _id: "3317",
//                         authName: "更新角色信息",
//                         path: "roles/:id",
//                         pid: "33,331",

//                     },
//                     {
//                         _id: "3318",
//                         authName: "更新角色权限",
//                         path: "roles/:id",
//                         pid: "33,331",

//                     },
//                 ]
//             },
//             {
//                 _id: "332",
//                 authName: "权限列表",
//                 path: "rights/:type",
//                 pid: "33",
//                 children: [
//                     {
//                         _id: "3321",
//                         authName: "查看权限",
//                         path: "rights/:type",
//                         pid: "33,332",
//                     }
//                 ]
//             }

//         ]
//     },
//     {
//         _id: "44",
//         authName: '用户管理',
//         path: "users",
//         level: "0",
//         pid: "0",
//         children: [
//             {
//                 _id: "441",
//                 authName: "用户列表",
//                 path: "users",
//                 pid: "44",
//                 children: [
//                     {
//                         _id: "4411",
//                         authName: "添加用户",
//                         path: "users",
//                         pid: "44,441",

//                     },
//                     {
//                         _id: "4412",
//                         authName: "删除用户",
//                         path: "users/:uid/state/:type",
//                         pid: "44,441",

//                     },
//                     {
//                         _id: "4413",
//                         authName: "更新用户",
//                         path: "users/:id",
//                         pid: "44,441",

//                     },
//                     {
//                         _id: "4414",
//                         authName: "获取用户角色",
//                         path: "users/:id",
//                         pid: "44,441",

//                     },
//                     {
//                         _id: "4415",
//                         authName: "分配用户角色",
//                         path: "users/:id",
//                         pid: "44,441",

//                     },
//                     {
//                         _id: "4416",
//                         authName: "设置管理状态",
//                         path: "users/:id",
//                         pid: "44,441",

//                     },

//                 ]
//             },

//             {
//                 _id: "442",
//                 authName: "分配用户角色",
//                 path: "users/:id/role",
//                 pid: "13",
//                 children: []
//             },
//         ]
//     },


//     {
//         _id: "55",
//         authName: "数据统计",
//         path: "reports/type/1",
//         level: '2',
//         pid: "0",
//         children: [
//             {
//                 _id: "551",
//                 authName: "数据报表",
//                 path: "reports/type/1",
//                 pid: "55",
//                 children: [
//                     {
//                         _id: "5511",
//                         authName: "查看数据",
//                         path: "reports/type/1",
//                         pid: "55,551",
//                     }
//                 ]
//             },]
//     }

// ]
// )
// export the collection

module.exports = Rights