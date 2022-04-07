class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // add : 트리에 노드 추가
    add = (data) => {
        let node = this.root;

        if (node === null) {
            this.root = new Node(data);
        } else if (node !== null) {
            let searchNode = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                    } else if (node.left !== null) {
                        return searchNode(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else if (node.right !== null) {
                        return searchNode(node.right);
                    }
                }
            };
            searchNode(node); // 루트부터 탐색 후 삽입 해야하므로 node 를 인자로 넣음
        }
    };

    // search : 검색값 과 비교하며 값 탐색
    search = (data) => {
        let node = this.root;

        let searchNode = (node) => {
            if (node === null) {
                return false ;
            } else {
                if (data < node.data) {
                // 찾는 데이터가 node 보다 작다면
                    return searchNode(node.left);
                } else if (data > node.data) {
                // 찾는 데이터가 node 보다 크다면
                    return searchNode(node.right);
                } else if (data === node.data) {
                // 데이터를 찾았다면
                    return node;
                }
            }
        };

        return searchNode(node);
    };
    // remove : 입력 한 노드 값 제거


    remove = (data) => {
        let node = this.root;
        let parent = null;
        let children = null;
        let successor = null;
        let root = null;

        let minValueFinder = (node)=>{
            let find = node;
            while (find.left !== null){
                find = node.left;
            }
            return find;
        }

        let searchNode = (node) => {
            if (node === null) {
                return false ;
            } else {
                if (data < node.data) {
                    // 찾는 데이터가 node 보다 작다면
                    parent = node;
                    return searchNode(node.left);
                } else if (data > node.data) {
                    // 찾는 데이터가 node 보다 크다면
                    parent = node;
                    return searchNode(node.right);
                } else if (data === node.data) {
                    // 1. 단말 노드 제거시
                    if (node.left === null && node.right === null){
                        if (data === parent.right.data){
                            parent.right = null;
                            return true;
                        }else if (data === parent.left.data){
                            parent.left = null;
                            return true;
                        }

                    }else if (node.left !== null && node.right !==null){
                        // 2. 삭제노드의 서브트리가 2개일때 제거
                        // solutions
                        // 1. 오른쪽 서브트리에서 가장 작은 자손을 제거할 노드 자리로 올린다.
                        /*
                          삭제할 노드를 찾는다.
                          삭제할 노드의 successor (오른쪽 서브트리 기준 제일 작은 값) 를 찾는다.
                          삭제할 노드와 successor 의 노드값을 바꾼다.
                          successor 노드를 삭제한다.
                        */

                       // 제거할 노드
                       root = node;
                        // 오른쪽 서브트리에서 제일 작은 노드를 찾는다.
                       successor =  minValueFinder(node.right);
                       // 제거할 노드 위치 노드 값을 제일 작은 노드 값 으로 변경
                       node.data = successor.data;


                    } else{
                        // 3. 삭제노드의 서브트리가 1개일때 제거
                        if (parent.left !== null){
                            children = parent.left;

                            if (children.left !== null){
                                parent.left = children.left;
                                return true;
                            }else if (children.right !== null){
                                parent.left = children.right;
                                return true;
                            }

                        }else if (parent.right !== null){
                            children = parent.right;

                            if (children.left !== null){
                                parent.right = children.left;
                                return true;
                            }else if (children.right !== null){
                                parent.right = children.right;
                                return true;
                            }
                        }
                    }
                }
            }
        };

        return searchNode(node);
    };
}

const tree = new BST();

tree.add(60);
tree.add(41);
tree.add(81);
tree.add(20);
tree.add(22);
tree.add(100);
tree.add(95);
tree.add(103);