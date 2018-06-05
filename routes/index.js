var express = require('express');
var md5 = require('md5');
var moment = require('moment');
var router = express.Router();

router.get('/openDoor/:phone/:projectCode/:token/:type/:userName', function(req, res) {
		var currentdate = moment().utc().utcOffset(+8).format("YYYY-MM-DD-HH");
		var hash = md5(currentdate+"adminXH")
		console.log("日期"+currentdate)
		console.log("node_token"+"----"+hash)
		console.log("app_token"+"----"+req.params.token)

		if(hash === req.params.token){
				var phone = req.params.phone
		    var projectCode = req.params.projectCode
		    var userName = req.params.userName
		    var type = req.params.type
		    res.render('index', {
		        phone: phone,
		        projectCode: projectCode,
		        userName:userName,
		        type:type
		    })
		}else{
			 res.render('error', {

		    })
		}
});

module.exports = router;
