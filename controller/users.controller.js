const { Types } = require('mongoose')
const UsersDAO = require('../dao/usersDAO')
const useCrypt = require('../util/useCrypt')

/* CREATE NEW USER */
exports.users_create = async (req, res) => {
    let { username: uname, password, email: mail, moble: mob } = req.body
    const data = {
        username: uname,
        password: useCrypt(password),
        mobile: mob,
        type: 1,
        email: mail,
        rid: new Types.ObjectId("637323bf57f8cdd4f8e8c499"),
        create_time: new Date(),
        mg_state: false, // 当前用户的状态        
        isDelete: false,
        isActive: false

    }

    const newUser = await UsersDAO.create(data)
    let {
        _id,
        rid,
        username,
        mobile,
        email, } = newUser
    if (!newUser) {
        res.json({
            data: null,
            meta: {
                status: 401,
                msg: '添加用户失败'
            }
        })
        return
    }
    res.json({
        data: {
            _id,
            rid,
            username,
            mobile,
            email,
        },
        meta: {
            status: 201,
            msg: '添加用户成功'
        }
    })
}
/* GET USER LIST */
/**
 * this get all users according to the query parameters and return the response as un array
 * @param {object} req request object
 * @param {Array} res response array
 * @returns Array
 */
exports.users_list = async (req, res) => {
    let { query, pagesize, pagenum } = req.query

    let filter = { username: new RegExp(query, 'i') }
    let skip = pagesize * (pagenum - 1)
    let limit = parseInt(pagesize)
    let total = await UsersDAO.count()

    const data = await UsersDAO.find(filter).skip(skip).limit(limit).populate('rid', 'roleName')

    if (!data) {
        res.json({
            data: [],
            meta: {
                status: 500,
                msg: '服务器出错误'
            }
        })
        return
    } else if (data?.length === 0) {
        res.json({
            data: [],
            meta: {
                status: 401,
                msg: '获取数据失败'
            }
        })
        return
    }
    // array of specific fields to set as response
    const users = data.reduce((prev, curr) => {
        let { _id, username, mobile, type, email, create_time, mg_state, rid: { roleName: role_name } } = curr
        prev.push({ _id, username, mobile, type, email, create_time, mg_state, role_name })
        return prev
    }, [])

    res.json({
        data: users,
        meta: {
            status: 200,
            msg: '获取数据成功'
        },
        total: total

    })

}
/* GET USER BY ID */
exports.users_get_by_id = async (req, res, next) => {
    const { id } = req.params
    
    let user = await UsersDAO.findOneAndUpdate({ _id: id }, { new: true })
    console.log(user)
    if (!user) {
        res.json({
            data: null,
            meta: {
                status: 401,
                msg: '获取用户失败'
            }
        })
        return
    }
    let { _id, username, rid:role_id, mobile, email } = user
    res.json({
        data: { _id, username, role_id, mobile, email },
        meta: {
            status: 200,
            msg: '获取用户成功'
        }
    })
}
/* UPDATE USER BY ID */
exports.users_update_by_id = async (req, res, next) => {
    const { id } = req.params
    const { email:mail, mobile:mob } = req.body
    console.log(mail, mob)
    let user = await UsersDAO.findOneAndUpdate({ _id: id }, { email: mail, mobile: mob }, { new: true })
    if (!user) {
        res.json({
            data: null,
            meta: {
                status: 401,
                msg: '修改用户失败'
            }
        })
        return
    }
    let {_id, rid,username,mobile,email,mg_state} = user
    res.json({
        data: { _id, rid, username, mobile, email, mg_state },
        meta: {
            status: 200,
            msg: '修改用户成功'
        }
    })
}
/* DELETE USER  */
exports.users_delete = async (req, res) => {
    const { id } = req.params

    let user = await UsersDAO.findOneAndDelete({ _id: id })
    if (!user) {
        res.json({
            data: null,
            meta: {
                status: 401,
                msg: '删除用户失败'
            }
        })
        return
    }
    res.json({
        data: null,
        meta: {
            status: 200,
            msg: '删除用户成功'
        }
    })
}
/* UPDATE USER STATE */
exports.users_update_state = async (req, res) => {
    const { uid, type } = req.params;

    let updateSate = await UsersDAO.findOneAndUpdate({ _id: uid }, { mg_state: type }, { new: true })
    if (!updateSate) {
        res.json({
            data: [],
            meta: {
                status: 401,
                msg: '修改状态失败'
            }
        })
        return
    }
    res.json({
        data: updateSate,
        meta: {
            status: 201,
            msg: '修改状态成功'
        }
    })
}

/*UPDATE USER'S ROLE NAME*/
exports.users_update_role_name = async (req, res) => {
    // console.log('update')
    const { id } = req.params
    const { rid } = req.body
    let updateUser = await UsersDAO.findOneAndUpdate({ _id: id }, { rid: new Types.ObjectId(rid) }, { new: true })
    if (!updateUser) {
        return res.json({
            data: [],
            meta: {
                status: 401,
                msg: '分配角色失败'
            }
        })
    }
    res.json({
        data: updateUser,
        meta: {
            status: 201,
            msg: '分配角色成功'
        }
    })
}