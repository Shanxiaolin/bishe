 var modules = require("../models")
 var Sequelize = require("sequelize")
 const Op = Sequelize.Op

 // 获取所有作业信息
 exports.allinfo = async () => {
     let response = await modules.Worktest.findAll({
         attributes: {
             exclude: ['id']
         }
     })
     return response
 }



 // 获取指定学科，专业课，年级，班级作业信息
 exports.pointinfo = async (req) => {
     let {
         subject
     } = req.body
     let {
         course
     } = req.body
     let {
         grade
     } = req.body
     let {
         classes
     } = req.body
     let response = await modules.Worktest.findAll({
             where: {
                 [Op.and]: [{
                         ["s-subject"]: subject
                     },
                     {
                         ["s-grade"]: grade
                     },
                     {
                         ["s-class"]: classes
                     },
                     {
                         ["s-course"]: course
                 }]
         }
     })
 return response
 }



 // 获取自己作业信息
 exports.myinfo = async (req) => {
     let {
         id
     } = req.query
     let response = await modules.Worktest.findAll({
         attributes: {
             exclude: ['id']
         },
         where: {
             ["s-id"]: id
         }
     })
     return response
 }



 // 上传作业
 exports.work = async (req) => {
    let {
        id
    } = req.body
    let {
        classes
    } = req.body
    let {
        grade
    } = req.body
    let {
        text
    } = req.body
    let {
        subject
    } = req.body
    let {
        course
    } = req.body
    let response = await modules.Worktest.create({
        ["s-id"]:id,
        ["s-class"]:classes,
        ["s-grade"]:grade,
        ["s-course"]:course,
        ["s-subject"]:subject,
        ["w-text"]:text
    })
    return response
}



// 给分，给回馈 更新方法成功返回值为1失败反回值为0
exports.mark = async (req) => {
    let {
        id
    } = req.body
    let {
        mark
    }=req.body
    let {
        responses
    }=req.body
    let response = await modules.Worktest.update({
        ["w-mark"]: mark,
        ["w-response"]:responses
    }, {
        where: {
        "id": id
        }
    }).catch(err=>{
        throw err
    })
    return response
}
