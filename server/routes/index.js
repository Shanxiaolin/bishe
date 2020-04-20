var express = require('express');
var router = express.Router();
var ctrladmin = require("../ctrl/ctrladmin")
var ctrlstudent = require("../ctrl/ctrlstudent")
var ctrlteacher = require("../ctrl/ctrlteacher")

/* GET home page. */
router.get('/login', async (req, res, next)=>{
  let {
    type
  } = req.query
  if (type == 1) {
    let response = await ctrladmin.loginfo(req)
    if (response.length > 0) {
      res.send("0")
    } else res.end("1")
  } else if (type == 2) {
    let response = await ctrlteacher.loginfo(req)
    if (response.length > 0) {
      res.send("0")
    } else res.end("1")
  } else {
    let response = await ctrlstudent.loginfo(req)
    if (response.length > 0) {
      res.send("0")
    } else res.end("1")
  }
});

module.exports = router;