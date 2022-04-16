class Heap {
    constructor() {
        // 인지부조화 방지를 위한 첫번째 인덱스 미사용
        this.heap = [null];
    }

    //  최소 힙 기준
    //  들어오는 노드값들은 index 1 ,  즉 부모노드 보다 항상 큰지 확인한다.
    //  값이 더 크다면 서로 위치를 바꿔준다. ( swap 구현 )

    swap(currentIdx, parentIdx){

    }

    push(node){
        this.heap.push(node);
        // 마지막으로 추가한 노드의 인덱스 값
        let currentIdx = this.heap.length-1;
        // 그 노드의 부모 인덱스 값
        let parentIdx = Math.floor(currentIdx / 2);

        // while (currentIdx > 1 && this.heap[parentIdx] > this.heap[currentIdx]){
        //   2번째로 들어오는 노드는 인덱스는 항상 1보다 크다.
        //   부모 노드가 현재 노드보다 더 크다면 스왑을 해야한다.
        // }
        this.swap(currentIdx, parentIdx);
    }

}

const heap = new Heap();
