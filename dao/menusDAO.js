const {Schema, model} = require('mongoose')

const schema = {
    _id: String,
    authName: String,
    path: String,
    children: Array
}
const menusSchema = new Schema(schema, {autoIndex:false})

const SideMenus = model('SideMenuItem', menusSchema)

// sample
// const MenuItem = new SideMenuItem 
// ({
//     _id: '108',
//     authName:"商品管理",
//     path:"goods",
//     children: [
//     {
//         _id: '120',
//         authName: "商品列表",
//         path: "goods",
//         children:[]
// },
//     {
//         _id: '122',
//         authName: "商品分类",
//         path: "goods",
//         children:[]
// },
//     {
//         _id: '124',
//         authName: "分类参数",
//         path: "goods",
//         children:[]
// },
// ]
// });
// MenuItem.save();
module.exports = SideMenus