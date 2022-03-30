class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null; 
        this.rear = null; 
        this.storage = [];
        this.size = 0;
    }

    // 데이터 추가
    enQueue = (data) => {
        let node = new Node(data)

        if (this.isEmpty()) {
            // 사이즈가 0 이라면 head 에 해당 노드를 참조
            this.head = node;
            // 스토어에 노드 추가
            this.storage[this.size] = node.data;
        } else {
            // 데이터가 있을경우 rear 의 포인터는 새 노드를 참조하게 한다.
            this.rear.next = node;
            // 스토어에 노드 추가
            this.storage[this.size] = node.data;
        }

        // rear 에 해당 노드를 참조
        // 데이터가 있을경우 rear에 새 노드를 참조하게 되므로 기존 rear는 연결이 해제된다.
        // 기존 rear 는 head로 남아있기 때문에 오래된 순서대로 나갈 수 있게 된다.
        this.rear = node
        // 사이즈 추가
        this.size++;
    }

    // 데이터 제거
    deQueue = () => {

    }

    // 데이터 비어있는지 여부
    isEmpty = () => {
        if (this.size <= 0) {
            return true;
        } else {
            return false;
        }
    }

    // queue 제일 위 데이터 조회
    peekFront = () => {

    }

    // queue 제일 뒤 데이터 조회
    peekBack = () => {

    }

    // 전체 리스트 조회
    getList = () => {
        let prev = this.head;

        while (prev) {
            console.log(prev.data);
            prev = prev.next;
        }

    }

    // 전체 사이즈 조회
    getSize = () => {
        return this.size;
    }

    // 배열 조회
    getStorage = () => {
        return this.storage;
    }
}


const queue = new Queue();