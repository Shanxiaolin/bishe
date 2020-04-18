var modules = require("../models")


// 获取管理员所有信息
exports.allinfo = async() => {
    let response = await modules.Admin.findAll({
        attributes: {
            exclude: ['id']
        }
    })
    return response
}