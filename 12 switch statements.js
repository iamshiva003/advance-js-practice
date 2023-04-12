// ways to replace switch statements 

const extention = '/';
let contentType;

switch (extention) {
    case '.css': contentType = 'text/css';
                 break;
    case '.js': contentType = 'text/javascript';
                break;
    case '.json': contentType = 'application/json';
                break;
    case '.jpg': contentType = 'image/jpeg';
                break;
    case '.png': contentType = 'image/png';
                break;
    case '.txt': contentType = 'text/plain';
                break;
    defualt: contentType = 'text/html';
}


const extentionObj = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.txt': 'text/plain'
}

console.log(extentionObj[extention] || 'text/html');


const myMap = new Map();
myMap.set('.css', 'text/css');
myMap.set('.jsn', 'application/json');


console.log(myMap.get(extention) || 'text/html');