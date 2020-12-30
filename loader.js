const fs = require('fs');

const globalConfig = require("./config");

const controllerSet = [];
const pathMap = new Map();//键值对
//fs.readdirSync方法将返回一个包含“指定目录下所有文件名称”的数组对象
const files = fs.readdirSync(globalConfig['web_path']);

for(let i = 0; i < files.length; i++) {
    const temp = require("./" + globalConfig['web_path'] + "/" + files[i]);
    if(temp.path) {
        for (var [key, value] of temp.path) {
            if(pathMap.get(key) == null) {
                pathMap.set(key, value);
            } else {
                throw new Error('url path异常，url:' + key);
            }
            
        }
        controllerSet.push(temp);
    }
    
}

module.exports = pathMap;