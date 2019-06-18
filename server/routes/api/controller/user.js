const jwt = require('jsonwebtoken');
const uid = require('node-uid');
let {
	getdata
} = require('../../../utils/setfile')
let checkCodetext = '';
const login = (req, res, next) => {
	let {
		phone,
		password,
		checkcode
	} = req.body;
	if (!phone || !password || !checkcode) {
		res.send({
			code: 1,
			message: "参数不正确"
		});
		return;
	}
	let users = getdata('user.json');
	let isuser = users.find(item => item.phone === phone && item.password === password);
	if (isuser) {
		if (checkcode === checkCodetext) {
			const sessionId = jwt.sign({
				...isuser,
				exp: (+new Date() ) + 1000,
			}, 'yihang888')
			res.send({
				sessionId,
				code: 0,
				message: "success"
			})
		} else {
			res.send({
				code: 1,
				message: '验证码输入有误请重新输入！'
			})
		}
	} else {
		res.send({
			code: 1,
			message: '用户名密码有误！'
		})
	}
}
const checkCode = (req, res) => {
	checkCodetext = uid(4);
	res.send({
		code: 0,
		Verification: checkCodetext
	})
}

const resetPassword = (req,res,next)=>{
	console.log(req.info);  //当前登陆的用户
	
}

module.exports = {
    login,
	checkCode,
	resetPassword
}