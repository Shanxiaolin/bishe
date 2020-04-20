var modules = require("../models")
var Sequelize = require("sequelize")
const Op = Sequelize.Op

// 获取管理员所有信息
exports.allinfo = async() => {
    let response = await modules.Admin.findAll({
        attributes: {
            exclude: ['id']
        }
    })
    return response
}



// 登陆验证
exports.loginfo = async (req) => {
    let {
        id
    } = req.query
    let {
        password
    } = req.query
    let response = await modules.Admin.findAll({
        attributes: {
            exclude: ['id']
        },
        where: {
            [Op.and]: [{
                ["a-id"]: id
            }, {
                ["a-pwd"]: password
            }]
        }
    })
    return response
}