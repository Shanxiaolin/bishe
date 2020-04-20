var modules = require("../models")
var Sequelize = require("sequelize")
const Op = Sequelize.Op


// 获取所有教师信息
exports.allinfo = async () => {
    let response = await modules.Teacher.findAll({
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
    let response = await modules.Teacher.findAll({
        attributes: {
            exclude: ['id']
        },
        where: {
            [Op.and]: [{
                ["t-id"]: id
            }, {
                ["t-pwd"]: password
            }]
        }
    })
    return response
}



// 查询除了密码和token的信息
exports.publicinfo = async (req) => {
    let {
        name
    } = req.query;
    let response = await modules.Teacher.findAll({
        attributes: ['t-id', 't-name'],
        where: {
            ["t-name"]: name
        }
    })
    return response
}



// 更改老师密码
exports.updatepwd = async (req) => {
    let {
        password
    } = req.body;
    let {
        id
    } = req.body;
    let response = await modules.Teacher.update({
        ["t-pwd"]: password
    }, {
        where: {
            ["t-id"]: id
        }
    });
    return response
}



// 更改或添加token
exports.updatetoken = async (req) => {
    let {
        token
    } = req.body;
    let {
        id
    } = req.body;
    let response = await modules.Teacher.update({
        ["t-token"]: token
    }, {
        where: {
            ["t-id"]: id
        }
    });
    return response
}



// 查询token
exports.token = async (req) => {
    let {
        id
    } = req.body;
    let {
        token
    } = req.body
    let response = await modules.Teacher.findAll({
        attributes: {
            exclude: ['id']
        },
        where: {
            [Op.and]: [{
                ["t-id"]: id
            }, {
                ["t-token"]: token
            }]
        },

    });
    return response.length
}