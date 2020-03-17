
//时间格式化

exports.dateFormat = (date, type = 4) => {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
    let y = date.getFullYear().toString();
    let m = (date.getMonth() + 1).toString().padStart(2, '0');
    let d = date.getDate().toString().padStart(2, '0');
    let h = date.getHours().toString().padStart(2, '0');
    let M = date.getMinutes().toString().padStart(2, '0');
    let s = date.getSeconds().toString().padStart(2, '0');
    if (type === 1) return y + m;
    if (type === 2) return y + m + d;
    if (type === 3) return y + m + d  + h  + M;
    if (type === 4) return y + m + d  + h + M + s;

}



