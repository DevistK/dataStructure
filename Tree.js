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
            searchNode(node); // 루트부터 탐색 후 삽입 해야하므로 node를 인자로 넣음
        }
    };

    // search : 검색값 과 비교하며 값 탐색
    search = (data) => {
        let node = this.root;

        let searchNode = (node) => {
            if (node === null) {
                return '검색 대상이 존재하지 않습니다.';
            } else {
                if (data < node.data) {
                } else if (data > node.data) {
                } else if (data === node.data) {
                }
            }
        };

        searchNode(node);
    };
    // remove : 입력 한 노드 값 제거
    remove = () => {};
}

const tree = new BST();

tree.add(60);
tree.add(41);
tree.add(81);
tree.add(20);
tree.add(22);
