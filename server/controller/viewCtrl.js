const router = require("koa-router")();

const { CONTEXT } = require("..");
//测试接口的UI界面
router.get(`${CONTEXT}/`, async (ctx) => { await ctx.render("index") });
router.get(`${CONTEXT}/uploadFiles`, async (ctx) => { await ctx.render("uploadFiles") });




module.exports = router;