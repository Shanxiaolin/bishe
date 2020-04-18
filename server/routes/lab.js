var express = require('express');
var router = express.Router();
var ctrllab = require("../ctrl/ctrllab")
/* GET users listing. */



// 获取所有实验室信息 可用
router.get('/lab', async function (req, res, next) {
  let response = await ctrllab.allinfo()
  if (response.length > 0) {
    res.json({
      response
    })
  } else
    res.send("1");
});



// 获取指定实验室信息  可用
router.get('/lab/id', async function (req, res, next) {
  let response = await ctrllab.appointinfo(req)
  if (response.length > 0) {
    res.json({
      response
    });
  } else
    res.send("1");
});



// 通过专业，年级，班级检索实验室信息  可用
router.post('/lab/scgc', async function (req, res, next) {
  let response = await ctrllab.scgc(req)
  if (response.length > 0) {
    res.json({
      response
    });
  } else
    res.send("1");
});



// 通过时间，老师名字，教工号，学生专业，课程，年级，班级预约实验室;0代表预约成功，1代表预约失败，2代表已有存储信息
router.post('/lab/reservation', async function (req, res, next) {
  let check = await ctrllab.check(req)
  if (check.length == 0) {
    try {
      await ctrllab.store(req)
      return res.send("0")
    } catch (err) {
      throw res.send("1")
    }
  } else res.send("2")
});



module.exports = router;