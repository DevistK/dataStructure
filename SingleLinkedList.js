// 연결리스트 구현

/*
1. head 추가
2. n번째 자리에 추가/삭제
3. tail 추가/삭제
*/

// Node  :
// data (value) ,  next (연결점) 으로 이루어짐
// head , tail node 구성중 tail은 리스트의 끝이므로 next를 null로 초기화

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// 연결리스트 API

class LinkedList {
    constructor() {
        this.head = null; // head 데이터가 없다면 null로 초기화
        this.tail = null; // tail 데이터가 없다면 null로 초기화
        this.size = 0; // 연결 리스트의 크기를 찾기 위해 0에서 시작
    }

    /* 
        [기능 1] => head 노드 추가
        시간복잡도 O(1)
    */
    addFirstNode = (input) => {
        let newNode = new Node(input, this.head); // 새 노드를 추가하고 기존 head를 next로 연결시키고 한칸씩 밀어냄.
        this.head = newNode; // 새 노드를 Head 로 지정
        this.size++; // 노드가 추가 될때마다 리스트의 사이즈를 증가시킴

        // 새로 추가한 노드의 다음 연결노드가 없다면 해당 노드는 tail이 된다.
        if (this.head.next === null) {
            this.tail = this.head;
        }

        // console.log('[LIST-SIZE]-->', this.size);
    };

    removeFirstNode = () => {
        this.head = this.head.next;
        this.size--;
    };

    /* [기능 2] => n번째 자리에 노드 추가
        시간복잡도 O(n)    
        input : 입력 값
        n : 몇번째 차리에 추가/삭제할지 정수 값
     */
    addSelectNode = (input, n) => {
        // 몇번째에 추가하고 싶은지에 대한 노드 자리 탐색을 한다.
        // 추가대상의 앞노드와 뒷노드를 알아야함

        // head부터 시작
        let prev = this.head;
        let newNode;

        // 추가하고자 하는 위치 이전까지 노드 탐색
        for (let i = 0; i < n - 1; i++) {
            prev = prev.next;
        }

        // 새 노드를 추가하고 , 새노드의 next는 n번째 자리에 있던 노드로 연결한다.
        newNode = new Node(input, prev.next);
        this.size++;
        // 추가하고자하는 자리 바로 뒤 노드 prev의 연결은 새 노드로 한다.
        prev.next = newNode;

        console.log(this.size);
    };

    /* [기능 3] => n번쨰 자리 노드 제거
     */
    removeSelectNode = (n) => {
        let prev = this.head;
        let next;
        let deleteNode;

        for (let i = 0; i < n - 1; i++) {
            prev = prev.next;
        }

        // 삭제할 노드 임시 저장
        deleteNode = prev.next;

        // 삭제할 노드 다음 노드
        next = deleteNode.next;
        prev.next = next;

        // 삭제될 노드는 어떠한 객체도 참조하지 않는다.

        // 사이즈를 조정한다.
        this.size--;

        console.log(this.size);
    };

    /* [기능 4] => tail에 새로운 노드를 추가
     */
    addTailNode = (input) => {
        // 리스트의 끝을 알고 있으므로 뒤에서 바로 추가 가능
        this.tail.next = new Node(input, null);
        this.tail = this.tail.next;
        this.size++;
    };

    /* [기능 5] => tail 삭제
     */
    removeTailNode = () => {
        let prev = this.head;

        while (prev.next.next !== null) {
            prev = prev.next;
        }

        prev.next = null;

        this.tail = prev;
        this.size--;
    };
}

const linkedList = new LinkedList();

linkedList.addFirstNode(50);
linkedList.addFirstNode(150);
linkedList.addFirstNode(80);
linkedList.addFirstNode(30);
linkedList.addFirstNode(10);

linkedList.addSelectNode(85, 2);
linkedList.removeSelectNode(4);

linkedList.addTailNode(300);
linkedList.removeTailNode();
linkedList.removeFirstNode();
