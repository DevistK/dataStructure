class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.rear = null;
        this.size = 0;
        this.storage = [];
    }

    // 맨앞에 노드 추가
    addFront = (data) => {
        let addNode;

        if (this.isEmpty()) {
            // 덱이 비어있다면 head 를 새노드로 rear 를 head로 동일하게 연결
            this.head = new Node(data);
            this.rear = this.head;
        } else {
            addNode = new Node(data);
            // 덱이 비어있지 않다면 새노드를 추가 후 포인터를 head로 한다.
            addNode.next = this.head;
            // 기존 head 요소의 이전 포인터를 새 노드로 지정한다.
            this.head.prev = addNode;
            // head 는 새 노드로 바꿔준다.
            this.head = addNode;
        }

        // 사이즈 갱신
        this.storage[this.size] = new Node(data).data;
        this.size++;

        console.log(new Node(data).data);
    }

    // 맨뒤에 노드 추가
    addRear = (data) => {
        let addNode;

        if (this.isEmpty()) {
            // 덱이 비어있다면 head 를 새노드로 rear 를 head로 동일하게 연결
            this.head = new Node(data);
            this.rear = this.head;
        } else {
            addNode = new Node(data);
            addNode.prev = this.rear;

            this.rear.next = addNode;
            this.rear = addNode;
        }

        // unshift 가 가장 오래된 노드 앞쪽에 추가하는 위 로직이랑 같음
        this.storage.unshift(new Node(data).data);
        this.size++;

        console.log(new Node(data).data);
    }

    // 맨앞쪽 노드 제거
    removeFront = () => {
        let removeNode;

        if (this.isEmpty()) {
            return '제거할 노드가 존재하지 않습니다.';
        } else {
            removeNode = this.head;
            this.head = removeNode.next;
            this.head.prev = null;
        }

        // pop 이 맨 앞쪽 노드를 제거하는 위 로직이랑 같음
        this.storage.pop();
        this.size--;

        console.log(removeNode.data);
    }

    // 맨뒤쪽 노드 제거
    removeRear = () => {
        let removeNode;

        if (this.isEmpty()) {
            return '제거할 노드가 존재하지 않습니다.';
        } else {
            removeNode = this.rear;
            this.rear = removeNode.prev;
            this.rear.next = null;
        }

        // shift 가 맨 뒤쪽 노드를 제거하는 위 로직이랑 같음
        this.storage.shift();
        this.size--;

        console.log(removeNode.data);
    }

    // 맨 앞 노드 조회
    getFront = () => {
        return this.head;
    }

    // 맨 뒤 노드 조회
    getRear = () => {
        return this.rear;
    }

    // 전체 사이즈 조회
    getSize = () => {
        return this.size;
    }

    // 큐가 비어있는지 확인
    isEmpty = () => {
        if (this.size <= 0) {
            return true
        } else {
            return false
        }
    }

    // 스토리지 조회
    getStorage = () => {
        return this.storage
    }

    // 리스트 조회
    getList = () => {
        let prev;

        if (this.isEmpty()) {
            return '조회할 데이터가 없습니다.'
        }

        prev = this.head;
        while (prev) {
            console.log(prev.data);
            prev = prev.next;
        }
    }

}

const deque = new Deque();

deque.addFront(4)
deque.addFront(81)
deque.addFront(10)
deque.addRear(50)

deque.removeFront();
deque.removeRear();