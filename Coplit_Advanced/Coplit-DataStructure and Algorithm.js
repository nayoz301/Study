//Q1 스택 구현
class Stack {
  constructor() {
    this.storage = {};
    this.top = 0; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
  }

  size() {
    return this.top;
  }

  // 스택에 데이터를 추가 할 수 있어야 합니다.
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }

  // 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.top === 0) {
      return;
    }

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;

    return result;
  }
}

//Q2 큐 구현
class Stack {
  constructor() {
    this.storage = {};
    this.top = 0; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
  }

  size() {
    return this.top;
  }

  // 스택에 데이터를 추가 할 수 있어야 합니다.
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }

  // 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.top === 0) {
      return;
    }

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;

    return result;
  }
}

//Q3 스택 브라우저 앞으로 뒤로 가기
function browserStack(actions, start) {
  let prev = [];
  let next = [];
  let cur = start;

  for (let i = 0; i < actions.length; i++) {
    if (typeof actions[i] === "string") {
      prev.push(cur);
      cur = actions[i];
      next = [];
    } else if (actions[i] === -1) {
      if (prev.length !== 0) {
        next.push(cur);
        cur = prev[prev.length - 1];
        prev.pop();
      }
    } else if (actions[i] === 1) {
      if (next.length !== 0) {
        prev.push(cur);
        cur = next[next.length - 1];
        next.pop();
      }
    }
  }
  result = [prev, cur, next];
  // result = `[${prev}], ${cur}, [${next}]`
  return result;
}

//Q5 프린터
function queuePrinter(bufferSize, capacities, documents) {
  let count = 0;
  let queue = [];
  let totalBufferVolume = 0;

  // queue에 bufferSize만큼 0을 삽입합니다. (queue에 들어갈 요소의 고정 갯수를 만들어 주는 과정입니다.)
  for (let i = 0; i < bufferSize; i++) {
    queue.push(0);
  }

  // ~23번째 줄까지의 코드는 프린터를 처음 실행했을 때를 다룹니다.
  // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
  let currentDocument = documents.shift();

  // queue의 제일 앞에 currnetDocument를 삽입하고, 제일 마지막 요소를 없앱니다.
  queue.unshift(currentDocument);
  queue.pop();

  // totalBufferVolume(총 용량)에 currnetDocument의 크기를 합칩니다.
  totalBufferVolume = totalBufferVolume + currentDocument;

  // 1 초가 지났다는 것을 count를 증가하며 나타냅니다.
  count++;

  // totalBufferVolume(총 용량)가 0이 될 때까지 반복합니다.
  while (totalBufferVolume) {
    // totalBufferVolume(총 용량)에 queue에 있는 마지막 요소의 용량을 제거합니다.
    totalBufferVolume = totalBufferVolume - queue.pop();

    // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
    currentDocument = documents.shift();

    // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 작거나 같다면
    if (currentDocument + totalBufferVolume <= capacities) {
      // queue에 currentDocument를 삽입하고 totalBufferVolume(총 용량)에 currentDocument 용량을 추가합니다.
      queue.unshift(currentDocument);
      totalBufferVolume = totalBufferVolume + currentDocument;

      // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 크다면
    } else {
      // 다시 documents에 currentDocument를 집어넣고 queue에는 0을 삽입합니다.
      documents.unshift(currentDocument);
      queue.unshift(0);
    }

    // 한 번 반복할 때마다 count(초)를 올립니다.
    count++;
  }

  // count를 반환합니다.
  return count;
}

//Q6 트리 구현
class Tree {
  constructor(value) {
    // constructor로 만든 객체는 트리의 Node가 됩니다.
    this.value = value;
    this.children = [];
  }

  // 트리의 삽입 메서드를 만듭니다.
  insertNode(value) {
    // 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요합니다.
    // TODO: 트리에 붙게 될 childNode를 만들고, children에 넣어야 합니다.
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
  contains(value) {
    // TODO: 값이 포함되어 있다면 true를 반환하세요.
    if (this.value === value) {
      return true;
    }
    // TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.
    for (let i = 0; i < this.children.length; i += 1) {
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    } // 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환합니다.
    return false;
  }
}
