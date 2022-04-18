class Heap {
    constructor() {
        // 인지부조화 방지를 위한 첫번째 인덱스 미사용
        this.heap = [null];
    }

    //  최소 힙 기준
    //  들어오는 노드값들은 index 1 ,  즉 부모노드 보다 항상 큰지 확인한다.
    //  값이 더 크다면 서로 위치를 바꿔준다. ( swap 구현 )

    swap(currentIdx, parentIdx){
        [this.heap[parentIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[parentIdx]];
    }

    push(node){
        this.heap.push(node);
        // 마지막으로 추가한 노드의 인덱스 값
        let currentIdx = this.heap.length-1;
        // 그 노드의 부모 인덱스 값
        let parentIdx = Math.floor(currentIdx / 2);

        while (currentIdx > 1 && this.heap[parentIdx] > this.heap[currentIdx]){
        //   2번째로 들어오는 노드는 인덱스는 항상 1보다 크다.
        //   부모 노드가 현재 노드보다 더 크다면 스왑을 해야한다.
            this.swap(currentIdx, parentIdx);
            // 스왑을 통해 바뀐 노드의 인덱스 조정 후 다시 조건에 부합하는지 반복
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx / 2);
        }
    }

    pop(){
        const size = this.heap.length;
        // 루트 노드
        const min =  this.heap[1];

        // 제거 과정
        if (size <= 2){
            // 힙의 노드가 1개거나 아무것도 없다면
            // 다시 null 로 채워 아무것도 없게끔함
            // 2랑 같거나 작게한 이유는 인지부조화 방지를 위한 null 을 배열 맨 첫자리에 넣었기 때문
            this.heap = [null];
        }else{
            // 최상단 루트를 제일 끝에있는 노드로 바꿈
            this.heap[1] = this.heap.pop();
        }

        // 인덱스 재조정
        let currentIdx = 1;
        let leftIdx = Math.floor(currentIdx * 2);
        let rightIdx = Math.floor((currentIdx * 2) + 1);

        /*
          1. 노드가 양쪽 둘다 없을떄
          2. 노드가 왼쪽만 있을때
          3. 노드가 양쪽 둘다 있을때
        */

        // 왼쪽부터 채워지는 트리구조에 따라 왼쪽이 없다면 양쪽둘다 없으므로 root 반환
        if (!this.heap[leftIdx]) return min;

        // 왼쪽만 존재한다면
        if (!this.heap[rightIdx]){
            // 왼쪽 노드값이 루트보다 작을때 스왑한다.
            if (this.heap[leftIdx] < this.heap[currentIdx]){
                this.swap(leftIdx, currentIdx);
            }
            return min;
        }
    }

}

const heap = new Heap();
heap.push(1);
