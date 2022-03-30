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
    addFront = () => { }

    // 맨뒤에 노드 추가
    addRear = () => {

    }

    // 맨앞쪽 노드 제거
    removeFront = () => {

    }

    // 맨뒤쪽 노드 제거
    removeRear = () => {

    }

    // 맨 앞 노드 조회
    getFront = () => {

    }

    // 맨 뒤 노드 조회
    getRear = () => {

    }

    // 전체 사이즈 조회
    getSize = () => {

    }

    // 큐가 비어있는지 확인
    isEmpty = () => {

    }

    // 스토리지 조회
    getStorage = () => {

    }

    // 리스트 조회
    getList = () => {

    }

}