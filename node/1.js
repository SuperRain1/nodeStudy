const http = require('http')
const fs = require('fs')

let server = http.createServer((req,res)=>{
	console.log(req)//浏览器请求的地址
	fs.readFile(`www/${req.url}`,(err,buffer)=>{
		if(err){
			res.writeHeader(404)//给浏览器返回的状态码
			res.write('Not Found')//给用户返回的
		}else{
			res.write(buffer)
			res.end()
		}
	})
})

server.listen(8000);