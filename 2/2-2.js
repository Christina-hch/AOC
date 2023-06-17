const input = require('./input');
const shapes = {
    'A':1,   //rock  A
    'B':2,   //paper  B
    'C':3   //scissors  C
}

const res = (left,right)=>{
    if (right ==='X') {
        return (shapes[left]-1)||3; 
    }
    if (right === 'Y') {
        return shapes[left] + 3;
    }
    else {
     return (((shapes[left]+1)%3)||3) + 6;  
    }
}
 const score = input.reduce((sum,v)=>{
    const left = v.split(' ')[0];
    const right = v.split(' ')[1];
    const round=res(left,right);
    return (sum+round);
 },0);

 console.log(score)
