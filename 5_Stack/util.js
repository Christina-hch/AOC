const getProPara = (str)=>{
    let arr = str.split(' ');
    const proObj = {};
    proObj.move = arr[1];
    proObj.from = arr[3];
    proObj.to = arr[5];
    return proObj;
}

module.exports = {getProPara};