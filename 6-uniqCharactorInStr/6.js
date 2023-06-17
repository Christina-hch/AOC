const input = require ('./input');
//mjqjpqmgbljsphdztnvjfqwrcgsmlb

const isMarker = (str)=>{
    if (str.length!==4){
        console.error('length is not 4');
        return;
    }
    const arr = Array.from(str);
    const set = new Set(arr);
    if(Array.from(set).length===4)
    {
        console.log('is Marker');
        return true;
    }
    return false;
}

// for(let i=0; i<input.length-3; i++){
//     const str = input.slice(i,i+4);
//     if(isMarker(str)){
//         console.log('after',i+4);
//         break;
//     }
// }
//part2

const isMsg = (str)=>{
    if (str.length!==14){
        console.error('length is not 14');
        return;
    }
    const arr = Array.from(str);
    const set = new Set(arr);
    if(Array.from(set).length===14)
    {
        console.log('is Marker');
        return true;
    }
    return false;
}

for(let i=0; i<input.length-13; i++){
    const str = input.slice(i,i+14);
    if(isMsg(str)){
        console.log('Msg after',i+14);
        return;
    }
}