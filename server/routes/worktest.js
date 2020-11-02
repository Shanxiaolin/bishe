var express = require('express');
var router = express.Router();
var modules = require("../models")
var ctrlworktest = require("../ctrl/ctrlworktest")
/* GET users listing. */
// 获取所有作业信息 可用
router.get('/worktest', async function (req, res, next) {
  let response = await ctrlworktest.allinfo()
  res.json({
    response
  });
});



// 学号获取指定人的信息 可用
router.get('/worktest/id', async function (req, res, next) {
  let response = await ctrlworktest.myinfo(req)
  if (response.length > 0) {
    res.json({response});
  } else
    res.send("0");
});



// 通过专业，课程，年级，班号检索信息  可用
router.post('/worktest/scgc', async function (req, res, next) {
  let response = await ctrlworktest.pointinfo(req)
  if (response.length > 0) {
    res.json({response});
  } else
    res.send("0");
});



// 上传作业
router.post('/worktest/work', async function (req, res, next) {
  let response = await ctrlworktest.work(req)
  if (response.length > 0) {
    res.json({response});
  } else
    res.send("0");
});



// 给分,回馈，可用。(更新) 
router.post('/worktest/mark', async function (req, res, next) {
  let response = await ctrlworktest.mark(req)
  if (response == 1) {
    res.send("0");
  } else
    res.send("1");
});

module.exports = router;