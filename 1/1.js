const fs = require ('fs');

let max=0;
let theEls=0;

const input = fs.readFileSync('./input.txt','utf-8').toString().trim().split('\n\n');
// input.forEach((item,idx)=>{
//     let oneEls = item.split('\n').reduce((sum,cur)=>sum+(+cur),0);
//     console.log(idx,oneEls,'\n');
//     if(oneEls>max){
//         max=oneEls;
//         theEls = idx;
//     }
// })
   //console.log(`max is ${max} from the ${theEls+1} els`);

   const ret = input
   .map((elf)=> {
    return elf
    .split('\n')
    .reduce((sum,cur) => sum+(+cur),0);
}).sort((x,y)=>y-x);
console.log(ret[0]);
console.log(ret.slice(0,3).reduce((sum,cur)=>sum+cur,0));
//  const sumsSorted = input
// 	.map((elf) => {
// 		return elf
// 			.split('\n')
// 			.map((item) => parseInt(item, 10))
// 			.reduce((sum, v) => sum + v, 0);
// 	})
// 	.sort((a, z) => z - a);

// console.log(sumsSorted[0]);
//  fs.readFile('./input.txt','utf-8',(err,data)=>
// {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data.split('\n\n'));
//     data.split('\n\n').forEach((item,idx)=>{
//         let oneEls = item.split('\n').reduce((sum,cur)=>sum+=(+cur),0);
//         console.log(idx,oneEls,'\n');
//         if(oneEls>max){
//             max=oneEls;
//             theEls = idx;
//         }
//     })
//     console.log(`max is ${max} from the ${theEls+1} els`)
// })
