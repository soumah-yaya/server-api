const { Schema, model, Types } = require('mongoose')
const fields = {

    cat_name: String,
    cat_pid: String,
    cat_level: String,
    cat_deleted: Boolean,
    children: [
        {

            cat_name: String,
            cat_pid: String,
            cat_level: String,
            cat_deleted: Boolean,
            children: [
                {

                    cat_name: String,
                    cat_pid: String,
                    cat_level: String,
                    cat_deleted: Boolean,

                }
            ]
        }
    ]
}

const schema = new Schema(fields, { new: true })

const CategoriesDAO = model('categorie', schema)

{/* ------------------ add somme data ------------------ */ }
const data = [
    {
        cat_name: "大家电",
        cat_pid: "0",
        cat_level: "0",
        cat_deleted: false,
        children: [
            {
                cat_name: "电视",
                cat_pid: "1",
                cat_level: "1",
                cat_deleted: false,
                children: [
                    {
                        cat_name: "曲面电视",
                        cat_pid: "3",
                        cat_level: "2",
                        cat_deleted: false,
                        children: []
                    },
                    {
                        cat_name: "海信",
                        cat_pid: "3",
                        cat_level: "2",
                        cat_deleted: false,
                        children: []
                    },
                    {
                        cat_name: "夏普",
                        cat_pid: "3",
                        cat_level: "2",
                        cat_deleted: false,
                        children: []
                    },
                    {
                        cat_name: "创维",
                        cat_pid: "3",
                        cat_level: "2",
                        cat_deleted: false,
                        children: [],
                    },
                ]
            },
            {
                cat_name: "空调",
                cat_pid: "1",
                cat_level: "1",
                cat_deleted: false,
                children: []
            },
        ]
    },
    {
        cat_name: "热门推荐",
        cat_pid: "0",
        cat_level: "0",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "海外购",
        cat_pid: "0",
        cat_level: "0",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "手机相机",
        cat_pid: "0",
        cat_level: "0",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "电脑办公",
        cat_pid: "0",
        cat_level: "0",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "厨卫电器",
        cat_pid: "0",
        cat_level: "0",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "食品酒水",
        cat_pid: "0",
        cat_level: "0",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "居家生活",
        cat_pid: "0",
        cat_level: "0",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "厨房电器",
        cat_pid: "0",
        cat_level: "0",
        cat_deleted: false,
        children: []
    },//
    {
        cat_name: "PPTV",
        cat_pid: "3",
        cat_level: "2",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "小米",
        cat_pid: "3",
        cat_level: "2",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "长虹",
        cat_pid: "3",
        cat_level: "2",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "三星",
        cat_pid: "3",
        cat_level: "2",
        cat_deleted: false,
        children: []
    },
    {
        cat_name: "飞利浦",
        cat_pid: "3",
        cat_level: "2",
        cat_deleted: false,
        children: []
    },
]




// CategoriesDAO.insertMany([
//     {
//         cat_name: "家用电器",
//         cat_pid: "0",
//         cat_level: "0",
//         cat_deleted: false,
//         children: [
//             {
//                 _id: "110",
//                 cat_name: "电器",
//                 cat_pid: this.parent._id,
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id: "1101",
//                         cat_name: "曲面电视",
//                         cat_pid: this.parent._id,
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "1102",
//                         cat_name: "OLED电视",
//                         cat_pid: this.parent._id,
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "1103",
//                         cat_name: "4k超清电视",
//                         cat_pid: this.parent._id,
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "1104",
//                         cat_name: "55英寸",
//                         cat_pid: this.parent._id,
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//             {
//                 _id: "120",
//                 cat_name: "空调",
//                 cat_pid: "1",
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id:"121",
//                         cat_name: "整封式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id:"122",
//                         cat_name: "卧式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id:"123",
//                         cat_name: "中央空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id:"124",
//                         cat_name: "1.5匹空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         _id: new Types.ObjectId(),
//         cat_name: "热门推荐",
//         cat_pid: "0",
//         cat_level: "0",
//         cat_deleted: false,
//         children: [
//             {
//                 _id:"210", 
//                 cat_name: "电器",
//                 cat_pid: "2",
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id:"211",
//                         cat_name: "曲面电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id:"212",
//                         cat_name: "OLED电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id:"213",
//                         cat_name: "4k超清电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id:"214",
//                         cat_name: "55英寸",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//             {
//                 _id:"220",
//                 cat_name: "空调",
//                 cat_pid: "2",
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id:"221",
//                         cat_name: "整封式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id:"222",
//                         cat_name: "卧式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id:"223",
//                         cat_name: "中央空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id:"224",
//                         cat_name: "1.5匹空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         _id: new Types.ObjectId(),
//         cat_name: "海外购",
//         cat_pid: "0",
//         cat_level: "0",
//         cat_deleted: false,
//         children: [
//             {
//                 _id: "310", 
//                 cat_name: "电器",
//                 cat_pid: "3",
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id: "311",
//                         cat_name: "曲面电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "312",
//                         cat_name: "OLED电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "313",
//                         cat_name: "4k超清电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "314",
//                         cat_name: "55英寸",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//             {
//                 _id: "320",
//                 cat_name: "空调",
//                 cat_pid: "3",
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id: "321",
//                         cat_name: "整封式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "322",
//                         cat_name: "卧式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "323",
//                         cat_name: "中央空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "324",
//                         cat_name: "1.5匹空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         _id: new Types.ObjectId(),
//         cat_name: "苏宁房产",
//         cat_pid: "0",
//         cat_level: "0",
//         cat_deleted: false,
//         children: [
//             {
//                 _id: "410", 
//                 cat_name: "电器",
//                 cat_pid: "4",
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id: "411",
//                         cat_name: "曲面电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "412",
//                         cat_name: "OLED电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "413",
//                         cat_name: "4k超清电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "414",
//                         cat_name: "55英寸",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//             {
//                 _id: "420",
//                 cat_name: "空调",
//                 cat_pid: "4",
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id: "421",
//                         cat_name: "整封式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "422",
//                         cat_name: "卧式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "423",
//                         cat_name: "中央空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "424",
//                         cat_name: "1.5匹空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         _id: new Types.ObjectId(),
//         cat_name: "手机相机",
//         cat_pid: "0",
//         cat_level: "0",
//         cat_deleted: false,
//         children: [
//             {
//                 _id: "510", 
//                 cat_name: "电器",
//                 cat_pid: "5",
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id: "511",
//                         cat_name: "曲面电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "512",
//                         cat_name: "OLED电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "513",
//                         cat_name: "4k超清电视",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "514",
//                         cat_name: "55英寸",
//                         cat_pid: "101",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//             {
//                 _id: "520",
//                 cat_name: "空调",
//                 cat_pid: "5",
//                 cat_level: "1",
//                 cat_deleted: false,
//                 children: [
//                     {
//                         _id: "521",
//                         cat_name: "整封式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "522",
//                         cat_name: "卧式空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "523",
//                         cat_name: "中央空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                     {
//                         _id: "524",
//                         cat_name: "1.5匹空调",
//                         cat_pid: "102",
//                         cat_level: "2",
//                         cat_deleted: false,

//                     },
//                 ]
//             },
//         ]
//     },

// ])

module.exports = CategoriesDAO