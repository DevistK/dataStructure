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

        // 데이터가 하나도 없을때 top과 bottom의 노드값을 동일하게 함
        // 스토리지에 데이터만 추가
        if (this.isEmpty()) {
            this.top = new Node(data);
            this.bottom = new Node(data);
            this.storage[this.size] = this.top.data
        } else {
            // 새 노드로 스택을 쌓을때 이전 요소를 포인터로 연결
            cur = new Node(data);
            cur.next = this.top;
            // 최근 추가된 노드로 top을 변경
            this.top = cur;
            // 스토리지에 순서대로 데이터 추가
            this.storage[this.size] = this.top.data
        }

        console.log(this.top.data);
        // 사이즈 변경
        this.size++;
    }

    // 데이터 위에서부터 제거
    pop = () => {

        if (this.isEmpty()){
            // 스택이 비어있으면 bottom도 null 변경한다.
            this.bottom = null;
            return '제거할 노드가 없습니다.';
        }

        // 제거할 노드 임시 변수에 할당
        let popNode = this.top;
        // 제거할 노드 다음노드를 가장 위 노드로 지정과 동시에 연결해제
        let cur = popNode.next;
        this.top = cur;

        // size-1 을 해 popNode의 index와 맞춰 null로 값 할당
        this.storage[this.size-1] = null;

        // 스토리지에서 null 이 아닌 요소만 리턴해 재할당
        this.storage = this.storage.filter((item)=> item !== null);

        console.log(popNode.data);
        // 사이즈 변경
        this.size--;
    }

    // 데이터가 비어있는지 확인
    isEmpty = () => {
        if (this.size <= 0){
            return true;
        }else{
            return false;
        }
    }

    // 마지막에 넣은 데이터 확인
    peek = () => {        

        if (this.isEmpty()){
            return '검색할 데이터가 없습니다.';
        }

        console.log(this.top.data)
        return this.top;
    }
}

const stack = new Stack();