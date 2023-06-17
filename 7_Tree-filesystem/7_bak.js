const fs=require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname,'input.txt'),'utf8').split('\n');
const {Tree,TreeNode} = require('./tree');
const sizeAtMost = 100000;
const printPath=(curNode)=>{
    let t = curNode;
    let curPath = [t.name]; 
    while(!!t.parent&&!!t.level){
        t=t.parent;
        curPath.unshift(t.name);
    }
    console.log('##curDir',curPath);
}
function buildTree(){
    const tree = new Tree('/');
    let curNode = null;
    for(let line of input){
        
        if(line.startsWith('$')){
            let cmd = line.slice(1).trim();
            if(cmd==='ls'){
                continue;
            }
            else if(cmd.startsWith('cd')){
                console.log(line);
                if(cmd==='cd /'){
                    curNode = tree.root;
                }
                else if(cmd==='cd ..'){
                    if(!!curNode.parent){
                        curNode = curNode.parent;
                    }
                    else{
                        console.error('34,parent is null');
                        console.log('curLevel',curNode.level);
                        console.log('curDir',curNode.name);
                        continue;
                    }
                }
                else{   //cd oneDir
                    
                    let [c,name] = cmd.split(' ');
                    let newDir = tree.findInDir(curNode,name);
                    if(!!newDir){
                    //    console.log(`${newDir.name} exist`);
                        curNode = newDir;
                    }
                    else{
                        console.warn(`!!!${name} null`);
                        // let treeNode = new TreeNode(name,curNode, curNode.level+1, true);
                        // tree.insert(curNode,treeNode);
                        // curNode = treeNode;
                    }
                }               
                printPath(curNode);
            }
        }
        else if(line.startsWith('dir')){
            const [dir,name] = line.split(' ');
            if(!tree.findInDir(curNode,name)){
                let treeNode = new TreeNode(name,curNode,curNode+1,true);
                tree.insert(curNode,treeNode);
             //   console.log(tree);
            }
        }
        else{ //file
            const [size, name] = line.split(' ');
            if(!tree.findInDir(curNode, name)){
                let treeNode = new TreeNode(name,curNode,curNode.level+1,false,size);
                tree.insert(curNode,treeNode);
                //   console.log(tree);
                let n = treeNode.parent;
                while(n!=null){
                    n.size+=parseInt(size, 10);
                    //n.size+=(+size);
                    n = n.parent;

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
const filteredDir = allNodes.filter(node=>node.isDir).filter(node=>node.size<=sizeAtMost);
// console.log(filteredDir);
console.log('part1',filteredDir.reduce((sum,v)=>sum+(+v.size),0));
