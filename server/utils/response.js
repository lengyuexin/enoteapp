
//请求成功时的响应
exports.ok = (ctx, status = 200, message = '请求成功', data = '') => {
    ctx.status = status;
    return ctx.body = {
        message,
        data
    };
}

//请求失败时的响应
exports.error = (ctx, status = 500, message = '请求失败', data = '') => {
    ctx.status = status;
    return ctx.body = {
        message,
        data
    };
}