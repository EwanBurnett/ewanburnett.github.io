var fs = require('fs');
if(!fs.existsSync('../portfolio')){
    fs.mkdirSync('../portfolio');
}