const rockPaperScissors = function (num) {
  num = num || 3; //이게 뭐길래? 이거 없으면 안돌아감.
  let base = ["rock", "paper", "scissors"];
  let result = [];
  function howManyWays(storage, times) {
    if (times === num) {
      result.push(storage);
      return;
    }
    base.forEach(function (el) {
      howManyWays(storage.concat(el), times + 1);
      // for(let i = 0; i< base.length; i++){
      //   howManyWays(storage.concat(base[i]), times+1)
    });
  }
  howManyWays([], 0);
  return result;
};

const rockPaperScissors = function (num) {
  num = num || 3;
  // 주먹 고정 1 * 3 * 3
  // 가위 고정 1 * 3 * 3
  // 보  고정 1 * 3 * 3
  let base = ["rock", "paper", "scissors"];
  function howManyWays(num) {
    let result = [];
    if (num === 1) {
      result = base.map((el) => [el]);
      return result;
    }
    for (let i = 0; i < 3; i++) {
      let previousResult = howManyWays(num - 1);
      let attach = previousResult.map((el) => [base[i], ...el]);
      result.push(...attach);
    }
    return result;
  }
  let result = howManyWays(num);
  return result;
};

//2

function fibonacci(n, memo = [0, 1]) {
  if (memo[n] !== undefined) {
    // if(memo[n]){
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
}
//2번에 왜  if(memo[n]!==undefined){ 이거는 돌아가고  if(memo[n]){ 이거면 맥시멈 콜?

// function fibonacci(n, memo=[]) {
//   // let memo = [];
//   if(memo[n]){
//     return memo[n];
//   }
//   else{
//     if(n===0){
//     memo[n] = 0;
//     return memo[n];

//     } else if (n <= 2){
//     memo[n] = 1
//     return memo[n];

//     } else{
//       if(!memo[n]){
//         memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
//         return memo[n]
//       }
//     }
//   }
// }

//3
const isSubsetOf = function (base, sample) {
  //base와 sample 정렬
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  //내부 함수를 만들어서 sample의 엘리먼트를 반복문으로
  //차례대로 대입하면서 해당 엘리먼트가 base에 있는지
  //base를 반복문으로 돌려가면서 비교해준다.
  //base에 있다면 그 인덱스를 리턴하고
  //base에 없고 같은 수가 나오기전에 sample[i]보다 큰수가 나오게 되면
  //base에 해당 숫자가 없는 격이 되므로 -1을 리턴해준다.
  //그리고 idx에 찾아낸 sample[i]의 인덱스를 할당해주게 되므로
  //sample[i+1]을 찾을 때는 전에 찾았던 idx 다음부터 찾으면 된다.
  //이 부분 기억하기
  function findCurInBase(cur, base, idx) {
    for (let i = idx; i < base.length; i++) {
      if (base[i] === cur) {
        return i;
      } else if (base[i] > cur) {
        return -1;
      }
    }
    return -1;
  }

  let idx = 0;
  for (let i = 0; i < sample.length; i++) {
    idx = findCurInBase(sample[i], base, idx);
    if (idx === -1) {
      return false;
    }
  }
  return true;
};

//코드스테이츠 레퍼런스
const isSubsetOf = function (base, sample) {
  // naive solution: O(M * N)
  // return sample.every((item) => base.includes(item));

  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};

//4
//내 풀이
const bubbleSort = function (arr) {
  let storage = arr.slice();
  let result = [];
  let tempStorage = "";
  let length = arr.length - 2;
  for (let i = arr.length - 1; i >= 0; i--) {
    let process = bubble(0, 0, i);
    if (Array.isArray(process)) {
      return process;
    }
  }
  return result;

  function bubble(numTill, count, i) {
    if (count === i) {
      return storage;
    }
    if (numTill === i) {
      result = storage;
      return;
    }
    if (storage[numTill] > storage[numTill + 1]) {
      tempStorage = storage[numTill];
      storage[numTill] = storage[numTill + 1];
      storage[numTill + 1] = tempStorage;
    } else {
      count++;
    }
    let recur = bubble(numTill + 1, count, i);
    return recur;
  }
};

//래퍼런스
const swap = function (idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
};

// naive solution
// let bubbleSort = function (arr) {
//   let N = arr.length;

//   for (let i = 0; i < N - 1; i++) {
//     // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
//     // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
//     for (let j = 0; j < N - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(j, j + 1, arr);
//       }
//     }
//   }

//   return arr;
// };

// optimized solution
let bubbleSort = function (arr) {
  let N = arr.length;

  for (let i = 0; i < N; i++) {
    // swap 횟수를 기록한다.
    // 어떤 요소도 swap되지 않은 경우, 배열은 정렬된 상태이다.
    let swaps = 0;

    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
      }
    }

    if (swaps === 0) {
      break;
    }
  }

  return arr;
};

//5
// naive solution: O(2^N)
// 2 x 4 보드에 타일을 놓는 방법은 5가지다.
// 각 타일을 a, b, c, d로 구분한다.
// 아직 타일이 놓이지 않는 부분은 -로 표기한다.
// 타일을 놓는 방법은 가장 왼쪽부터 세로로 놓거나 가로로 놓는 것으로 시작한다.
// 1) 세로로 놓는 법
//   2 | a - - -
//   1 | a - - -
//   ------------
// 2) 가로로 놓는 법
// 타일을 가로로 놓게 되면, 그 바로 아래에는 가로로 놓을 수 밖에 없다.
//   2 | a a - -
//   1 | b b - -
//   ------------
// 이때, 타일이 아직 놓이지 않은 부분은 사실 크기만 다를뿐 같은 종류의 문제라는 것을 알 수 있다.
// 즉, 2 x 4 보드에 타일을 놓는 방법은 아래 두 가지 방법을 더한 결과와 같다.
//  1) 2 x 3 보드에 타일을 놓는 방법
//  2) 2 x 2 보드에 타일을 놓는 방법
// 따라서 2 x n 타일 문제는 아래와 같이 재귀적으로 정의할 수 있다.
// 주의: 재귀적 정의에는 항상 기초(base), 즉 더 이상 재귀적으로 정의할 수 없는(쪼갤 수 없는) 문제를 별도로 정의해야 한다.
// let tiling = function (n) {
//   if (n <= 2) return n;
//   return tiling(n - 1) + tiling(n - 2);
// };

// dynamic with memoization: O(N)
let tiling = function (n) {
  // 인덱스를 직관적으로 관리하기 위해
  // 앞 부분을 의미없는 데이터(dummy)로 채운다.
  const memo = [0, 1, 2];

  // 재귀를 위한 보조 함수(auxiliary function)을 선언)
  const aux = (size) => {
    // 이미 해결한 문제는 풀지 않는다.
    if (memo[size] !== undefined) return memo[size];
    if (size <= 2) return memo[n];
    memo[size] = aux(size - 1) + aux(size - 2);
    return memo[size];
  };
  return aux(n);
};

// dynamic with tabulation: O(N)
// tabulation은 데이터를 테이블에 정리하면서 bottom-up 방식으로 해결하는 기법을 말합니다.
// let tiling = function (n) {
//   const memo = [0, 1, 2];
//   if (n <= 2) return memo[n];
//   for (let size = 3; size <= n; size++) {
//     memo[size] = memo[size - 1] + memo[size - 2];
//   }
//   return memo[n];
// };

// dynamic with slicing window: O(N)
// slicing window은 필요한 최소한의 데이터만을 활용하는 것을 말합니다.
// 크기 n의 문제에 대한 해결을 위해 필요한 데이터는 오직 2개뿐이라는 사실을 이용합니다.
// let tiling = function (n) {
//   let fst = 1,
//     snd = 2;
//   if (n <= 2) return n;
//   for (let size = 3; size <= n; size++) {
//     // 앞의 두 수를 더해 다음 수를 구할 수 있다.
//     const next = fst + snd;
//     // 다음 문제로 넘어가기 위해 필요한 2개의 데이터의 순서를 정리한다.
//     fst = snd;
//     snd = next;
//   }
//   return snd;
// };

//Q6
const sudoku = function (board) {
  const N = board.length;
  const boxes = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
  ];
  const getBoxNum = (row, col) => boxes[row][col];

  const blanks = [];
  const rowUsed = [];
  const colUsed = [];
  const boxUsed = [];
  for (let row = 0; row < N; row++) {
    rowUsed.push(Array(N + 1).fill(false));
    colUsed.push(Array(N + 1).fill(false));
    boxUsed.push(Array(N + 1).fill(false));
  }

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] === 0) {
        blanks.push([row, col]);
      } else {
        const num = board[row][col];
        const box = getBoxNum(row, col);
        rowUsed[row][num] = true;
        colUsed[col][num] = true;
        boxUsed[box][num] = true;
      }
    }
  }

  const isValid = (row, col, num) => {
    const box = getBoxNum(row, col);
    return (
      rowUsed[row][num] === false &&
      colUsed[col][num] === false &&
      boxUsed[box][num] === false
    );
  };

  const toggleNum = (row, col, num) => {
    const box = getBoxNum(row, col);
    board[row][col] = num;
    rowUsed[row][num] = !rowUsed[row][num];
    colUsed[col][num] = !colUsed[col][num];
    boxUsed[box][num] = !boxUsed[box][num];
  };

  const aux = (idx, blanks, board) => {
    if (idx === blanks.length) {
      return true;
    }

    const [row, col] = blanks[idx];
    for (let num = 1; num <= 9; num++) {
      if (isValid(row, col, num) === true) {
        toggleNum(row, col, num);
        if (aux(idx + 1, blanks, board) === true) {
          return true;
        }
        toggleNum(row, col, num);
      }
    }
    return false;
  };

  aux(0, blanks, board);
  return board;
};
//Q7
let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let values = [node.value];

  node.children.forEach((n) => {
    values = values.concat(dfs(n));
  });

  return values;
};

// let dfs = function (node) {
//   let result = [];
//   result.push(node.value);
//   if(node.children){
//     node.children.forEach(function(el){
//       result.push(el.value);
//       dfs(el.children)
//     })
//   }
//   else{
//     return;
//   }
//   return result;
// };

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

//Q8
//내 풀이
const largestProductOfThree = function (arr) {
  if (arr.length === 3) {
    return arr.reduce((acc, cur) => acc * cur);
  } else {
    let positiveNum = arr.filter((el) => el >= 0).sort((a, b) => b - a);
    let negativeNum = arr.filter((el) => el < 0).sort((a, b) => a - b);
    if (negativeNum.length >= 1) {
      positiveNum = positiveNum.slice(0, 3);
      return positiveNum.reduce((acc, cur) => acc * cur);
    } else if (positiveNum.length === 0) {
      negativeNum = negativeNum.slice(-3);
      return negativeNum.reduce((acc, cur) => acc * cur);
    } else {
      if (
        negativeNum.slice(0, 2).reduce((acc, cur) => acc * cur) >
        positiveNum.slice(0, 2).reduce((acc, cur) => acc * cur)
      ) {
        return (
          negativeNum.slice(0, 2).reduce((acc, cur) => acc * cur) *
          positiveNum[0]
        );
      }
    }
  }
};

const largestProductOfThree = function (arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
};
