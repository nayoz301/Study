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
  //버퍼사이즈 작업 목록 최대 갯수, 캐파 작업 가능 용량, 도큐먼츠 각 도큐 용량 및 총 갯수
  // 이 문제에서 헷갈렸던 점이 캐파가 충분하다고 작업 목록에 추가되도 바로 인쇄되기 전 상태가 되는 것이 아니라
  // 큐의 길이가 작업 목록 최대 갯수라서 unshift로 idx0에 들어가서 큐 길이만큼 초를 세면서 idx순으로 마지막 끝으로 가야 그 다음에 pop()으로 빼내서 작업에 들어가는 구조이다.
  // 그래서 1초마다 큐 안의 엘리먼트가 unshift로 앞에서 하나 차고 뒤에서 하나 빠지는 식으로 나간다.
  // 뒤에서 빠지는 엘리먼트의 값 만큼 토탈버퍼볼륨에서 빼줘서 한 번에 프린터가 수용할 수 있는 문서 크기의 총합을 조정해나간다.
  // 그리고 앞에서 unshift되는 자료의 값만큼 토탈버퍼볼륨에 더해준다.
  // 만약에 토탈버퍼볼륨이 캐파보다 크게 될 경우엔 큐에 unshift하지 말고 도큐먼트 앞에서 빼준 것을 도로 도큐먼트에 unshift해서 순서가 꼬이는 걸 막아준다.

  let count = 0;
  let queue = [];
  let totalBufferVolume = 0;

  // queue에 작업 최대 갯수 만큼 큐에 0을 넣어준다. 큐에 들어갈 고정 갯수를 만들어줌.
  for (let i = 0; i < bufferSize; i++) {
    queue.push(0);
  }

  // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당한다.
  let currentDocument = documents.shift();

  // queue의 제일 앞에 currnetDocument를 삽입하고 마지막 0을 없애서 만들어놓은 버퍼사이즈를 유지시켜 준다.
  queue.unshift(currentDocument);
  queue.pop();

  // totalBufferVolume(총 용량)에 currnetDocument의 크기를 합칩니다.
  totalBufferVolume = totalBufferVolume + currentDocument;

  // 1 초가 지났다는 것을 count를 증가하며 나타냅니다.
  count++;

  // totalBufferVolume(총 용량)가 0이 될 때까지 반복합니다.
  while (totalBufferVolume) {
    // totalBufferVolume(총 용량)에 queue에 있는 마지막 요소의 용량을 제거한다.
    totalBufferVolume = totalBufferVolume - queue.pop();

    // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당.
    currentDocument = documents.shift();

    // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 작거나 같다면
    if (currentDocument + totalBufferVolume <= capacities) {
      // queue에 currentDocument를 삽입하고 totalBufferVolume(총 용량)에 currentDocument 용량을 추가한다.
      queue.unshift(currentDocument);
      totalBufferVolume = totalBufferVolume + currentDocument;

      // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 크다면
    } else {
      // 다시 documents에 currentDocument를 집어넣고 queue에는 0을 삽입.
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

//Q10 그래프 인접 행렬 생성하기
function createMatrix(edges) {
  // let numArr = edges.reduce(function(acc,cur){
  //   return acc.concat(cur)
  // }).filter(function(el){
  //   return !isNaN(el)
  // })
  //  위의 식을 화살표 함수로 줄인것. 메소드를 쓰면 메소드 안의 내용을 다 ()소괄호 안에 넣어줘야되네.
  let numArr = edges
    .reduce((acc, cur) => acc.concat(cur))
    .filter((el) => !isNaN(el));
  let maxNum = Math.max(...numArr);
  // 매개 변수로 주어진 edges의 배열을 리듀스로 concat해서 한 배열로 만들고
  // 필터를 적용시켜서 숫자만 골라낸다.
  // 매스맥스로 가장 큰 숫자를 maxNum에 할당한다.

  let arr = [];
  for (let n = 0; n <= maxNum; n++) {
    function makeArr() {
      for (let i = 0; i < arr.length; i++) {
        arr[i].push(0);
      }
      arr.push(new Array(arr.length + 1).fill(0));
    }
    makeArr();
  }
  // 앞서 maxNum으로 가장 큰 숫자를 구했으므로 그걸 통해서 2차원 배열을 만든다.
  // 가장 큰 숫자는 idx값이므로 매트릭스를 만들땐 maxNum+1으로 만들어야한다.
  // 예를 들어 인덱스5번은 결국 6번째이기 때문이다.

  for (let j = 0; j < edges.length; j++) {
    arr[edges[j][0]][edges[j][1]] = 1;
    if (edges[j][2] === "undirected") {
      arr[edges[j][1]][edges[j][0]] = 1;
    }
  }
  // edges길이만큼 반복문을 돌면서 edges의 배열 0번 1번 인덱스의 값에 해당하는 매트릭스에 1, 0표시하고
  // 쌍방인지 일방인지 확인해서 데칼코마니처럼 표시하던지 아니면 한쪽만 표시하던지 한다.
  //
  return arr;
}

//Q11 그래프 인접 행렬 길찾기
function getDirections(matrix, from, to) {
  let queue_ToVisit = [from]; //시작 지점
  let queue_AddList = (vertex) => queue_ToVisit.push(vertex);
  let queue_DeList = () => queue_ToVisit.shift();
  let isVisited = new Array(matrix.length).fill(false);

  while (queue_ToVisit.length > 0) {
    let landed_justNow = queue_DeList();
    if (landed_justNow === to) {
      return true;
    }

    for (let next = 0; next < matrix[landed_justNow].length; next++) {
      if (matrix[landed_justNow][next] && !isVisited[next]) {
        queue_AddList(next);
        isVisited[landed_justNow] = true;
      }
    }
  }
  return false;
}

//Q13 [DFS / BFS] 연결된 정점들
function connectedVertices(edges) {
  //우선 매트릭스를 만들기 위해서 가장 큰 수를 찾는다.
  let maxNum = 0;
  for (let i = 0; i < edges.length; i++) {
    if (maxNum < edges[i][0]) {
      maxNum = edges[i][0];
    }
    if (maxNum < edges[i][1]) {
      maxNum = edges[i][1];
    }
  }

  //가장 큰 수로 매트릭스를 만든다.
  let matrix = Array(maxNum + 1)
    .fill(0)
    .map((el) => Array(maxNum + 1).fill(0));
  //매트릭스에 간선을 만들어준다.
  for (let j = 0; j < edges.length; j++) {
    matrix[edges[j][0]][edges[j][1]] = 1;
    matrix[edges[j][1]][edges[j][0]] = 1;
  }

  //간선을 확인해준다.
  //정점을 찍고 간 경우 체크해준다.
  let count = 0;
  let isVisited = Array(matrix.length).fill(false);
  for (let n = 0; n <= maxNum; n++) {
    if (isVisited[n] === false) {
      checking(n);
      count++;
    }
  }

  function checking(vertex) {
    isVisited[vertex] = true;
    for (let e = 0; e < matrix[vertex].length; e++) {
      if (matrix[vertex][e] === 1) {
        if (isVisited[e] === false) {
          checking(e);
        }
      }
    }
  }
  return count;
}

// 다른 풀이
function connectedVertices(edges) {
  let maxNum = 0; // 정점의 개수 구하는 식
  for (let i = 0; i < edges.length; i++) {
    if (edges[i][0] > maxNum) {
      maxNum = edges[i][0];
    }
    if (edges[i][1] > maxNum) {
      maxNum = edges[i][1];
    }
  } //인덱스 0번 1번 돌면서 큰 수 할당

  let obj = {};
  for (let u = 0; u <= maxNum; u++) {
    obj[u] = [];
  } //앞에서 구한 정점 개수 만큼 인접리스트를 넣을 객체를 생성해준다.

  for (let n = 0; n < edges.length; n++) {
    obj[edges[n][0]].push(edges[n][1]); //obj 빈 객체에
    obj[edges[n][1]].push(edges[n][0]);
  } // [2,3]을 예로 들면 2에는 3을 넣어주고 3에는 2를 넣어주는 식

  let isVisited = {};
  let count = 0;
  for (let vertex = 0; vertex <= maxNum; vertex++) {
    //정점 0에서 5까지 넣어준다.
    if (isVisited[vertex] === undefined) {
      //정점에 방문한 기록이 없으면
      findIfItsVisited(vertex); // 함수에 정점을 넣어준다.
      count++;
    }
  }
  function findIfItsVisited(vertecs) {
    isVisited[vertecs] = 1;
    for (let m = 0; m < obj[vertecs].length; m++) {
      if (!isVisited[obj[vertecs][m]]) {
        findIfItsVisited(obj[vertecs][m]);
      }
    }
  }
  return count;
}

//Q14 DFS 바코드
function barcode(len) {
  let aux = function (str) {
    if (str.length === len) {
      return str;
    }

    for (let i = 1; i <= 3; i++) {
      if (isValid(str + i)) {
        let result = aux(str + i);
        if (result !== null) return result;
      }
    }
    return null;
  };

  let isValid = function (str) {
    let reversed = str.split("").reverse().join("");
    let half = Math.floor(reversed.length / 2);

    for (let j = 1; j <= half; j++) {
      if (reversed.slice(0, j) === reversed.slice(j, j + j)) {
        return false;
      }
    }
    return true;
  };

  return aux("");
}
