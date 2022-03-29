class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // head 추가하기
    addFirst = (input) => {
        // 앞쪽 head에 추가할때마다 갱신 시키기
        let temp;

        // 첫 노드라면
        if (this.head === null) {
            // 새 노드를 head로 갱신
            this.head = new Node(input);
            // tail도 동일 노드로 지정
            this.tail = this.head;
        } else {
            // 추가 노드를 만듬
            temp = new Node(input);
            // 추가 노드의 포인터를 현재 head로 지정
            temp.next = this.head;
            // head의 이전 포인터를 새 노드로 연결함
            this.head.prev = temp;
            // head를 새 노드로 갱신
            this.head = temp;
        }

        // 사이즈 추가
        this.size++;
    };

    // tail 추가하기
    addTail = (input) => {
        let temp;
        // 첫 노드라면
        if (this.head === null) {
            // 새 노드를 head로 갱신
            this.head = new Node(input);
            // tail도 동일 노드로 지정
            this.tail = this.head;
        } else {
            temp = new Node(input);
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = temp;
        }

        this.size++;
    };

    // 임의의 자리에 추가
    addPosition = (input, n) => {
        let prev = this.head;
        let aft;
        let node;
        for (let i = 0; i < n - 1; i++) {
            prev = prev.next;
        }
        aft = prev.next;
        node = new Node(input);

        node.next = aft;
        aft.prev = node;

        prev.next = node;
        node.prev = prev;

        this.size++;
    };

    // head 삭제
    removeHead = () => {
        let deleteNode = this.head;
        this.head = deleteNode.next;
        this.size--;

        if (this.head !== null) {
            this.head.prev = null;
        }
    };

    removeTail = () => {
        let deleteNode = this.tail;

        this.tail = deleteNode.prev;
        this.tail.next = null;
        this.size--;
    };

    removePosition = (n) => {};
}

const linkedList = new LinkedList();

linkedList.addFirst(50);
linkedList.addFirst(52);
linkedList.addFirst(12);
linkedList.addFirst(32);
linkedList.addFirst(562);
linkedList.addTail(100);
linkedList.addPosition(40, 2);
linkedList.removeHead();
linkedList.removeTail();
linkedList.removePosition();
