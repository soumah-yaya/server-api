const RightsDAO = require('../dao/rightsDAO')

exports.rights_list = async (req, res) =>{
    let {type} = req.params;
    if(!type){
        res.json({
            data:[],
            meta:{
                status: 401,
                msg:"没有提供type参数"
            }
        })
        return
    }
    const all = await RightsDAO.find({});
    
    if(!all){
        res.json({
            data: [],
            meta: {
                status: 401,
                msg: "获取列表数据失败"
            }
        })
        return
    }

    if(all && type === "list"){
        const list = all.map(item=>{
            let {_id, authName, path,level} = item
            
            return { _id, authName, path, level }
        })
        
        res.json({
            data: list,
            meta: {
                status: 200,
                msg: "获取列表数据成功"
            }
        })
        return
    }
    if(all && type === "tree"){
        const tree = all.map(item => {
            let { _id, authName, path, children } = item

            return { _id, authName, path, children }
        })
        res.json({
            data: tree,
            meta: {
                status: 200,
                msg: "获取列表数据成功"
            }
        })
        
    }
}