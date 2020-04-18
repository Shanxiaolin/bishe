 var modules = require("../models")
 var Sequelize = require("sequelize")
 const Op = Sequelize.Op

 // 获取所有实验室信息
 exports.allinfo = async () => {
     let response = await modules.Lab.findAll({
         attributes: {
             exclude: ['id']
         }
     })
     return response
 }



 // 获取指定实验室信息
 exports.appointinfo = async (req) => {
     let {
         id
     } = req.query
     let response = await modules.Lab.findAll({
         attributes: {
             exclude: ['id']
         },
         where: {
             ["l-id"]: id
         }
     })
     return response
 }



 // 通过专业，年级，班级查看实验室预约信息  可用
 exports.scgc = async (req) => {
     let {
         subject
     } = req.body
     let {
         grade
     } = req.body
     let {
         classes
     } = req.body
     let {
         course
     } = req.body
     let response = await modules.Lab.findAll({
         attributes: {
             exclude: ['id']
         },
         where: {
             [Op.and]: [{
                     ["s-subject"]: subject
                 }, {
                     ["s-grade"]: grade
                 },{
                     ["s-course"]: course
                 }, {
                     ["s-class"]: classes
                 }
             ]
         }
     })
     return response
 }



 // 检测实验室是否可被预约,返回response
 exports.check = async (req) => {
     let {
         time
     } = req.body
     let {
         id
     } = req.body
     let response = await modules.Lab.findAll({
         attributes: {
             exclude: ['id']
         },
         where: {
             [Op.and]: [{
                 ["l-id"]: id
             }, {
                 ["l-time"]: time
             }, ]
         }
     })
     return response
 }




 // 存储实验室预约信息,返回response
 exports.store = async (req) => {
     let {
         subject
     } = req.body
     let {
         id
     }=req.body
     let {
         course
     } = req.body
     let {
         grade
     } = req.body
     let {
         classes
     } = req.body
     let {
         time
     } = req.body
     let {
         name
     } = req.body
     let {
         tid
     } = req.body
     let response = await modules.Lab.create({
         ["s-subject"]: subject,
         ["s-course"]: course,
         ["s-grade"]: grade,
         ["s-class"]: classes,
         ["t-name"]: name,
         ["t-id"]: tid,
         ["l-id"]:id,
         ["l-time"]: time
     })
     return response
 }