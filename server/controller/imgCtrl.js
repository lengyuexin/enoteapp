const router = require('koa-router')();

const { upload } = require('../service/upload');


const { error } = require('../utils/response');



//图片上传
router.post(`${CONTEXT}/api/uploadFiles`, async (ctx) => {

    try {
        upload(ctx);

    } catch (err) {

        error(ctx, 500, "图片上传失败:" + err.message)
    }
});



module.exports = router;