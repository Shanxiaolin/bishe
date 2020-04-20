var express = require('express');
var router = express.Router(); 
var ctrladmin = require("../ctrl/ctrladmin")
/* GET users listing. */
// 获取管理员所有信息   可用
router.get('/admin', async function(req, res, next) {
    let response = await ctrladmin.allinfo()
    res.json({response});
});



module.exports = router;