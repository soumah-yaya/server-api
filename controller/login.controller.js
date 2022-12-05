
// User
const UsersDAO = require('../dao/usersDAO')

const utilities = require('../util/utilities')

exports.login = async (req, res) => {

    const { username, password } = req.body;
   
    if (username.trim().length === 0 || password.trim().length === 0) {
        return res.send({
            meta: {
                status: 400,
                msg: '用户名或密码不能为空'
            }
        })
    } else {
        
        let response = await UsersDAO.findOne({ username })
        if (response.length === 0) {
            res.send({
                data: [],
                meta: {
                    status: 401,
                    msg: '用户名不存在'
                }
            })
            return
        }
       
        if (utilities.validatePasswork(password, response.password)) {
            
            const tokenStr = utilities.createToken('username', response.username)
            const { _id: id, rid, username, mobile, email } = response
            res.send({
                data: { id, rid, username, mobile, email },
                meta: {
                    status: 200,
                    msg: '登录成功'
                },
                token: token = 'Bearer ' + tokenStr
            })
        } else {
            // password is invalid
            res.send({
                data: null,
                meta: {
                    status: 400,
                    msg: '密码不正确'
                }
            })
        }

    }
}
