const express = require('express');
const body = require('body-parser');//中间件 处理post数据
const multer = require('multer');//中间件 处理上传文件
const cookieParser = require('cookie-parser');//中间件 处理cookie
const cookieSession = require('cookie-session');//中间件 必须是签名的session

//session存在服务器上  cookie存在浏览器中

let server = express();
server.listen(8000)

server.use(body.urlencoded({
	extended:false//是否开启扩展模式
}))
let obj = multer({dest:'./static/upload'})
server.use(obj.any())


server.use(cookieParser(
'miyao'//签名秘钥。
	));
server.use(cookieSession({
	keys:['ad','2','12'],//生成签名的key,防止用户篡改
	maxAge:20*60*1000,//20分钟有效期
}));

server.get('/a',(req,res,next)=>{//
	console.log(req.query)//解析get数据
	res.send('aa')//
	console.log(req.session)//获取浏览器的session
	console.log(req.cookies)//获取浏览器未签名的cookie
	console.log(req.signedCookies)//获取签名后的cookie
	res.cookie('amount',99.8,{//设置cookie
		maxAge:14*86400*1000,//cookie的有效期
		//cookie可以访问根路径，不能访问子路径
		domain:'baidu.com',//主域名
		path:'/'//根路径
		httpOnly:true,//只能由服务器操作
		secure:true,//只有https请求才能用这个cookie
		signed:true,//是不是需要签名的cookie
	})
	//res.write()//buffer,string
	next()//处理完成，调用下面的方法
})

server.get('/a',(req,res,next)=>{//
	res.send('bbb')//
	//res.write()//buffer,string

})
server.post('/reg',(req,res,next)=>{//
	console.log(req.body)//中间件处理post
	//res.write()//buffer,string
	res.end()
})
server.post('/file',(req,res,next)=>{//
	console.log(req.files)//中间件处理上传数据
	//res.write()//buffer,string
})
server.use('/d',(req,res,next)=>{//post get  都可以
	res.send('aa')//
	//res.write()//buffer,string

})
server.use(express.static('./static/'))//找文件,要先数据，后文件