var express = require('express');
var router = express.Router();
var ctrlstudent = require("../ctrl/ctrlstudent")
/* GET users listing. */
// 查询学生所有信息    可用
router.get('/student', async function (req, res, next) {
  let response = await ctrlstudent.allinfo()
  res.json({
    response
  });
});



// 查询除了密码和token的其他信息       可用
router.get('/student/name', async function (req, res, next) {
  let response = await ctrlstudent.publicinfo(req)
  res.json({
    response
  });
});




// 更改学生密码    可用
router.post('/student/pwd', async function (req, res, next) {
  let response = await ctrlstudent.updatepwd(req)
  if (response == 1) {
    res.send("0");
  } else
    res.send("1");
});




// 忘记密码更改密码,成功返回0，失败返回2，程序故障返回1  可用
router.post('/student/forgetpwd', async function (req, res, next) {
  let check = await ctrlstudent.token(req)
  if (check == 1) {
    let response = await ctrlstudent.updatepwd(req)
    if (response == 1) {
      res.send("0");
    } else
      res.send("1");
  }
  else res.send("2")
});


// 添加学生tooken  可用
router.post('/student/token', async function (req, res, next) {
  let response = await ctrlstudent.updatetoken(req)
  if (response == 1) {
    res.send("0");
  } else
    res.send("1");
});



module.exports = router;