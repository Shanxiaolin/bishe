var modules = require("../models")
var Sequelize = require("sequelize")
const Op = Sequelize.Op

// 获取所有学生信息
exports.allinfo = async() => {
    let response = await modules.Student.findAll({
        attributes: {
            exclude: ['id']
        }
    })
    return response
}



// 查询除了密码和token的信息
exports.publicinfo = async(req) => {
    let {
        name
    } = req.query;
    let response = await modules.Student.findAll({
        attributes: ['s-subject', 's-grade', 's-name', 's-class', 's-id'],
        where: {
            ["s-name"]: name
        }
    })
    return response
}



// 更改学生密码
exports.updatepwd = async(req) => {
    let {
        password
    } = req.body;
    let {
        id
    } = req.body;
    let response = await modules.Student.update({
        ["s-pwd"]: password
    }, {
        where: {
            ["s-id"]: id
        }
    });
    return response
}



// 更改或添加token
exports.updatetoken=async(req)=>{
    let { token } = req.body;
    let { id } = req.body;
    let response =await modules.Student.update({
        ["s-token"]:token
      }, {
        where: {
          ["s-id"]: id 
        }
      });
    return response
}



// 查询token
exports.token=async(req)=>{
    let { id } = req.body;
    let {token} =req.body;
    let response =await modules.Student.findAll({
        attributes: {
            exclude: ['id']
        },
        where: {
            [Op.and]: [{
                ["s-id"]: id
            }, {
                ["s-token"]: token
            }]
        },
      });
    return response.length
}