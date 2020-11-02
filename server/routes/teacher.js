var express = require('express');
var router = express.Router();
var modules = require("../models")
var ctrlteacher = require("../ctrl/ctrlteacher")
/* GET users listing. */
// 查询老师所有信息  可用
router.get('/teacher', async function(req, res, next) {
    let response =await modules.Teacher.findAll({attributes:{exclude:['id']}   
    })
    res.json({response});
});

// 查询除了密码和token的其他信息,有此教师返回教师信息，没有此教师返回1  可用
router.get('/teacher/name', async function(req, res, next) {
    let response = await ctrlteacher.publicinfo(req)
    if(response.length>0)
        res.json({response});
    else res.json("1")
  });
  
  
  
  
  // 更改老师密码，成功返回0，失败返回1  可用
  router.post('/teacher/pwd', async function(req, res, next) {
      let response = await ctrlteacher.updatepwd(req)
      if(response==1){
          res.send("0");
      }
      else
        res.send("1");
  });



  // 忘记密码更改密码成功返回0,程序故障1，token或者账号id错误返回2    可用
  router.post('/teacher/forgetpwd', async function (req, res, next) {
    let check = await ctrlteacher.token(req)
    if (check== 1) {
      let response = await ctrlteacher.updatepwd(req)
      if (response == 1) {
        res.send("0");
      } else
        res.send("1");
    }
    else res.send("2")
  });

  


  // 添加老师tooken  可用
  router.post('/teacher/token', async function(req, res, next) {
      let response = await ctrlteacher.updatetoken(req) 
      if(response.length==1){
          res.send("0");
      }
      else
        res.send("1");
  });


  
module.exports = router;