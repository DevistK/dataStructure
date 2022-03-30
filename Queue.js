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
        console.log(this.storage);
    }

    // 데이터 제거
    deQueue = () => {        
        let front;
        if (this.isEmpty()) {
            // 데이터가 더이상 없으면 rear 를 null로 갱신하고 ,  제거할 노드가 없다는 문자열 리턴
            this.rear = null;
            return '제거할 노드가 없습니다.';
        } else {
            // 스토리지에서 삭제될 head 노드 데이터 임시 저장
            front = this.head.data;
            // 기존 head의 다음 노드를 head 로 갱신시키고 기존 head는 어디에도 참조되지 않게함
            this.head = this.head.next;
        }
        
        // 스토리지에서 기존 head 값을 지우기 위해 indexOf 를 임시변수에 담았던 head 값으로 사용
        this.storage[this.storage.indexOf(front)] = null;        
        // null 이 없는 요소만 반환해 스토리지를 새로 할당
        this.storage = this.storage.filter((item) => item !== null);


        // 사이즈 감소
        this.size--;
        console.log(this.storage);
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
        return this.head;
    }

    // queue 제일 뒤 데이터 조회
    peekBack = () => {
        return this.rear;
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

queue.enQueue(10)
queue.enQueue(30)
queue.enQueue(50)
queue.deQueue()