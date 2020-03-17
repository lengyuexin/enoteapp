
//判断xx路径是否存在,不存在则创建
const fs = require('fs');
const path = require('path');

exports.createPath = (...allPath) => {
    try {
        const [tempPath] = allPath
        let tempEditPath = path.resolve(__dirname, `${tempPath}/edit`)
        let tempCommitPath = path.resolve(__dirname, `${tempPath}/commit`)
        let tempHistoryPath = path.resolve(__dirname, `${tempPath}/history`)
        let tempBetaStayPath = path.resolve(__dirname, `${tempPath}/betaStay`)
        let tempBetaSuccessPath = path.resolve(__dirname, `${tempPath}/betaSuccess`)
        let imgTemplatePath = path.resolve(__dirname, `../../public/img/templateImg`)
        const arr = [...allPath, tempEditPath,
             tempCommitPath, tempHistoryPath,
             tempBetaStayPath,
             tempBetaSuccessPath,
             imgTemplatePath]

        arr.forEach(dirname => {
            mkdirsSync(dirname)
        });
    } catch (err) {
        console.log("路径校验异常->" + err.message)
    }

}



//递归创建文件夹
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname))  return true;
    if (mkdirsSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname);
        return true;
    }
}