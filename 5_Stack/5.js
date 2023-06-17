const {stackLines,precedureLines} = require ('./input');
const {getProPara} = require ('./util');
const {Stack} = require ('./stack');
const numOfStack = stackLines.map(line=>(line.length+1)/4).sort((a,b)=>b-a)[0];
let stacks = [];

for (let i=0; i<numOfStack; i++){
    stacks[i] = new Stack();
}

const stackPatten = RegExp(/[A-Z]/);
//console.log('stacklines',stackLines);
for(let j = stackLines.length-2; j>=0; j--){
    let line = stackLines[j]; //
    for(let i=0; i<line.length; i++){
        if(line[i].match(stackPatten)){
            stacks[parseInt(i/4)].push(line[i]);
        }       
    }
}
console.log('init',stacks);
for (let step of precedureLines){
    const{move,from,to}=getProPara(step);
    for(let times=0;times<move;times++){
        stacks[to-1].push(stacks[from-1].pop());
        console.log(step);
        console.log(stacks);
    }
}

console.log('part1:',stacks.reduce((sum,v)=>sum+(v.peek()),[]));

//part2
for (let step of precedureLines){
    const{move,from,to}=getProPara(step);
   // for(let times=0;times<move;times++){
        stacks[to-1].pushMulti(stacks[from-1].popMuli(move));
        console.log(step);
        console.log(stacks);
   // }
}
console.log('part2:',stacks.reduce((sum,v)=>sum+(v.peek()),[]));
