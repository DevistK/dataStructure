class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.storage = [];
        this.size = 0;
    }
}

