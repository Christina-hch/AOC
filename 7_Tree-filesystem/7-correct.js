const fs=require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname,'input.txt'),'utf8').split('\n');
const {Tree,TreeNode} = require('./tree');
const sizeAtMost = 100000;
// const printPath=(curNode)=>{
//     let t = curNode;
//     let curPath = [t.name]; 
//     while(!!t.parent){
//         t=t.parent;
//         curPath.unshift(t.name);
//     }
//     console.log('##curDir',curPath);
// }
function buildTree(){
    const tree = new Tree('/');
    let curDir = tree.root;
    for(let line of input){
       // console.log(line);
        if(line.startsWith('$ cd')){ //change dir
            //const[,dir]= /\$ cd (.+)$/.exec(line);
            const [,,dir]= line.split(' ');
            if(dir==='/'){
                curDir = tree.root;;
            }
            else if(dir==='..'){
                curDir = curDir.parent;
            }
            else{
                //curDir = curDir.children.find(child=>(child.name==dir)&&child.isDir);
                curDir = tree.findInDir(curDir,dir);
                if(!curDir){
                    console.error(`!!!cd ${dir} fail`);
                }
            }
        //    printPath(curDir);
        }
        else if(line.startsWith('$ ls')){
            continue;
        }
        else{
            if(line.startsWith('dir')){ //dir
                //const [,dir]=/dir (.+)$/.exec(line);
                const[,dir]=line.split(' ');
              //  if(curDir.children.find(v=>(v.name===dir)&&v.isDir)){
               // if(curDir.children.find(v=>(v.name===dir))){
                if(tree.findInDir(curDir,dir)){
                    console.log(`${line} dir already exist`);
                    continue;
                }
                //curDir.children.push(new TreeNode(dir,curDir,curDir.level+1,true));
                tree.insert(curDir,new TreeNode(dir,curDir,curDir.level+1,true));
            }
            else{ //file
               // [,size,file]=/(\d+) (.+)$/.exec(line);
               const [size,file]=line.split(' ');
                const newTreeNode = new TreeNode(file,curDir,curDir.level+1,false,size);
                //if(curDir.children.find(v=>(v.name===file)&&(!v.isDir))){
                   //if(curDir.children.find(v=>(v.name===file))){
                    if(tree.findInDir(curDir,file)){
                    console.log(`${line} file already exist`);
                    continue;
                }
                //curDir.children.push(newTreeNode);
                tree.insert(curDir,newTreeNode);
                let nodep = curDir;
                nodep.size+=(+size);
                while(!!nodep.parent){                  
                    nodep = nodep.parent;
                    nodep.size+=(+size);
                }
            }
        }
    }
    return tree;
}

const tree = buildTree();
// console.log(tree);
const allNodes = Array.from(tree.traversal(tree.root));
// console.log(allNodes);
const allDirs = allNodes.filter(node=>node.isDir);
const filteredDir = allDirs.filter(node=>node.size<=sizeAtMost);
// console.log(filteredDir);
console.log('part1',filteredDir.reduce((sum,v)=>sum+(+v.size),0));

//part2
const totalSize = tree.root.size;
console.log(`total size is ${totalSize}`);
console.log(`available size is ${70000000-totalSize}`);
console.log(`needReleaseSize  is ${30000000-(70000000-totalSize)}`);
const needRelease = 30000000-(70000000-totalSize);
const part2 = allDirs.map(d=>d.size)
            .filter(size=>size>=needRelease).sort((a,b)=>a-b)[0];
            console.log(`part2 ${part2}`);

