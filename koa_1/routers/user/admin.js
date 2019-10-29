const Router = require('koa-router')

let router = new Router()

router.get('/a',async ctx=>{
	ctx.body='管理员的A'
})

module.exports = router.routes();