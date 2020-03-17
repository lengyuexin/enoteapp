import CryptoJS from 'crypto-js/crypto-js';


// key,iv长度为16位,可相同 自定义即可
export const Encrypt = word => {
    const keyStr = "EnglishNote&&Web";
    const ivStr = keyStr;
    const key = CryptoJS.enc.Utf8.parse(keyStr);
    const iv = CryptoJS.enc.Utf8.parse(ivStr);
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}


