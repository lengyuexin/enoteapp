const router = require("koa-router")();

//测试接口的UI界面
router.get(`/`, async (ctx) => { await ctx.render("index") });
router.get(`/uploadFiles`, async (ctx) => { await ctx.render("uploadFiles") });




module.exports = router;