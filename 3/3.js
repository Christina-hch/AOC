const input = require('./input');
const charCodeA = 65;
const charCodea = 97;
const priA = 27;
const pria = 1;

const getPri = letter=>{
    //console.log('letter',letter);
    let code = letter.charCodeAt();
    //console.log('code',code);
    if (!letter) return 0;
    const ret =  code<charCodea? (code-charCodeA+priA) : (code-charCodea+pria);
    //console.log('ret',ret);
    return ret;
}

const findCommonPri = str =>{
    const halfIdx = parseInt(str.length/2);
    const first = str.slice(0, halfIdx);
    const second = str.slice(halfIdx);
    // console.log('f',first);
    // console.log('s',second);
    const common = Array.from(first).filter(letter=>second.includes(letter))[0]||'';
    //console.log('com',common);
    const pri = getPri(common);
    //console.log('pri',pri);
    return pri;
}
//console.log('input',input);
console.log('part1',input.reduce (((sum,v)=>sum+findCommonPri(v)),0));

const org = input.reduce((ret,elf,idx)=>{
    if(!(idx%3)){
        ret.push([elf])
    }
    else{
        ret[ret.length-1].push(elf);
    }
  return ret;
}, [])
//console.log('org',org);
const pris = org.map(group=>{
    const badge = Array.from(group[0])
    .filter(letter => group[1].includes(letter))
    .filter(letter => group[2].includes(letter))[0]||'';
    console.log('badge',badge);
    const pri = getPri(badge);
    console.log('pri',pri);
    return pri;
})
//console.log(pris.reduce((sum,v)=>sum+v,0));
