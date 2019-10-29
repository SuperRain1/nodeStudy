const Koa = require('koa')
const Router = require('koa-router')//koa不带路由，需要另外下，为了嵌套路由
const static = require('koa-static')//找文件
const body = require('koa-better-body')//post和文件上传
const session = require('koa-session')



// cookie是koa自带的

let server = new Koa();

let router = new Router();

router.all('*',async ctx=>{//全局处理router的错误
	try{
		await next()
	}catch(e){
		ctx.body='路由有错误'
	}
})


server.listen('8000')

// ------------------koa操作数据库
server.use(async (ctx,next)=>{//全局解决错误
	try{
		await next()
	}catch(e){
		ctx.body='有错误'
	}

})

server.context.db = require('./libs/database.js');//设置全局变量
server.use(async ctx=>{
	try{
		let data = await ctx.db.query('SELECT * FROM item_table')
		ctx.body = data
	}catch(e){
		ctx.throw(500,'database error')
	}
	
})

// ------------------koa操作数据库


// server.context.name = 'shijunyu'//适合全局的变量

// router.use('/user',require('./routers/user'))


// //   http://www.sohu.com/news/13131342  路由传值
// router.get('/news/:id/',async ctx=>{
// 	let {id} = ctx.params
// 	ctx.body = '新闻' + id + ctx.name
// })

// // 1、urlencoded  http://www.baidu.com/a?id=1&b=5    2、params      http://www.baidu.com/a/1/5

// // 1、 参数顺序随意；参数可以省略；不利于优化              2、 顺序不可以更改；参数不能省略；静态页利于SEO优化

// router.get('/news/',async ctx=>{
// 	let {id} = ctx.query
// 	ctx.body = '新闻' + id + ctx.name
// })





//同express的use
// router.all('/a',async ctx=>{
// 	ctx.body = 'aaaaaa'
// })

// server.use(router.routes())

// let staticRouter = new Router();
// staticRouter.all(/(\.jpg|\.png|\.gif)$/i,static('./static',{
// 	maxage:60*86400*1000,//图片在客户端缓存的时间 60天
// }))
// staticRouter.all(/(\.html|\.htm|\.shtml)$/i,static('./static',{
// 	maxage:20*86400*1000,//图片在客户端缓存的时间 20天
// }))
// staticRouter.all('',static('./static',{
// 	maxage:20*86400*1000,//其他在客户端缓存的时间 20天
// }))
// server.use(static('./static',{
// 	maxage:86400*1000,//页面再客户端缓存的时间
// 	//index:'1.html'//访问根目录的时候，访问的默认文件
// }))

// server.use(staticRouter.routes())

// ctx.body
// ctx.request
// ctx.response
// 信息：
// ctx.method   请求方法
// ctx.url      请求地址
// ctx.path     请求域名
// ctx.query    get数据
// ctx.ip       客户端ip
// ctx.headers  请求头
// 方法：
// ctx.throw(400,'错误信息')   报错并退出
// ctx.assert(条件,code,msg)   断言测试
//    例：ctx.assert(ctx.query.user,400,'username is required')

// ctx.state   状态码
// ctx.redirect()  重定向
//    例：ctx.redirect('/news')
// ctx.attachment() 下载文件

// ---------better-body---------
// server.use(body({
// 	uploadDir:'./static/upload'
// }))
// server.use(async ctx=>{
// 	//文件和post
// 	console.log(ctx.request.fields)
// 	ctx.body='上传完成'
// })
// ---------better-body---------





// ----------------cookies
// server.keys=[
// 	'12113r11r1r',
// 	'12113r11r1r',
// 	'12113r11r1r',
// ];
// server.use(async ctx=>{
// 	ctx.cookies.set('user','junyu',{
// 		// domain:'',
// 		// path:'',
// 		// httponly:'',
// 		// maxAge:'', //有效期
// 		signed:true,//签名,
// 	})
// 	let user = ctx.cookies.get('user',{
// 		signed:true//如果设置的时候是有签名的，则取的时候也必须加，比较安全
// 	})
// 	ctx.body='cookies='+user
// })

// ----------------cookies


// ---------------session 本身是强制签名的
// server.keys=[
// 	'111131',
// 	'2121211'
// ]
// server.use(session({
// 	maxAge:'20*60*1000',//有效期20分钟
// 	renew:true,//有效期自动续期

// },server))
// server.use(async ctx=>{
// 	// ctx.session
// 	if(!ctx.session['view']){
// 		ctx.session['view']=0
// 	}
// 	ctx.session['view']++
// 	ctx.body=`欢迎您第${ctx.session.view}次来访`
// })
// ---------------session





