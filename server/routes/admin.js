var express = require('express');
var router = express.Router();
var ctrladmin = require("../ctrl/ctrladmin")
/* GET users listing. */
// 获取管理员所有信息   可用
router.get('/admin', async function (req, res, next) {
    let response = await ctrladmin.allinfo()
    res.json({
        response
    });
});



router.post('/admin/upteacher', async function (req, res, next) {
    let response = await ctrladmin.upteacher(req)   
    if (response.dataValues.id) {
        res.json("0")
      } else
        res.send("1");
});




router.post('/admin/upstudent', async function (req, res, next) {
    let response = await ctrladmin.upstudetn(req)
    if (response.dataValues.id) {
        res.json("0")
      } else
        res.send("1");
});

module.exports = router;