import Router from 'koa-router'

const router = new Router({
	prefix:'/city'
})

router.get('/list',async(ctx) =>{
	ctx.body = ['北京','天津']
})

export default router



// const router = require ('koa-router')()

// router.prefix('/city')

// router.get('/list',async(ctx) =>{
// 	ctx.body = ['北京','天津']
// })

// exports.router = router