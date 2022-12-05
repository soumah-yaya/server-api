const RolesDAO = require('../dao/rolesDAO')
const RightsDAO = require('../dao/rightsDAO')
const lodash = require('lodash')
const { Schema } = require('mongoose')

exports.getRolesList = async (req, res) => {
    const roles = await RolesDAO.find({})
    if (!roles) {
        res.json({
            data: [],
            meta: {
                status: 401,
                msg: '获取角色列表失败'
            }
        })
        return
    }
    res.json({
        data: roles,
        meta: {
            status: 200,
            msg: '获取角色列表成功'
        }
    })
}
exports.addNewRole = async (req, res) => {
    const { roleName, roleDesc } = req.body
    const newRole = await RolesDAO.insertMany({
        _id: new Schema.Types.ObjectId(),
        roleName,
        roleDesc,
        children: []
    })
    // console.log(newRole)
    if (!newRole) {
        res.json({
            data: [],
            meta: {
                status: 401,
                msg: "添加新角色失败"
            }
        })
        return
    }

    res.json({
        data: [newRole[0]._id, newRole[0].roleName, newRole[0].roleDesc],
        meta: {
            status: 200,
            msg: "添加新角色成功"
        }
    })
}
exports.updateRole = async (req, res) => {
    // console.log(req.params.id)
    const { id } = req.params
    const { roleName, roleDesc } = req.body
    const role = await RolesDAO.findOneAndUpdate({ _id: id }, {
        roleName,
        roleDesc,

    })
    // console.log(role)
    if (!role) {
        res.json({
            data: [],
            meta: {
                status: 401,
                msg: "更新角色失败"
            }
        })
        return
    }

    res.json({
        data: [{ _id: role._id, roleName: role.roleName, roleDesc: role.roleDesc }],
        meta: {
            status: 200,
            msg: "更新角色成功"
        }
    })
}
exports.deleteRole = async (req, res) => {
    const { id } = req.params

    const role = await RolesDAO.findOneAndDelete({ _id: id })
    if (!role) {
        res.json({
            data: [],
            meta: {
                status: 401,
                msg: "删除角色失败"
            }
        })
        return
    }

    res.json({
        data: [],
        meta: {
            status: 200,
            msg: "删除角色成功"
        }
    })
}
exports.deleteRoleByTagId = async (req, res) => {
    const { roleId, rightId } = req.params

    const currentDocument = await RolesDAO.findOne({ _id: roleId })
    if (!currentDocument) {
        res.json({
            data: [],
            meta: {
                status: 401,
                msg: "删除角色失败"
            }
        })
        return
    }
    // findOne returns an object, modify its result to
    // remove the rights with the given rights id from the last children. 
    currentDocument.children = currentDocument.children.map((el1) => {
        el1.children = el1.children.map((el2) => {
            el2.children = el2.children.filter((el3) => {
                return el3._id !== rightId   //filter out the rights with id= rightId
            })
            return el2
        })
        return el1
    })
    let { roleName, roleDesc, children } = currentDocument
    const updatedDocument = await RolesDAO.findOneAndUpdate({ _id: roleId }, { roleName, roleDesc, children }, { new: true })

    res.json({

        data: updatedDocument,
        meta: {
            status: 200,
            msg: "删除角色成功"
        }
    })
}

exports.updateRoleRights = async (req, res) => {
    let { roleId } = req.params;
    let { rids } = req.body;   

    const rights = await RightsDAO.find({})  

    let allIds = rids.split(',') // get array from the rids string
    // let filter this array of rights
    let newRights = lodash.filter(rights, (level1) => {
        let level1Has = lodash.includes(allIds, level1._id)
        if (level1Has) {
           
            let level1Children = lodash.filter(level1.children, (level2) => {
                let level2Has = lodash.includes(allIds, level2._id)
                if (level2Has) {
                   
                    let level2Children = lodash.filter(level2.children, (level3) => {
                        let level3Has = lodash.includes(allIds, level3._id)
                        if (level3Has) {
                            
                            return lodash.includes(allIds, level3._id)
                        }
                    })
                    level2.children = level2Children
                }
                return level2Has
            })
            level1.children = level1Children
        }
        return level1Has
    })
    
    // update the roleId
    const role = await RolesDAO.findOneAndUpdate({ _id: roleId }, { children: newRights })
    // console.log('new',newRights)
    if (!role) return res.json({
        data: [],
        meta: {
            status: 401,
            msg: '设置权限失败'
        }
    })
    res.json({
        data: newRights,
        meta: {
            status: 201,
            msg: '设置权限成功'
        }
    })

}