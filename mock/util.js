const fs = require('fs');
const path = require('path')
module.exports = {
    getJsonFile(filePath){
        let json = fs.readFileSync(path.resolve(__dirname,filePath),'utf-8');
        console.log(json);
        return JSON.parse(json)
    }
}