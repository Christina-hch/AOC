
class TreeNode{
    constructor(name,parent=null,level = 0, isDir=true,size=0){
        this.name = name;
        //this.key = key;
        this.size = size;
        this.parent = parent;
        this.children = [];
        this.isDir=isDir;
        this.level=level;
    }
    hasChildren(){
        return this.children.length!=0;
    }
    isLeaf(){
        return this.children.length==0;
    }
}

class Tree{
    constructor(name){
        this.root = new TreeNode(name);
    }
    *traversal(node = this.root){
        yield node;
        if(node.hasChildren){
            for (let child of node.children){
                yield* this.traversal(child);
            }
        }
    }

    insert(parent, treeNode){
  //      for(let node of this.traversal(this.root)){
   //         if(node.name === parent.name){
        let len = parent.children.length;
        parent.children.push(treeNode);
        let lenNew = parent.children.length;
        if(lenNew-len==1){
            return treeNode;
        }
        else{
            console.error(`!!!insert fail, treeNode is ${treeNode.name} parent is ${parent.name}`);
        }
   //         }
  //      }
    }

    // insertToCurDir(parent,treeNode){
    //     parent.children.push(treeNode);
    // }
    // remove(treeNode){
    //     const parent = treeNode.parent;
    //     if(parent==null) {
    //         console.error('remove error, null');
    //         return;
    //     }
       
    //     parent.children = parent.children.filter(node=>node.name!=treeNode.name);
        
    // }
    // find(name){
    //     for(let node of this.traversal(this.root)){
    //         if(node.name===name){
    //             return node;
    //         }
    //     }
    //     return null;
    // }
    findInDir(parent,name){
        if(!parent){
            console.error(`11findInDir for ${name} fail! parent is ${parent}`);
            return null;
        }
        return parent.children.find(n=>n.name===name);   
    }
}

module.exports={Tree, TreeNode};