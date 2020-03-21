
const { getFileName } = require('../utils/filename');
const { ok, error } = require('../utils/response');

const path = require('path');
const fs = require('fs');

//上传图片公共代码块
const _commonCode = (file) => {


    // 创建可读流
    const reader = fs.createReadStream(file.path);


    let target = path.resolve(__dirname, `../public/img/${file.name}`);


    const upStream = fs.createWriteStream(target);

    // 可读流通过管道写入可写流
    reader.pipe(upStream);

}



//图片上传
exports.upload = (ctx) => {
    // 上传多个文件
    const files = ctx.request.files.file; // 获取上传文件信息

    const allowExtname = ['.png', '.jpg', '.jpeg', '.webp', '.bmp', '.gif'];//支持的图片格式
    let filterPic = false;//是否存在不支持的图片格式标识
    const rejectExtname = []//不支持的图片格式数组

    if (files.length > 1) {
        for (let file of files) {

            const extname = path.extname(file.name);// 获取上传文件拓展名
            if (allowExtname.includes(extname)) {
                _commonCode(file, ctx);//图片格式符合，进行上传
            } else {
                filterPic = true;//图片格式不符合条件，更改标识
                rejectExtname.push(extname)//填充不支持的图片格式数组
            }


        }
    } else {
        const file = ctx.request.files.file;
        const extname = path.extname(file.name);// 获取上传文件拓展名
        if (allowExtname.includes(extname)) {
            _commonCode(file, ctx);//图片格式符合，进行上传
        } else {
            filterPic = true;//图片格式不符合条件，更改标识
            rejectExtname.push(extname) //填充不支持的图片格式数组
        }

    }
    if (filterPic) {
        ok(ctx, 405, message = `存在不支持的图片格式${Array.from(new Set(rejectExtname))},已过滤`);
    } else {
        ok(ctx, 200, "上传成功", "");
    }

}
