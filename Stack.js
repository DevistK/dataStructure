class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null; // 스택의 last
        this.bottom = null; // 스택의 first
        this.size = 0; // 전체 사이즈
        this.storage = []; // 데이터를 배열 형태로 조회하고자할때 , 사용할지안할지는 나중에
    }

    // 데이터 쌓기
    push = (data) => {
        let cur;

        if (this.size === 0) {
            this.top = new Node(data);
            this.bottom = new Node(data);
            this.storage[this.size] = this.top.data
        } else {
            cur = new Node(data);
            cur.next = this.top;
            this.top = cur;
            this.storage[this.size] = this.top.data
        }

        this.size++;
    }

    // 데이터 위에서부터 제거
    pop = () => {
        let popNode = this.top;
        let cur = popNode.next;
        this.top = cur;

        this.storage[this.size-1] = null;

        this.storage = this.storage.filter((item)=> item !== null);

        this.size--;
    }

    // 데이터가 비어있는지 확인
    isEmpty = () => {

    }

    // 마지막에 넣은 데이터 확인
    peek = () => {

    }
}

const stack = new Stack();