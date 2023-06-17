const input = require('./input');
console.log(input);

const weight = { 
    'X':1,   //rock  A
    'Y':2,   //paper  B
    'Z':3    //scissors  C
}
const outCome = {
    'A X': 3,
    'A Y': 6,
    'A Z': 0,
    'B Y': 3,
    'B Z': 6,
    'B X': 0,
    'C Z': 3,
    'C X': 6,
    'C Y': 0,
}
const score_part1 = input.reduce((sum,v)=>  sum + weight[v.split(' ')[1]] + outCome[v], 0)

console.log('part1',score_part1);