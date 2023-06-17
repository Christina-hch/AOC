//     [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2
const fs = require('fs');
const path = require('path');
let [stackLines,precedureLines] = fs.readFileSync(path.join(__dirname,'input.txt'),'utf8')
.toString()
.split('\n\n');
const stackPatten = RegExp(/[A-Z]/g);
stackLines = stackLines.split('\n');
 //   .map(line=>line.match(stackPatten));  //array
precedureLines = precedureLines.split('\n'); //array


// exports.getProPara = getProPara;
// exports.stack = stack;
// exports.precedureDes = precedureDes;

module.exports = {stackLines,precedureLines};