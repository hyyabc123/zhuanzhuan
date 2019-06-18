var express = require('express');
var router = express.Router();
let checkuser = require('./middleware/checkuser')
let user = require('./controller/user')
let list = require('./controller/list')

//login
router.post('/login', user.login);
router.get('/checkCode',user.checkCode);
//修改密码
router.post('/resetPassword',checkuser,user.resetPassword)
//列表
router.get('/list',checkuser,list.getlist)
//详情
router.get('/detail',checkuser,(req,res,next)=>{

})
module.exports = router;