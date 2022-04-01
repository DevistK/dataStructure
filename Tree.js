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

    add = (data) => {
        // 루트 초기화
        let node = this.root;
        // 루트가 없다면 루트 노드 추가
        if (node === null) {
            this.root = new Node(data);
        } else {
            // 루트 초기화 이후 노드 추가를 위한 재귀
            let searchNode = (data) => {
                if (data < node.data) {
                    // 새로 추가되는 노드가 더 작으면 왼쪽으로 가지가 뻗어나감
                } else if (data > node.data) {
                    // 새로 추가되는 노드가 더 크면 오른쪽으로 가지가 뻗어나감
                }
            };
        }
    };
}

const tree = new BST();
