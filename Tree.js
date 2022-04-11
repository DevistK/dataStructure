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
        let successor = null;

        let minValueFinder = (node)=>{
            while (node.left !== null){
                node = node.left;
            }
            return node;
        }

        if (tree.root === null){
            console.log('루트 노드가 존재하지 않습니다.')
            return false;
        }
        // 노드탐색
        let searchNode = (root, data)=>{
            if (data < root.data){
                // 찾는 노드가 더 작으면 왼쪽으로 탐색
                parent = root;
                return searchNode(root.left, data);
            }else if (data > root.data){
                // 찾는 노드가 더 크면 오른쪽으로 탐색
                parent = root;
                return searchNode(root.right, data);
            }else{
                // 단말노드 삭제
                if (root.left === null && root.right === null){
                    if (parent.left.data === root.data){
                        parent.left = null;
                    }else{
                        parent.right = null;
                    }
                }else if(root.left !== null && root.right !== null){
                    //    서브트리 2개 일때 삭제
                    successor = minValueFinder(root.right);
                    root.data = successor.data;
                }else{
                    //    서브트리 1개 일때 삭제
                    if (root.left !== null){
                        parent.left = root.left;
                    }else if(root.right !== null){
                        parent.right = root.right;
                    }
                }
            }
        }

        return searchNode(tree.root, data);

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

tree.remove(22);