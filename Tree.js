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
        let parent = null;
        let children = null;
        let successor = null;

        let minValueFinder = (node)=>{
            let find = node;
            while (find.left !== null){
                find = node.left;
            }
            return find;
        }

        /*
         searchNode 는 인자가 두개가  필요
         arg1 = root , arg2 = 삭제하고자하는 input 값
         */
        let searchNode = (root, data) => {
        };

        return searchNode(this.root, data);
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