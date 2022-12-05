const { Schema, model } = require('mongoose')

const attrSchema = new Schema({
    attr_name: { type: String, required: true },
    cat_id: { type: Schema.Types.ObjectId },
    attr_sel: { type: String, enum: ['only', 'many'], required: true, default: 'only' },
    attr_write: { type: String, enum: ['manual', 'list'], required: true, default: 'manual' },
    attr_vals: { String },
    delete_time: { type: Date },
})

// create model
const AttributeDAO = model('Attribute', attrSchema)

const data = [
    {
        attr_name: '主观参数 - 型号',
        cat_id: '637c17990cc74c68e2fd4de4',
        attr_sel: 'only',
        attr_write: 'manual',
        attr_vals: '00002',
        delete_time: null,
    },
    {
        attr_name: '实质参数-适用人群',
        cat_id: '637c17990cc74c68e2fd4de4',
        attr_sel: 'many',
        attr_write: 'list',
        attr_vals: '淡黄色,紫色,宝蓝,红色,肤色,黑色,白色,均码',
        delete_time: null,
    },
    {
        attr_name: '颜色',
        cat_id: '637c17990cc74c68e2fd4de4',
        attr_sel: 'many',
        attr_write: 'list',
        attr_vals: '4条装高腰1662,4条装高腰1661,5条装中腰1305,5条装中腰2006,5条装高腰1665,5条装中腰1543,均码',
        delete_time: null,
    },
    {
        attr_name: '主观参数-品牌',
        cat_id: '637c17990cc74c68e2fd4de4',
        attr_sel: 'only',
        attr_write: 'manual',
        attr_vals: '',
        delete_time: null,
    },
    {
        attr_name: '规格-包装尺寸',
        cat_id: '637c17af0cc74c68e2fd4dfc',
        attr_sel: 'only',
        attr_write: 'manual',
        attr_vals: '285*80*80毫米',
        delete_time: null,
    },
    {
        attr_name: '颜色',
        cat_id: '637c17af0cc74c68e2fd4dfc',
        attr_sel: 'many',
        attr_write: 'list',
        attr_vals: '590男袜白色5双,590男袜混色5双,590男袜深灰5双,船袜星条女5双,590男袜深色5双,590男袜黑色5双,船袜菱形男5双,船袜条纹男5双,船袜清爽条纹女5双,船袜波点女5双,590男袜浅灰5双,590男袜藏青5双,船袜素色男5双,船袜竹节男5双,船袜国旗男5双,船袜拼色男5双,船袜迷宫男5双装,船袜素色女5双,均码',
        delete_time: null,
    },
    {
        attr_name: '规格-包装尺寸',
        cat_id: '637c17bb0cc74c68e2fd4e16',
        attr_sel: 'only',
        attr_write: 'manual',
        attr_vals: '285*80*80毫米',
        delete_time: null,
    },
    {
        attr_name: '颜色',
        cat_id: '637c17bb0cc74c68e2fd4e16',
        attr_sel: 'many',
        attr_write: 'list',
        attr_vals: '590男袜白色5双,590男袜混色5双,590男袜深灰5双,船袜星条女5双,590男袜深色5双,590男袜黑色5双,船袜菱形男5双,船袜条纹男5双,船袜清爽条纹女5双,船袜波点女5双,590男袜浅灰5双,590男袜藏青5双,船袜素色男5双,船袜竹节男5双,船袜国旗男5双,船袜拼色男5双,船袜迷宫男5双装,船袜素色女5双,均码',
        delete_time: null,
    },
    {
        attr_name: '主观参数 - 型号',
        cat_id: '637c1ab10cc74c68e2fd59b0',
        attr_sel: 'only',
        attr_write: 'manual',
        attr_vals: '00002',
        delete_time: null,
    },
    {
        attr_name: '实质参数-适用人群',
        cat_id: '637c1ab10cc74c68e2fd59b0',
        attr_sel: 'many',
        attr_write: 'list',
        attr_vals: '淡黄色,紫色,宝蓝,红色,肤色,黑色,白色,均码',
        delete_time: null,
    },
    {
        attr_name: '颜色',
        cat_id: '637c1add0cc74c68e2fd5ab5',
        attr_sel: 'many',
        attr_write: 'list',
        attr_vals: '4条装高腰1662,4条装高腰1661,5条装中腰1305,5条装中腰2006,5条装高腰1665,5条装中腰1543,均码',
        delete_time: null,
    },
    {
        attr_name: '主观参数-品牌',
        cat_id: '637c1add0cc74c68e2fd5ab5',
        attr_sel: 'only',
        attr_write: 'manual',
        attr_vals: '',
        delete_time: null,
    },
    {
        attr_name: '规格-包装尺寸',
        cat_id: '637c17bb0cc74c68e2fd4e16',
        attr_sel: 'only',
        attr_write: 'manual',
        attr_vals: '285*80*80毫米',
        delete_time: null,
    },
    {
        attr_name: '颜色',
        cat_id: '637c17bb0cc74c68e2fd4e16',
        attr_sel: 'many',
        attr_write: 'list',
        attr_vals: '590男袜白色5双,590男袜混色5双,590男袜深灰5双,船袜星条女5双,590男袜深色5双,590男袜黑色5双,船袜菱形男5双,船袜条纹男5双,船袜清爽条纹女5双,船袜波点女5双,590男袜浅灰5双,590男袜藏青5双,船袜素色男5双,船袜竹节男5双,船袜国旗男5双,船袜拼色男5双,船袜迷宫男5双装,船袜素色女5双,均码',
        delete_time: null,
    },
]
// AttributeDAO.insertMany(data)
module.exports = AttributeDAO