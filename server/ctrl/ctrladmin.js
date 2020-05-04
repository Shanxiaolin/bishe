var modules = require("../models")
var Sequelize = require("sequelize")
const Op = Sequelize.Op

// 获取管理员所有信息
exports.allinfo = async () => {
    let response = await modules.Admin.findAll({
        attributes: {
            exclude: ['id']
        }
    })
    return response
}



// 存储学生数据
exports.upstudent = async (req) => {
    var {
        id
    } = req.body
    var {
        name
    } = req.body
    var {
        token
    } = req.body
    var {
        subject
    } = req.body
    var {
        sclass
    } = req.body
    var {
        sgrade
    } = req.body
    let array = req.body.id
    var response 
    console.log(id[0].id)
    console.log(id[1].id)
    await Promise.all(array.map(async (value, i, arr) => {
        var resp= await modules.Student.create({
            ["s-id"]: id[i].id,
            ["s-name"]: name[i].name,
            ["s-token"]: token[i].token,
            ["s-subject"]:subject[i].subject,
            ["s-class"]:sclass[i].class,
            ["s-grade"]:sgrade[i].grade,
            ["s-type"]: 1,
            ['s-pwd']: 123456
        });
        response = resp
    }));
    return response
}



//  存储教师
exports.upteacher = async (req) => {
    var {
        id
    } = req.body
    var {
        name
    } = req.body
    var {
        token
    } = req.body
    let array = req.body.id
    var response 
    await Promise.all(array.map(async (value, i, arr) => {
      var  resp = await modules.Teacher.create({
            ["t-id"]: id[i].id,
            ["t-name"]: name[i].name,
            ["t-token"]: token[i].token,
            ["t-type"]: 2,
            ['t-pwd']: 123456
        });
         response = resp
    }));
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