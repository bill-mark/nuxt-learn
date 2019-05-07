import router from 'koa-router'

const router = new router({
	prefix:'/city'
})

router.get('/list',async(ctx) =>{
	ctx.body = ['北京','天津']
})

export default router