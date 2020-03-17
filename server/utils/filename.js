
//获取自定义格式的文件名
exports.getFileName = (filepath, type = 1) => {
    const path = require('path');
    let result = '';
    if (type === 1) {
        result = path.basename(filepath);
    } else if (type === 2) {
        result = path.extname(filepath);
    } else {

        let basename = path.basename(filepath);
        let extname = path.extname(filepath);
        result = basename.substring(0, basename.indexOf(extname));
    }
    return result;
}



// console.log(getFileName("date.js", 1))//date.js
// console.log(getFileName("date.js", 2))//.js
// console.log(getFileName("date.js", 3))//date