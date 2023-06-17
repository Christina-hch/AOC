const input = require ('./input');
// 2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8

const part1 = input.map(pair=>{
    const [left,right] = pair.split(',');
    const items = [...left.split('-'),...right.split('-')];
    [lStart,lEnd,rStart,rEnd] = items.map(item=>parseInt(item));
    if(((lStart<=rStart)&&(lEnd>=rEnd))||((lStart>=rStart)&&(lEnd<=rEnd))){
        console.log('They are',pair);
        return true;
    }
}).filter(pair=>pair).length;

console.log('part1:',part1);

const part2 = input.map(pair=>{
    const [left,right] = pair.split(',');
    const items = [...left.split('-'),...right.split('-')];
    [ls,le,rs,re] = items.map(item=>parseInt(item));
    if(((ls>=rs)&&(ls<=re))||((le>=rs)&&(le<=re))||((rs>=ls)&&(rs<=le))||((re>=ls)&&(re<=le))){
        console.log('They are',pair);
        return true;
    }
}).filter(pair=>pair).length;

console.log('part2:',part2);