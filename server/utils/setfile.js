let fs = require('fs');
let path = require('path');
let mockpath = (url)=>path.resolve('mock',url);

module.exports = {
    getdata(url){
        return JSON.parse(fs.readFileSync(mockpath(url),'utf-8'))
    }
}