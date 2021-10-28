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

//Q1
function orderOfPresentation(N, K) {
  /*
    a! = a*(a-1)!
    1! = 1 * 0!
    1 = 1 * 0!
    0! = 1;
    */
  let factorial = (n) => {
    if (n <= 1) return 1;
    else return n * factorial(n - 1);
  };
  let order = 0;
  let isUsed = new Array(N + 1).fill(false);
  for (let i = 0; i < N; i++) {
    /*
      주어진 배열의 숫자들로 순열을 만들어서 작은 차례부터 쭉 나열헀을 때
      주어진 K배열이 앞에서 몇번째에 오는지를 알아보는 문제이다.
      주어진 배열 맨 앞의 숫자부터 확인한다. 맨 앞 숫자가 4라면 그 밑의 숫자인 1,2,3을 이용한 배열들이
      차례가 모두 지나간 것이 되므로 1을 맨앞으로, 2를 맨앞으로, 3을 맨앞으로 내서 만들 수 있는 숫자를
      쫙 뽑고 그 걸 카운트로 세주고 4가 맨 앞에 있을 경우에 그 다음 숫자들을 계산해보며 카운트를 계산한다.
      */
    //배열 맨 앞 숫자를 뽑는다.
    let num = K[i];
    //지금 뽑은 숫자는 사용된 것으로 간주하여 true값으로 바꿔준다.
    isUsed[num] = true;
    //맨 앞 숫자보다 낮은 숫자들로 만들 수 있는 순열을 계산하기 위해 맨 앞 숫자보다 작은 숫자들의 false값만 뽑는다.
    let preUsedNum = isUsed.slice(1, num); //0은 더미 데이터라서 1부터 시작;
    //현재 해당숫자 앞에 사용되었다고 가정한 숫자들의 개수 구하기(num보다 작은 인덱스 중 false인 갯수 구하기)
    let preUsedNumCt = preUsedNum.filter((el) => el === false).length;
    //맨 앞자리 숫자를 고정하고 나머지 숫자로 순열을 만들어서 갯수가 몇개나 나오는지를 보기 위해서
    //팩토리얼 함수에 배열의 길이(요소의 갯수)-현재 기준이되는 숫자 갯수(현재 맨 앞자리 고정을 가정했으므로 1)을 해준다.
    //i값이 0이므로 -1을 더 해줘서 고정되는 값의 갯수를 나타내준다.
    let count = preUsedNumCt * factorial(N - i - 1);
    order += count;
  }
  return order;
}

//Q2
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

//Q3
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

//Q4 Bubble sort
let bubbleSort = function (arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let swap = 0;
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps(j, j + 1);
        swap++;
      }
    }
    if (swap === 0) {
      break;
    }
  }
  return arr;

  function swaps(prev, next) {
    [arr[prev], arr[next]] = [arr[next], arr[prev]];
  }
};

//래퍼런스 정리한거
let bubbleSort = function (arr) {
  let N = arr.length;

  for (let i = 0; i < N; i++) {
    // swap 횟수를 기록하기. 스왑이 일어나지 않은 경우는 정렬된 상태이므로 두번째 포문을 한번 돌고 바로 break로 빠져나오기.
    let swaps = 0;
    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
    // 예를 들어 [0,4,1,2,3,5,6,7]일 때 i가 3이면
    // 이미 5,6,7은 전 단계에서 배열이 맞춰진 것이므로 뒤에 3개는 볼 필요가 없다.
    // 그렇기 떄문에 'j < N - 1 - i'만 비교하면 되는 것이다.
    // i가 0일때 배열의 마지막 인덱스에 가장 큰 수가 오게 된다. 그래서 N - 1 - i 하면 배열 가장 마지막 수가 된다.
    // 어차피 j < length-1 번째면 마지막 인덱스 하나전(length-2)까지 포문이 돌게 되는데, 여기까지 돌아도 j와 j+1까지 비교하므로 상관없음.
    // i가 1일때 배열의 arr.length-2 인덱스에 두번째로 큰 수가 오게 된다. 그래서 N - 1 - i 하면 arr.length-2 여기까지만 확인한다. 맨뒤는 이미 맞춰졌으니까
    for (let j = 0; j < N - 1 - i; j++) {
      //두번째 포문에 i들어가는 거 주의하기
      //i의 수 만큼 맨 뒤에 큰 수들이 정렬되어 있게되므로 i만큼을 빼주는 것이 효율적이다.
      //i가 3이면 뒤에 5,6,7이 정렬되어있다는 소리. i가 2이면 6,7.
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

  function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
};

//Q5
//피보나치랑 결이 비슷한 문제
//타일이 2x0이면 놓을 공간이 없으므로 0개 방법
//2x1 이면 세로로 한번 놓을 수 있으므로 1개 방법
//2x2 이면 세로로 1 방법 + 가로로 1 방법해서 2개 방법
//2x3 이면 두 가지 경우로 나눌 수 있음
//1. 맨 왼쪽 타일을 세로로 놓을 경우 : 앞선 2X2의 결과가 나옴 : 2개
//2. 맨 왼쪽 타일을 가로로 놓을 경우 : 앞선 2X1의 결과가 나옴 : 1개
//1번과 2번을 합친 3개가 된다.
//고로 2Xn => 2(n-1) + 2(n-2)가 된다.
//파보나치 같은 느낌.
let tiling = function (n, memo = [0, 1, 2]) {
  if (n < 2) {
    return memo[n];
  }
  if (memo[n] !== undefined) {
    return memo[n];
  }
  return (memo[n] = tiling(n - 1, memo) + tiling(n - 2, memo));
};

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
function sudoku(board) {
  let sudokuLength = 9;
  let row = -1;
  let col = -1;
  // blankToFill가 true 라는 건 스도쿠가 꽉꽉 채워졌다 더 이상 풀 칸이 없다
  // blankToFill가 false 라는 건 스도쿠에 아직 0이 있다. 즉, 풀어야할 칸이 아직 존재
  let blankToFill = false;
  // 더 이상 풀 게 없다고 가정하고 false를 할당
  for (let i = 0; i < sudokuLength; i++) {
    for (let j = 0; j < sudokuLength; j++) {
      // 스도쿠 칸 전부를 돌아보면서 0인 경우 좌표를 기억해놓는다
      if (board[i][j] === 0) {
        row = i;
        col = j;

        // 0이 발견된 경우 true로 바꾸고 이중반복문을 나간다.
        blankToFill = true;
        break;
      }
    }
    // 아까 true로 바뀌었기 때문에 반복문을 나간다.
    if (blankToFill) {
      break;
    }
  }
  // 이중반복문을 돌고도 위에 조건에 걸리지 않은 경우엔 0이 하나도 없는 경우 이므로 리턴해준다.
  if (!blankToFill) {
    return board;
  }

  // 스도쿠 1~9까지의 숫자를 반복문으로 차례차례 대입해보면서 유효성 검사를 해준다.
  for (let num = 1; num <= sudokuLength; num++) {
    if (isValid(board, row, col, num)) {
      // 유효성 검사 통과했으면 해당 num을 넣어준다.
      board[row][col] = num;
      if (sudoku(board)) {
        // 유효성 검사 통과 후 재귀돌려서 여전히 채울 칸이 남았는지 확인하고 있으면 리턴, 없으면 다시 반복한다.
        // 만약 채워야할 칸이 4개일 경우 첫번째 칸을 임의로 채우고 재귀로 2번째 칸을 임의로 채우고 3번째 칸을 채우는 방식인데
        // 1번째 칸이 잘못된 경우에는 2번째 3번째 칸을 채웠던 것을 전부 다 버리고 1번째칸 진행 중이던 곳으로 돌아가서 1번째 칸에 다음 값을 넣어서 시도해본다.
        // board의 값은 배열이라 참조하는 값의 주소를 갖고있는다. 그래서 재귀 탈출 시에 굳이 리턴해주지 않아도 참조 주소값을 다 공유하므로 리턴해도 무방한 경우이다.
        return board;
      } else {
        // Replace it
        board[row][col] = 0;
      }
    }
  }
  return false;

  function isValid(board, row, col, num) {
    /*
    // 가로 축 확인
    for (let x = 0; x <= 8; x++) if (board[row][x] === num) return false;
    // 세로 축 확인
    for (let y = 0; y <= 8; y++) if (board[y][col] === num) return false;
    이 두개를 하나로 뭉쳐서 바로 밑의 코드로 만듦;
    */
    for (let i = 0; i < sudokuLength; i++) {
      if (board[i][row] === num || board[col][i] === num) {
        return false;
      }
    }

    // 3 x 3 섹션을 구한다.
    // 각 row와 col을 3으로 나눈 뒤 나머지를 각각 row, col에서 뺀다.
    /**
     * ex) row가 5라면 5 - ( 5 % 3 ) = 3
     *     col이 2라면 2 - ( 2 % 3 ) = 0
     *
     * |-------|-------|-------|
     * |   1   |   2   |   3   |
     * |-------|-------|-------|
     * |   4   |   5   |   6   |
     * |-------|-------|-------|
     * |   7   |   8   |   9   |
     * |-------|-------|-------|
     *
     */
    // 여기부터는 내부에 3x3 작은 사각형에 0~9까지의 숫자가 골고루 있는지를 검사하는 것
    // 큰 사각형에서의 좌표로 계산해서 어떤 작은 사각형에 위치하는지 좌표를 구한다.
    let startRow = row - (row % 3),
      startCol = col - (col % 3);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // 원래 해당 좌표엔 0이 들어있고 새로운 숫자를 넣기 위한 num이 비교대상으로 주어져있다.
        // 만약 num과 같은 수가 이미 안에 있다면 false를 리턴해서 다른 수를 찾게 된다.
        if (board[i + startRow][j + startCol] === num) return false;
      }
    }
    return true;
  }
}

//스도쿠 다른 풀이 이건 이해가 잘 안됌.
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
  //숫자가 가장 크려면 1.sort해서 맨 뒤 숫자 세개를 선택해서 곱한다.
  // 2. 음수가 있는 경우 음수 제일 낮은 것 2개를 선택해서 곱해주고 맨 뒤 제일 큰 수를 더해준다.
  let num = arr.slice();
  num.sort((a, b) => a - b);
  let result1 = num[arr.length - 1] * num[arr.length - 2] * num[arr.length - 3];
  let result2 = num[0] * num[1] * num[arr.length - 1];
  let max = Math.max(result1, result2);
  return max;
};

//Q9
function power(base, exponent) {
  if (exponent === 0) return 1;

  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  if (exponent % 2 === 1) return (base * result) % 94906249;
  else return result;
}
/*
O(logN)의 방법으로 하는 게 문제이므로 매 회차마다 반씩 줄어드는 게 포인트
재귀를 사용하여 반씩 줄여가며 지수를 0까지 내리고 지수 0에 숫자 1이 되어 탈출 조건이 성립되면 다시 올라온다.
올라와서 지수가 홀수인 경우엔 해당 base^지수-1 의 숫자를 받았기 떄문에 base를 한번 더 곱해줘서
윗 차수로 넘길 때 문제가 없도록 해주는 게 핵심이다. 지수5인 경우에 올라왔을 때 전 차수에서 반환된 값이 지수4의 값이기 때문에
base를 한번 더 곱해서 지수5로 만들어주고 다음 차수인 지수10으로 넘긴다. 그래야 지수10에서 base^5 * base^5의 값을 다음 차수로 넘길 수 있다.
이 방법에선 지수가 짝수인지 홀수인지 두가지로 나눠서 문제에 접근했다.
자연수 계산을 해야하므로 parseInt를 이용해서 소수점의 경우 내림처리를 했기 때문에.
지수가 5인 경우 다음 재귀에선 parseInt(2.5)라서 2가 되버린다.
그렇게 되면 나중에 탈출문을 만나고 다시 위로 올라갈 때 지수 2+2 = 4라서 5가 되기에 1이 부족하므로
지수가 홀수이게 되면 base를 한번 더 곱해줘서 2+2+1 = 5로 맞춰주는 것이다.
그래야 지수5 에서 다음 차수인 지수10인 경우로 넘어갔을 때 3^4 * 3^4가 아니라 3^5 * 3^5가 된다.

ex) 11*11*11 % 123 === 1331 % 123 === 101;
101 * 101 % 123 = 115;
1331 * 1331 % 123 === 115;
먼저 나머지를 구하고 나머지끼리 곱한 후에 다시 나머지를 구하나
다 곱하고 나머지를 구하나 결과는 같다.

input이 base===3 에 exponent===40일 경우,
가장 바깥 함수를 N이라 가정, temp = power(3, 20);
base===3 / exponent === 20;
N-1 => temp = power(3,10);
N-2 => temp = power(3,5);
N-3 => temp = power(3,2);
N-4 => temp = power(3,1);
N-5 => temp = power(3,0);
N-6 => expo===0 return 1;
N-5 => exponent 1 홀수여서 return base * result % 94906249; return 3;
N-4 => exponent 2 짝수여서 return result(3*3===9)
N-3 => exponent 5 홀수여서 return result(3*81===243)
N-2 => exponent 10 짝수여서 return result(243*243===59049)
N-1 => exponent 20 짝수여서 return result(59049*59049%94906249===70159437);
N => exponent 40 짝수여서 return result(70159437*70159437%94906249===19334827)

*/

//Q10
/*O(logN)으로 풀기
left와 right을 설정한 후에 while문 안에서 mid라는 변수를 매번 새롭게 선언 할당해주면서
mid 수치에 있는 인덱스 값을 찾아서 확인하면서 풀기
*/
const binarySearch = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) right = mid - 1;
    else if (arr[mid] < target) left = mid + 1;
  }
  return -1;
};

//레퍼런스
const binarySearch = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

//Q11
/*
주어진 매개변수를 스플릿하고 소트로 정렬한다.
리듀스 함수를 사용해서 중복되는 항목을 제거한다.
그리고 func함수를 사용해서 재귀로 제일 밑으로 내려간 후에
filtered의 길이와 같아지게 되면 탈출 조건을 만족시켜서
올라오면서 맨 끝의 글자부터 하나씩 푸쉬하고
하나씩 앞으로 이동하면서 푸쉬해준다.
*/
const powerSet = function (str) {
  let sorted = str.split("").sort();
  let filtered = sorted.reduce((acc, cur) => {
    if (acc[acc.length - 1] === cur) {
      return acc;
    } else {
      return acc.concat(cur);
    }
  });
  let result = [];
  const func = (idx, subset) => {
    if (idx === filtered.length) {
      result.push(subset);
      return;
    }
    func(idx + 1, subset);
    func(idx + 1, subset + filtered[idx]);
  };
  func(0, "");
  return result.sort();
};

//Q12 Tree BFS
let bfs = function (node) {
  //bfs는 queue
  //dfs는 stack
  let queue = [node];
  let values = [];
  while (queue.length > 0) {
    //가장 상위 노드부터 시작
    //헤드의 밸류 값을 푸쉬하고 children이 있는 경우에
    //큐에 푸쉬해준다.
    let head = queue[0];
    queue = queue.slice(1);

    values.push(head.value);

    if (head.children) {
      head.children.forEach((child) => queue.push(child));
    }
  }
  return values;
};

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

//Q13
const insertionSort = function (arr) {
  let sorted = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > sorted[sorted.length - 1]) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (arr[i] < sorted[j]) {
          // let left = sorted.slice(0,j);
          // let right = sorted.slice(j);
          // sorted = left.concat(arr[i],right)
          sorted.splice(j, 0, arr[i]);
          break;
        }
      }
    }
  }
  return sorted;
};

const insertionSort = function (arr) {
  //말 그대로 빈 배열에 삽입하며 정렬하는 방식을 의미함.
  //우선 빈 배열에 첫번째 숫자를 담고 그 숫자를 기준으로 삽입한다.
  let sorted = [arr[0]]; //배열에 담아주는 거 잊지 말기!
  for (let i = 1; i < arr.length; i++) {
    //인덱스 0번을 기준으로 두었으니 인덱스 1번부터 시작하는 반복문을 돌린다.
    //미리 넣어뒀던 기준보다 큰 경우 문제없이 푸쉬해서 정렬해준다.
    if (arr[i] >= sorted[i - 1]) {
      // if (arr[i] >= sorted[sorted.length-1]) {
      sorted.push(arr[i]);
    } else {
      //하지만 기존에 추가했던 arr[arr.length-1]이 새로 추가할 숫자보다 작은 경우!
      //현재 삽입해놓은 배열까지만 돌면서 그 숫자들과 비교하여 맞는 자리를 찾는다.
      //현재 삽입해놓은 인덱스까지만 돌면 되기 때문에 j < i 로 조건이 설정된다.
      for (let j = 0; j < i; j++) {
        if (arr[i] <= sorted[j]) {
          //조건에 맞는 자리를 찾은 경우
          //슬라이스로 두 개의 배열로 분리한 후에
          //concat 메소드를 이용하여 그 중간에 새로 추가할 숫자를 담아서 합친다.
          //그 후 break로 탈출
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};

//Q14
const rotatedArraySearch = function (rotated, target) {
  let left = 0,
    right = rotated.length - 1;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if (rotated[middle] === target) {
      return middle;
    }
    // 왼쪽 절반이 정렬되어 있는 상태
    if (rotated[left] < rotated[middle]) {
      // 왼쪽 맨 끝에서 중간 사이에 타겟이 있는 경우, 오른쪽 텅텅빈 곳은 쓸모가 없으므로 오른쪽 공간을 줄여주기 위해 right에 middle -1
      // 그렇지 않을 경우 left에 middle +1
      if (rotated[left] <= target && target < rotated[middle]) {
        //부등호 잘보기!!! rotated[left] <= target 이꼴 포함해줘야함
        //위에서 rotated[middle]===target인 경우는 정답이니까 target < rotated[middle] 이렇게 해줌
        right = middle - 1;
      } else {
        left = middle + 1;
      }
      // 오른쪽 절반이 정렬되어 있는 상태
    } else {
      // 중간과 오른쪽 맨 끝 사이에 타겟이 있는 경우, 왼쪽 텅텅빈 곳은 쓸모가 없으므로 왼쪽 공간을 줄여주기 위해 left = middle + 1
      // 그렇지 않을 경우 right = middle -1;
      if (rotated[middle] < target && target <= rotated[right]) {
        //부등호 잘보기!!! target <= rotated[right] 이꼴 포함해줘야함
        //위에서 rotated[middle]===target인 경우는 정답이니까 rotated[middle] < target 이렇게 해줌
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};

//Q16 Quick sort
const quickSort = function (arr) {
  //탈출조건 설정
  if (arr.length <= 1) return arr;
  //피벗값 임의로 설정
  let pivot = arr[0];
  let left = [];
  let right = [];
  //i의 시작이 1이다
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }
  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);
  return [...leftSorted, pivot, ...rightSorted];
};

//Q17 Balanced brackets
const balancedBrackets = function (str) {
  //스택을 사용했다.
  let stack = [];
  let opener = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let closer = "}])";
  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      let check = stack.pop();
      let pair = opener[check];
      if (str[i] !== pair) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

//Q18
//이 방법은 좀 오래 걸림
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let cnt = 0,
    left = 0,
    right = 0;
  let target;
  while (cnt < k) {
    if (arr1[left] < arr2[right]) {
      target = arr1[left];
      left++;
    } else {
      target = arr2[right];
      right++;
    }
    cnt++;
  }
  return target;
};
//다른 풀이
// arr1과 arr2를 합쳤을 때 k번째 인덱스에 있는 숫자가 무엇인지를 찾는다.
// k가 4일때 left가 3인 경우 right은 1이다.
// 이진 탐색으로 k값을 반으로 나누고 나눈 값 만큼 인덱스를 이동해서 arr1과 arr2의 숫자를 비교하는 방식
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let leftIdx = 0,
    rightIdx = 0;

  while (k > 0) {
    // arr1과 arr2를 합쳤을 때 k번째 인덱스에 있는 숫자가 무엇인지를 찾는다.
    // k값을 반으로 나눠서 이진 탐색을 한다.
    let cnt = Math.ceil(k / 2);
    let leftStep = cnt,
      rightStep = cnt;

    // 엣지 케이스
    // leftIdx는 양 배열의 인덱스에 있는 값을 비교해서 건너뛸 숫자만큼을 나타낸다.
    // 이미 건너뛰기로 한 만큼과 배열의 길이가 같은데 cnt가 여전히 남아있을 경우에는 진행이 불가하다.
    // 이럴땐 남은 cnt를 넘겨서 반대편 배열에서 처리할 수 있도록 해준다.
    if (leftIdx === arr1.length) {
      rightIdx = rightIdx + k;
      break;
    }

    if (rightIdx === arr2.length) {
      leftIdx = leftIdx + k;
      break;
    }

    // 엣지 케이스
    // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, leftStep(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
    if (cnt > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
    if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      leftIdx = leftIdx + leftStep;
      // -1을 해주는 이유는
      // 처리가 끝나면 해당 배열에서 건너뛴 만큼을 k에서 빼준다.
      // 건너뛰었다는 의미는 숫자가 작아서 넘어간다는 말이다. k번째로 작은 수를 찾아야 하기 떄문.
      // arr1과 arr2의 진행되는 인덱스의 숫자를 비교해서 작은 쪽의 인덱스 값을 더해준다.
      // 두 배열의 현재 검사 요소 위치를 비교해서, 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
      k = k - leftStep;
    } else {
      rightIdx = rightIdx + rightStep;
      k = k - rightStep;
    }
  }
  // 마지막에 두 수 중에 큰 수를 출력
  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);
};

//Q19 Longest Prefix which is also Suffix
function LPS(str) {
  let resultStr = "";
  let half = parseInt(str.length / 2);
  for (let i = 0; i <= half; i++) {
    let prefix = str.slice(0, i);
    let suffix = str.slice(str.length - i);

    if (prefix === suffix) {
      resultStr = prefix;
    }
  }

  return resultStr.length;
}

/*
rightIdx가 str.length의 절반 이상이 될 때까지 rightIdx의 카운트를 계속해준다.

*/
const LPS = function (str) {
  // lps[i]는 0부터 i까지의 부분 문자열, 즉 str.slice(0, i + 1)에서 lps의 길이를 저장한다.
  const lps = Array(str.length);
  // lps[0]은 길이가 1인 문자열의 lps의 길이이므로 항상 0이다. (자기 자신 포함 금지)
  lps[0] = 0;
  let leftIdx = 0;
  let rightIdx = 1;
  // lps[i]를 1부터, 즉 문자열의 길이가 2일때부터 차례대로 구한다.
  while (rightIdx < str.length) {
    if (str[leftIdx] === str[rightIdx] && rightIdx >= str.length / 2) {
      // 가장 단순한 경우를 생각해보면, 쉽게 이해할 수 있다.
      // 1) 길이가 2 경우
      // 2) 길이가 3 이상인데 전부 같은 문자인 경우
      // 0부터 leftIdx까지 매칭이 되었으므로 매칭된 길이는 leftIdx + 1이다.
      leftIdx++;
      lps[rightIdx] = leftIdx;
      rightIdx++;
    } else {
      // 중간에 매칭이 되지 않은 경우, leftIdx를 조정한다.
      // 현재 lps[0]부터 lps[rightIdx - 1]까지 계산이 완료된 상태이다.
      // 처음부터 다시 prefix, suffix 매칭을 하는 것이 원칙이지만
      // 앞서 계산한 결과인 lps 배열을 통해 처음으로 되돌아갈 필요는 없다.

      // 예. aaabaaaa
      // 현재 leftIdx는 2, rigthIdx는 3, lps는 [0, 1, 2]인 상태라고 가정해보자.
      // leftIdx가 1일 때까지, 즉 현재 leftIdx 직전(leftIdx - 1)까지는 매칭이 되었다.
      if (leftIdx !== 0) {
        leftIdx = lps[leftIdx - 1];
        // Also, note that we do
        // not increment i here
      } else {
        // rightIdx가 1인 경우, 즉 첫 iteration일 경우
        // lps[rightIdx]가 0인 것은 명백하다. (예. ab)
        // leftIdx가 0이라는 것은 처음부터 prefix, suffix 매칭을 하는 경우이다.
        //
        // lps가 존재하지 않는 경우이다.
        lps[rightIdx] = 0;
        rightIdx++;
      }
    }
  }
  const res = lps[lps.length - 1];
  return res > str.length / 2 ? Math.floor(str.length / 2) : res;
};

//Q20 Merge Sort
//이 방법도 괜찮은데 조금 느리다. 상대적으로 빠른 방법 밑에
const merge = function (left, right) {
  // 정렬된 왼쪽과 오른쪽 배열을 받아서 하나로 합치는 순수한 함수
  // left, right already sorted
  const result = [];
  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }

  return [...result, ...left, ...right]; // 아래 세줄과 같은 역할을 하는 코드
  // if(left.length === 0) results.push(...right);
  // if(right.length === 0) results.push(...left);
  // return results;
};

const mergeSort = function (arr) {
  // ending condition: length === 1 인 배열이 들어올 때, 정렬이 끝난 것.
  if (arr.length === 1) return arr;

  // 2로 나누고 내림을 해야
  // length 가 2일 때도 안전하게 배열을 slice 할 수 있다.
  const midIdx = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx);

  // 재귀로 계속해서 반으로 나누면서 length 가 1이 될때까지 쪼개고,
  // 거꾸로 올라오면서 순수한 함수인 merge에 인자로 넣어서 다시 병합되어서 최종값을 리턴한다.
  return merge(mergeSort(left), mergeSort(right));
};

//Q20 Merge sort 조금 더 빠르게
const merge = function (left, right) {
  let merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  const size = left.length + right.length;

  for (let i = 0; i < size; i++) {
    //<= >= 부등호에 이꼴 붙여주는거 주의
    if (leftIdx >= left.length || left[leftIdx] >= right[rightIdx]) {
      //같거나 크다는 것은 이미 left에 숫자는 다 처리되어서 인덱스가 넘어갔다는 얘기
      //left가 끝났거나 || 현재 right의 숫자보다 left의 숫자가 같거나 클 경우
      merged.push(right[rightIdx]);
      //left가 끝난 경우이기 때문에 right을 처리해준다.
      rightIdx++;
      //right의 인덱스를 올려준다.
    } else if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) {
      // right이 끝났거나 || 현재 left의 숫자보다 right의 숫자가 같거나 클 경우
      merged.push(left[leftIdx]);
      // right이 끝난 경우이거나, 작은 수부터 정렬해야하니 left를 푸쉬
      leftIdx++;
      //left의 인덱스를 올려준다.
    }
  }

  return merged;
};

const mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  const middle = parseInt(arr.length / 2);
  //매 회차마다 반으로 나눠서 구역을 left right 두개로 나눈다.
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  const merged = merge(left, right);
  /*
  가장 첫 두 개의 array를 재귀로 들어가서 left right의 el이 하나씩 남을 때까지 들어가서
  정렬 후에 리턴 -> 쭉 나와서 가장 마지막에 합친 배열을 리턴
  */
  return merged;
};

//Q21
const inequalityNumber = function (signs) {
  const aux = (idx, signs, nums, digits, isVisited) => {
    if (idx === signs.length) {
      // 부등호 수를 만든 경우
      return parseInt(nums.join(""));
    }

    const sign = signs[idx];
    for (let i = 0; i < digits.length; i++) {
      // 숫자를 차례대로 검토한다.
      // max를 구할 때는 9부터, min을 구할 때는 0부터
      const right = digits[i];
      // 이전 단계에서 사용한 숫자인 경우 스킵
      if (isVisited[right]) continue;

      // 첫번째 숫자가 아닌 경우에는 조건이 중요하다.
      if (idx >= 0) {
        // 항상 바로 직전의 숫자와 비교하면 된다.
        const left = nums[nums.length - 1];
        if (sign === "<" && left >= right) continue;
        if (sign === ">" && left <= right) continue;
      }

      // 조건을 만족하거나 첫번째 숫자인 경우
      isVisited[right] = true;
      const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
      if (target !== undefined) {
        // 부등호 수를 이미 찾은 경우 탐색을 더 할 필요가 없다.
        return target;
      }
      // 탐색에 실패한 경우, 시도한 숫자의 상태(사용중)를 원래대로(사용안함) 바꿔놔야 한다.
      isVisited[right] = false;
    }

    return undefined;
  };

  signs = signs.split(" ");
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // arr.reverse()는 in-place 함수(데이터 직접 변경)이므로 min과 max의 순서는 중요하다.
  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  return max - min;
};

//Q22
const rotateMatrix = function (matrix, rotateNum = 1) {
  // rotateNum 이 0일 수 있으므로 아래와 같은 초기화는 지양해야 함
  // rotateNum = rotateNum || 1
  const N = matrix.length;
  // 빈 배열을 입력받을 수 있다.
  const M = matrix[0] && matrix[0].length;

  rotateNum = rotateNum % 4;
  // 회전하지 않는다.
  if (rotateNum === 0) return matrix;

  const rotated = [];
  // 홀수번 회전 시 M x N, 짝수번 회전 시 N x M
  const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < RC[0]; row++) {
    rotated[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      if (rotateNum === 1) rotated[row][col] = matrix[N - col - 1][row];
      else if (rotateNum === 2)
        rotated[row][col] = matrix[N - row - 1][M - col - 1];
      else rotated[row][col] = matrix[col][M - row - 1];
    }
  }

  return rotated;
};

//Q23
const spiralTraversal = function (matrix) {
  // 각 방향마다 row와 col의 변화를 저장
  const RIGHT = [0, 1];
  const DOWN = [1, 0];
  const LEFT = [0, -1];
  const UP = [-1, 0];
  // 각 방향을 위한 lookup table
  const MOVES = [RIGHT, DOWN, LEFT, UP];
  const M = matrix.length;
  const N = matrix[0].length;
  const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;

  let cnt = 0;
  let row = 0,
    col = -1;
  let direction = 0;
  let result = "";
  while (cnt < M * N) {
    const move = MOVES[direction];
    const [rd, cd] = move;

    row = row + rd;
    col = col + cd;
    while (isValid(row, col) && matrix[row][col] !== false) {
      result = result + matrix[row][col];
      // 한 요소를 두 번 접근하지 않게 하기 위해서, 접근된 요소를 false로 변경한다.
      matrix[row][col] = false;
      row = row + rd;
      col = col + cd;
      cnt++;
    }
    // row, col 이 행렬의 범위를 벗어났기 때문에,
    // 진행된 방향의 반대로 한 칸 이동한다.
    row = row - rd;
    col = col - cd;

    // 각 방향이 순환되기 때문에 모듈러 연산을 사용한다.
    direction = (direction + 1) % 4;
  }
  return result;
};

//Q24
function getMax(arr) {
  return arr.reduce((max, item) => {
    if (item > max) return item;
    return max;
  }, 0);
}

function countingSort(arr, radix) {
  const N = arr.length;
  const output = Array(N).fill(0);
  const count = Array(10).fill(0);

  // 현재 자리수를 기준으로 0~9의 개수를 센다.
  arr.forEach((item) => {
    const idx = Math.floor(item / radix) % 10;
    count[idx]++;
  });

  // count[i]가 i까지의 누적 개수가 되도록 만든다.
  count.reduce((totalNum, num, idx) => {
    count[idx] = totalNum + num;
    return totalNum + num;
  });

  // 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회한다.
  //  1. 가장 큰 값을 먼저 본다.
  //  2. 가장 큰 값을 가장 마지막에 놓는다.
  let i = N - 1;
  while (i >= 0) {
    const idx = Math.floor(arr[i] / radix) % 10;
    // count[idx]: 현재 radix의 idx까지 누적 개수
    // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
    output[count[idx] - 1] = arr[i];
    count[idx] -= 1;
    i--;
  }

  return output;
}

// naive solution
// 양의 정수만 정렬 가능
// function radixSort(arr) {
//   const max = getMax(arr);
//   let radix = 1;
//   while (parseInt(max / radix) > 0) {
//     arr = countingSort(arr, radix);
//     radix *= 10;
//   }
//   return arr;
// }

// 음의 정수를 포함한 기수 정렬
// 1. 주어진 배열을 음수 부분과 양수 부분으로 나눈다.
// 2. 음수는 절대값을 기준으로, 즉 양수로 변환하여 기수 정렬한다.
// 3. 양수를 정렬한다.
// 4. 정렬된 음수 부분을 다시 음수로 바꾸고 순서를 뒤짚는다.
// 5. 음수 부분과 양수 부분을 붙인다.
function radixSort(arr) {
  let left = [];
  let right = [];
  arr.forEach((item) => {
    if (item >= 0) right.push(item);
    else left.push(item * -1);
  });

  let max = getMax(left);
  let radix = 1;
  while (parseInt(max / radix) > 0) {
    left = countingSort(left, radix);
    radix *= 10;
  }

  max = getMax(right);
  radix = 1;
  while (parseInt(max / radix) > 0) {
    right = countingSort(right, radix);
    radix *= 10;
  }

  return left
    .reverse()
    .map((item) => item * -1)
    .concat(right);
}

//Q25
const robotPath = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    // 현재 위치
    const [row, col] = candi;

    // 배열의 범위를 벗어난 경우
    if (row < 0 || row >= M || col < 0 || col >= N) return;

    if (room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    } else {
      // 장애물(1)이거나 이미 최소 시간(1)으로 통과가 가능한 경우
      return;
    }

    // dfs로 4가지 방향에 대해 탐색을 한다.
    // 완전탐색을 해야하므로 bfs나 dfs가 큰 차이가 없다.
    // bfs의 경우 목적지에 도착하는 경우 탐색을 중단해도 되므로,
    // 약간 더 효율적이다.
    aux(M, N, [row + 1, col], step + 1); // 상
    aux(M, N, [row - 1, col], step + 1); // 하
    aux(M, N, [row, col - 1], step + 1); // 좌
    aux(M, N, [row, col + 1], step + 1); // 우
  };

  // 로봇이 서 있는 위치를 1로 초기화하면 (다시 방문하지 않기 위해서),
  // 바로 옆 통로는 2가 된다.
  // 계산이 완료된 후에 최종값에 1을 빼주면 된다.
  aux(room.length, room[0].length, src, 1);

  const [r, c] = dst;
  return room[r][c] - 1;
};

//Q26
// dynamic programming: O(N)
const LSCS = function (arr) {
  let subArrSum = 0; // 연속 배열의 합
  let max = Number.MIN_SAFE_INTEGER; // 정답의 후보를 저장
  for (let i = 0; i < arr.length; i++) {
    subArrSum = subArrSum + arr[i];
    if (subArrSum > max) max = subArrSum;

    // 연속된 구간의 합이 음수인 경우,
    // 해당 부분은 버리고 다시 시작해도 된다.
    if (subArrSum < 0) {
      subArrSum = 0;
    }
  }

  return max;
};

//Q27
const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // bfs 구현을 위해 큐를 선언한다.
  // enQueue, deQueue시마다 인덱싱을 다시 하지 않기 위해
  // 순환 큐(circular queue)로 구현한다.
  // queue의 가능한 최대 크기만큼 배열을 선언한다.
  // 문제의 특성에 따라 큐에는 좌표 평면의 한 점이 삽입되고, 한번 삽입된 요소는 두 번 다시 삽입되지 않는다.
  const R = village.length;
  const C = village[0].length;
  const matrix = createMatrix(village);
  const MOVES = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, 1], // RIGHT
    [0, -1], // LEFT
  ];
  const MAX_SIZE = R * C; // 가능한 모든 좌표의 크기만큼 큐가 선언되었으므로, 사실 순환큐일 필요는 없다.
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
  const queue = Array(MAX_SIZE);
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    // 실행 중에 큐가 가득차지는 않기 때문에 별도의 조건문을 작성할 필요가 없다.
    queue[rear] = pos;
    // 모듈러스 연산을 할 필요도 사실 없다.
    rear = (rear + 1) % MAX_SIZE;
  };
  const deQueue = (queue) => {
    const pos = queue[front];
    // 모듈러스 연산을 할 필요도 사실 없다.
    front = (front + 1) % MAX_SIZE;
    return pos;
  };

  let cnt = 0;
  enQueue(queue, [row, col]);
  // 소문이 퍼지는 데 걸리는 시간을 저장한다.
  matrix[row][col] = 0;
  while (isEmpty(queue) === false) {
    // 큐의 가장 앞 자리의 좌표를 얻는다.
    const [row, col] = deQueue(queue);
    cnt = matrix[row][col];

    // 현재 지점을 기준으로 네 방향을 검토한다.
    MOVES.forEach((move) => {
      const [rDiff, cDiff] = move;
      const nextRow = row + rDiff;
      const nextCol = col + cDiff;
      if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === "1") {
        enQueue(queue, [nextRow, nextCol]);
        matrix[nextRow][nextCol] = matrix[row][col] + 1;
      }
    });
  }
  return cnt;
};

//Q28
const robotPath2 = function (room, src, sDir, dst, dDir) {
  // 가로와 세로의 길이
  const R = room.length;
  const C = room[0].length;
  // 4가지 방향: 위(1), 오른쪽(2), 아래(3), 왼쪽(4)
  // 차례대로 [방향, 상하이동, 좌우이동]
  const MOVES = [
    [1, -1, 0], // UP
    [2, 0, 1], // RIGHT
    [3, 1, 0], // DOWN
    [4, 0, -1], // LEFT
  ];

  // 좌표가 유효한 좌표인지 확인하는 함수
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;

  // 각 위치별 최소의 동작으로 도달 가능한 경우의 방향을 저장
  const directions = [];
  // 각 위치별 최소 동작의 수를 저장. 편의상 거리(dist)로 표현
  const dist = [];
  for (let row = 0; row < R; row++) {
    directions.push(Array(C).fill(0));
    dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
  }

  // bfs 구현을 위해 큐를 선언한다.
  const queue = Array(R * C);
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    queue[rear] = pos;
    rear++;
  };
  const deQueue = (queue) => {
    return queue[front++];
  };

  // 출발 지점의 좌표
  const [sRow, sCol] = src;
  directions[sRow][sCol] = sDir;
  dist[sRow][sCol] = 0;

  // 목표 지점의 좌표
  const [dRow, dCol] = dst;

  enQueue(queue, [sRow, sCol]);
  while (isEmpty(queue) === false) {
    const [row, col] = deQueue(queue);
    const dir = directions[row][col];

    for (move of MOVES) {
      const [nDir, rDiff, cDiff] = move;
      // 이동할 좌표
      const nRow = row + rDiff;
      const nCol = col + cDiff;

      // 유효한 좌표가 아니거나
      // 해당 좌표가 장애물(1)인 경우 건너뛴다.
      if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;

      // 현재 위치의 방향과 목표 위치의 방향과의 차이
      const dDiff = Math.abs(nDir - dir);
      let candidate;
      if (dDiff === 0) {
        // 차이가 없는 경우
        // 출발 지점에서의 방향과 이동하려는 방향이 같은 경우
        // 직진만 하면 되지만 그러기 위해서는 1로 초기화 되어야 한다.
        candidate = dist[row][col] || 1;
      } else if (dDiff === 2) {
        // 2번 회전해야 하는 경우: 회전 2 + 직진 1
        candidate = dist[row][col] + 3;
      } else {
        // 1번만 회전해도 되는 경우: 회전 1 + 직진 1
        candidate = dist[row][col] + 2;
      }

      if (nRow === dRow && nCol === dCol) {
        // 다음에 도달하는 곳이 목표 지점인 경우
        // 목표 방향까지 고려해서 필요한 거리를 계산한다.
        const dDiff = Math.abs(nDir - dDir);
        if (dDiff === 0) {
          candidate = candidate;
        } else if (dDiff === 2) {
          candidate = candidate + 2;
        } else {
          candidate = candidate + 1;
        }
      }

      if (candidate < dist[nRow][nCol]) {
        // 유망한 좌표는 큐에 삽입한다.
        enQueue(queue, [nRow, nCol]);
        dist[nRow][nCol] = candidate;
        // 방향은 전부 같다.
        directions[nRow][nCol] = nDir;
      }
    }
  }

  return dist[dRow][dCol];
};

//Q29
function swap(idx1, idx2, arr) {
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
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  let curIdx = heap.length - 1;
  let pIdx = getParentIdx(curIdx);
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
    swap(curIdx, pIdx, heap);
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  return heap;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

//Q30
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  if (heap.length > 1) {
    let curIdx = heap.length - 1;
    let pIdx = getParentIdx(curIdx);
    while (pIdx >= 0 && heap[curIdx] < heap[pIdx]) {
      swap(curIdx, pIdx, heap);
      curIdx = pIdx;
      pIdx = getParentIdx(curIdx);
    }
  }
  return heap;
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  swap(0, heap.length - 1, heap);
  heap.pop();
  if (heap.length === 0) return [];

  let curIdx;
  let minIdx = 0;
  while (curIdx !== minIdx) {
    curIdx = minIdx;
    let left = curIdx * 2 + 1;
    let right = curIdx * 2 + 2;
    if (left < heap.length && heap[left] < heap[minIdx]) {
      minIdx = left;
    }

    if (right < heap.length && heap[right] < heap[minIdx]) {
      minIdx = right;
    }

    swap(curIdx, minIdx, heap);
  }

  return heap;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  const sorted = [];
  while (minHeap.length > 0) {
    sorted.push(minHeap[0]);
    minHeap = removeRoot(minHeap);
  }
  return sorted;
};

//Q31
// O(N)
const rangeMinimum = function (arr, ranges) {
  return ranges.map((range) => {
    const [start, end] = range;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = start; i <= end; i++) {
      if (arr[i] < min) min = arr[i];
    }
    return min;
  });
};

// segment tree: O(logN) (search only)
const rangeMinimum = function (arr, ranges) {
  // ts: tree start. te: tree end
  // arr의 ts부터 te까지를 tree로 만든다.
  const createMinTree = (arr, ts, te) => {
    // base case
    if (ts === te) {
      return { value: arr[ts] };
    }

    // recursive case
    // 현재 범위를 절반을 기준으로 왼쪽과 오른쪽으로 나눈다
    const mid = parseInt((ts + te) / 2);
    const left = createMinTree(arr, ts, mid);
    const right = createMinTree(arr, mid + 1, te);

    return {
      value: Math.min(left.value, right.value),
      left,
      right,
    };
  };
  const tree = createMinTree(arr, 0, arr.length - 1);

  // rs: range start, re: reange end
  const findMin = (ts, te, rs, re, tree) => {
    // 현재 tree와 구간이 정확히 일치하거나
    // 구간이 tree를 포함할 경우
    if (rs <= ts && te <= re) {
      return tree.value;
    }

    // 현재 tree에 주어진 구간이 겹치지 않는 경우
    if (te < rs || re < ts) {
      return Number.MAX_SAFE_INTEGER;
    }

    // 겹치는 부분이 존재하는 경우
    const mid = parseInt((ts + te) / 2);
    return Math.min(
      findMin(ts, mid, rs, re, tree.left), //
      findMin(mid + 1, te, rs, re, tree.right)
    );
  };

  const mins = ranges.map((range) => {
    const [start, end] = range;
    return findMin(0, arr.length - 1, start, end, tree);
  });
  return mins;
};

//segment tree: O(logN) (search only)
const rangeMinimum = function (arr, ranges) {
  const createMinTree = (arr, ts, te, tree, idx) => {
    if (ts === te) {
      tree[idx] = arr[ts];
      return arr[ts];
    }

    const mid = Math.floor((ts + te) / 2);
    tree[idx] = Math.min(
      createMinTree(arr, ts, mid, tree, idx * 2 + 1), //
      createMinTree(arr, mid + 1, te, tree, idx * 2 + 2)
    );

    return tree[idx];
  };

  // 트리 전체의 높이(루트 노트에서 가장 깊은 리프 노드까지의 거리)를 구하고
  // 전체 배열의 크기를 구한다.
  const height = Math.ceil(Math.log2(arr.length));
  const size = Math.pow(2, height + 1) - 1;
  const tree = Array(size).fill(null);
  createMinTree(arr, 0, arr.length - 1, tree, 0);

  const findMin = (ts, te, rs, re, idx) => {
    if (rs <= ts && te <= re) {
      return tree[idx];
    }

    if (te < rs || re < ts) {
      return Number.MAX_SAFE_INTEGER;
    }

    const mid = parseInt((ts + te) / 2);
    return Math.min(
      findMin(ts, mid, rs, re, 2 * idx + 1),
      findMin(mid + 1, te, rs, re, 2 * idx + 2)
    );
  };

  const mins = ranges.map((range) => {
    const [start, end] = range;
    return findMin(0, arr.length - 1, start, end, 0);
  });
  return mins;
};

//Q32
//O(N^2)
const largestRectangularArea = function (histogram) {
  let largest = 0;
  // 모든 연속된 부분 히스토그램을 고려한다
  // 밑변의 길이를 부분 히스토그램의 길이로 고정하면 높이는 가장 낮은 막대의 높이가 됌.
  for (let left = 0; left < histogram.length; left++) {
    // 길이가 1인 막대로 만들 수 있는 직사각형의 넓이는 막대의 높이와 같음
    let min = histogram[left];
    for (let right = left; right < histogram.length; right++) {
      // left부터 right까지의 히스토그램의 막대 중 가장 낮은 막대의 높이를 구한다
      if (histogram[right] < min) min = histogram[right];
      // 해당 구간(left ~ right)의 막대를 전부 포함해서 만들 수 있는 직사각형의 넓이를 구한다
      let area = min * (right - left + 1);
      // 매번 구한 면적을 기존의 면적과 비교해 갱신
      if (area > largest) largest = area;
    }
  }
  return largest;
};

//Q32
// divide and conquer: O(NlogN)
const largestRectangularArea = function (histogram) {
  const createMinIdxTree = (arr, ts, te) => {
    // 가장 작은 값의 인덱스를 구하기 위한 구간 트리
    if (ts === te) return { idx: ts, val: arr[ts] };

    const mid = parseInt((ts + te) / 2);
    const left = createMinIdxTree(arr, ts, mid);
    const right = createMinIdxTree(arr, mid + 1, te);

    return {
      val: Math.min(left.val, right.val),
      idx: left.val < right.val ? left.idx : right.idx,
      left,
      right,
    };
  };
  const tree = createMinIdxTree(histogram, 0, histogram.length - 1);

  const getMinIdx = (ts, te, rs, re, tree) => {
    if (rs <= ts && te <= re) return tree.idx;
    if (te < rs || re < ts) return rs;

    const mid = parseInt((ts + te) / 2);
    const left = getMinIdx(ts, mid, rs, re, tree.left);
    const right = getMinIdx(mid + 1, te, rs, re, tree.right);
    return histogram[left] < histogram[right] ? left : right;
  };

  const getRangeArea = (start, end) => {
    if (start > end) return 0;
    // 현재 구간에서 가장 작은 막대를 찾고
    // 가장 작은 막대이므로 구간의 길이 * 높이만큼의 직사각형을 만들수있게됨.이게 첫번째 후보
    const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);

    // 가장 작은 막대를 기준으로 왼쪽 오른쪽 부분에 존재하는 모든 막대의 높이가 더 큼
    // 재귀적으로 왼쪽 부분과 오른쪽 부분을 나눠서 들어가기
    // 즉 해당 구간에서 가장 작은 막대를 제외해서 만들 수 있는 가장 큰 직사각형의 넓이를 구하기
    return Math.max(
      (end - start + 1) * histogram[minIdx], // 첫번째 후보
      getRangeArea(start, minIdx - 1),
      getRangeArea(minIdx + 1, end)
    );
  };

  return getRangeArea(0, histogram.length - 1);
};

//Q33
//O(2^N) 기본 풀이고 더 개선해야함
//배열의 각 요소에 대해서 선택, 무시의 2가지 선택이 가능
const LIS = function (arr) {
  // 현재 검토할 차례인 배열의 '인덱스'와
  // 이전에 선택된 요소의 '값'을 인자로 전달한다.
  const pickOrNot = (idx, before) => {
    // base case
    // 가장 짧은 LIS의 길이는 1이다. 모든 요소는 그 자체로 길이 1인 부분 서열이다.
    if (idx === arr.length) return 1;

    // recursive case
    // (초기값인 Number.MAX_SAFE_INTEGER를 포함해) 이전에 선택된 요소와 비교를 한다.
    const adder = arr[idx] > before ? 1 : 0;
    return Math.max(
      // 1) 현재 요소를 선택한다.
      //  1-1) adder === 1: 현재 요소를 이전에 선택된 요소 뒤에 이어지는 요소로 생각해 LIS의 길이에 1을 더한다.
      //  1-2) adder === 0: 현재 요소를 이어지는 요소로 생각할 수 없는 경우. 이전 요소를 건너뛰고 LIS의 처음 또는 중간 요소로 현재 요소를 선택한다.
      adder + pickOrNot(idx + 1, arr[idx]), // concat or restart
      // 2) 현재 요소를 무시한다.
      pickOrNot(idx + 1, before) // ignore
    );
  };
  // 첫 번째 요소의 이전 요소는 없기 때문에 매우 큰 값을 이전 값으로 설정한다.
  // 첫 번째 요소부터 시작하는 LIS를 검사하는 효과를 갖는다.
  return pickOrNot(0, Number.MAX_SAFE_INTEGER);
};

//Q33
//dynamic programming with memoization O(N^2)
const LIS = function (arr) {
  // memo[i]는 i부터 시작하는 LIS의 길이를 저장
  const memo = Array(arr.length).fill(-1);
  // 마지막 요소부터 시작하는 LIS는 1이 유일하다.
  memo[memo.length - 1] = 1;
  const calculateLIS = (idx) => {
    if (memo[idx] !== -1) return memo[idx];

    let max = 1;
    for (let i = idx + 1; i < arr.length; i++) {
      const len = calculateLIS(i);
      // idx와 i가 연결되지 않을 수도 있다.
      if (arr[idx] < arr[i]) {
        // i부터 시작하는 LIS를 연결할 수 있는 경우
        max = Math.max(max, len + 1);
      }
      // i부터 시작하는 LIS가 더 길 수도 있다.
      // idx부터 시작하는 LIS를 구해야 하므로, 무시한다.
    }
    memo[idx] = max;
    return memo[idx];
  };
  calculateLIS(0);
  // 가장 긴 길이를 구한다.
  return Math.max(...memo);
};

//Q33
// dynamic programming with tabulation: O(N^2)
const LIS = function (arr) {
  const N = arr.length;
  // lis[i]는 i에서 끝나는 LIS의 길이를 저장
  // 최소한 각 요소 하나로 LIS를 만들 수 있으므로 1로 초기화한다.
  const lis = Array(N).fill(1);
  for (let i = 1; i < N; i++) {
    // i에서 끝나는 LIS의 길이
    for (let j = 0; j < i; j++) {
      // i 이전의 인덱스만 검사하면 된다.
      // i는 1부터 시작하므로, 짧은 길이부터 검사한다. (bottom-up 방식)
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }
  return Math.max(...lis);
};

//Q34
// 시간복잡도 O(2^N)
// 두 문자열의 길이(m, n)가 같다고 가정할 경우에 한함
// 최악의 경우는 일치하는 문자가 전혀 없을 경우이고 이때는 한쪽 문자열의 끝까지 비교해야 하므로 2^n 만큼의 시간이 걸린다.
const LCS = function (str1, str2) {
  // str1.slice 또는 str1.substring은 O(N)만큼의 오버헤드가 추가된다.
  // 비교는 인덱스만 알아도 충분하다.
  // left: str1의 인덱스, right: str2의 인덱스, len: 현재까지 만든 LCS의 길이
  const compareOneByOne = (left, right) => {
    // base case
    // 더 이상 비교가 불가능한 경우
    if (left === str1.length || right === str2.length) return 0;

    // 일치하는 문자가 있는 경우
    // 인덱스를 공통으로 이동하고, 길이를 1개 추가한다.
    if (str1[left] === str2[right]) {
      return 1 + compareOneByOne(left + 1, right + 1);
    }

    // 일치하는 문자가 없는 경우
    // 길이는 그대로고, str1과 str2 중에서 어느 쪽의 문자를 포기할지 정해야한다.
    // 양쪽다 가능성이 있으므로 양쪽을 모두 탐색하고 그 중 큰 값을 선택한다.
    return Math.max(
      compareOneByOne(left + 1, right), //
      compareOneByOne(left, right + 1)
    );
  };

  return compareOneByOne(0, 0);
};

//Q34
// dynamic programming으로 풀 경우 시간 복잡도는 O(M * N)
// memoization을 활용해 중복 계산되는 문제를 제거하기
// LCS('ABCD', 'ACEB')의 경우 재귀 호출을 풀어보면
// => 1) LCS('BCD', 'CEB')
//  => 1-1) LCS('CD', 'CEB'), 1-2) LCS('BCD', 'EB')
//    => 1-1-1) LCS('D', 'CEB'), 1-1-2) LCS('CD', 'EB')
//    => 1-2-1) LCS('CD', 'EB'), 1-2-2) LCS('BCD', 'B')
// 더 볼 필요 없이 1-1-2)와 1-2-1)은 같은 문제라고 볼수있음.
const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  const memo = [];
  // 중복 계산을 방지하기 위해 left, right
  for (let i = 0; i < M + 1; i++) memo.push(Array(N + 1).fill(-1));

  const compareOneByOne = (left, right, len) => {
    if (memo[left][right] !== -1) return memo[left][right];

    if (left === str1.length || right === str2.length) return 0;

    if (str1[left] === str2[right]) {
      memo[left][right] = 1 + compareOneByOne(left + 1, right + 1, len + 1);
      return memo[left][right];
    }

    memo[left][right] = Math.max(
      compareOneByOne(left + 1, right, len), //
      compareOneByOne(left, right + 1, len)
    );
    return memo[left][right];
  };

  return compareOneByOne(0, 0, 0);
};

//Q34
// dynamic programming으로 O(M * N)
// tabulation(테이블에 정리)을 활용해 bottom-up 방식으로 해결
const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  // table[i][j]는 str1.slice(0, i)와 str2.slice(0, j)의 LCS를 저장
  // str1.slice(0, i)는 0부터 i 바로 직전까지를 의미함 (i까지가 아님에 주의하기)
  const table = [];
  for (let i = 0; i < M + 1; i++) table.push(Array(N + 1).fill(-1));

  for (let i = 0; i <= M; i++) {
    for (let j = 0; j <= N; j++) {
      if (i === 0 || j === 0) {
        // i 또는 j가 0인 경우, 한쪽 문자열이 길이가 0이라는 의미이다.
        // LCS가 존재할 수 없으므로, 0을 저장한다.
        table[i][j] = 0;
      } else if (str1[i - 1] === str2[j - 1]) {
        // 두 문자가 같은 경우
        // 양쪽 문자열의 인덱스가 한 개씩 이전인 상태에서 만들 수 있는 LCS의 길이보다 1만큼 더 길다.
        table[i][j] = 1 + table[i - 1][j - 1];
      } else {
        // 두 문자가 같지 않은 경우
        // 둘 중 한쪽을 포기하는 경우에 만들 수 있는 LCS의 길이를 따른다.
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
      }
    }
  }
  return table[M][N];
};

//Q35
const uglyNumbers = function (n) {
  const isUgly = (num) => {
    num = decompose(num, 2);
    num = decompose(num, 3);
    num = decompose(num, 5);
    return num === 1;
  };

  const decompose = (num, factor) => {
    while (num % factor === 0) num = num / factor;
    return num;
  };

  let num = 0;
  let cnt = 0;
  while (n > cnt) {
    num++;
    if (isUgly(num)) cnt++;
  }
  return num;
};

//Q35
// 시간복잡도 O(N)
const uglyNumbers = function (n) {
  // 매번 나눗셈 연산을 하는 것이 비효율적이므로
  // 이미 구한 수에서부터 구한다.

  const uglyNumbers = [1];
  let idx2 = 0,
    idx3 = 0,
    idx5 = 0;

  for (let i = 0; i < n; i++) {
    // 1. 가장 작은 수인 1에 2, 3, 5를 곱한 수 중에 가장 작은 수를 구한다.
    // 2. 2가 선택됨.
    // 3. 2는 가장 작은 수 1에 곱해졌으므로
    //   3.1 이제 2는 그 다음 작은 수인 2에 곱해지고
    //   3.2 3, 5는 여전히 가장 작은 수에 곱해진다.
    // 4. 3에서 가장 작은 수는 3. 3은 이제 다음으로 작은 수인 2에 곱혀진다.
    // 5. 반복
    const nextMultipleOf2 = uglyNumbers[idx2] * 2;
    const nextMultipleOf3 = uglyNumbers[idx3] * 3;
    const nextMultipleOf5 = uglyNumbers[idx5] * 5;
    const nextUglyNum = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    uglyNumbers.push(nextUglyNum);

    // 같은 수를 중복해서 저장할 수 있으므로,
    // 각각 별도의 조건문으로 작성해야 한다.
    //  2 * 3 = 6
    //  3 * 2 = 6
    if (nextUglyNum === nextMultipleOf2) idx2++;
    if (nextUglyNum === nextMultipleOf3) idx3++;
    if (nextUglyNum === nextMultipleOf5) idx5++;
  }
  return uglyNumbers[n - 1];
};

//Q37
/*O(2^M * N)) 좀 오래걸리지만 기본 풀이
6을 만드는 방법 중 [1, 5]와 [5, 1]을 중복해서 세면 안 되기 때문에.
동전을 순서대로 사용한다.*/
const coinChange = function (total, coins) {
  const makeChageFrom = (left, idx) => {
    if (left === 0) return 1;

    let cnt = 0;
    // 지금 사용하고 있는 동전부터만 고려한다.
    for (let i = idx; i < coins.length; i++) {
      if (left - coins[i] >= 0) {
        cnt = cnt + makeChageFrom(left - coins[i], i);
      }
    }

    return cnt;
  };
  // 0번째 동전부터 사용한다.
  return makeChageFrom(total, 0);
};

//Q37
//dynamic programming with memoization: O(M * N)
const coinChange = function (total, coins) {
  // memo[i][j]는 i만큼의 금액을 coins[j]부터 ~ coins[coins.length - 1]까지 사용하여 만들 수 있는 경우의 수를 저장
  const memo = [];
  for (let i = 0; i < total + 1; i++) memo.push(Array(coins.length).fill(-1));
  const makeChageFrom = (left, idx) => {
    // 0을 만드는 방법은 1가지이다. 아니면 목표 금액을 만들었다고 생각해도 된다.
    if (left === 0) return 1;
    // 금액이 마이너스가 되는 경우는 불가능하므로 0을 리턴
    if (left < 0) return 0;
    // 동전을 전부 검토해서, 남아있는 새로운 동전은 없는데 목표 금액을 만들지 못한 경우 (실패)
    if (idx >= coins.length && left > 0) return 0;
    // 이미 해결한 적이 있는 문제는 다시 풀지 않는다.
    if (memo[left][idx] !== -1) return memo[left][idx];

    // left만큼의 금액을 coins[idx]부터 사용하여 만들 수 있는 경우의 수는
    //  1) coins[idx]는 그만 사용하고, 다음 동전으로 넘어가거나 (목표 금액은 그대로이고, idx가 증가한다.)
    //  2)) coins[idx]를 한번 더 사용한다. coins[idx]를 또 사용할 수 있으므로, idx는 그대로이고, 목표 금액은 coins[i]만큼 줄어든다.
    memo[left][idx] =
      makeChageFrom(left, idx + 1) + makeChageFrom(left - coins[idx], idx);
    return memo[left][idx];
  };

  return makeChageFrom(total, 0);
};

//Q37
//dynamic programming with tabulation: O(M * N)
const coinChange = function (total, coins) {
  // table[i][j]는 coins[j]까지 사용해서 i만큼의 금액을 만들 수 있는 경우의 수를 저장
  const table = [];
  for (let i = 0; i < total + 1; i++) table.push(Array(coins.length).fill(0));
  // 모든 경우에 0을 만들 수 있는 경우는 1 (base case)
  for (let i = 0; i < coins.length; i++) table[0][i] = 1;

  for (let amount = 1; amount <= total; amount++) {
    // 작은 금액부터 차례대로 경우의 수를 구한다. (bottom-up)
    for (let idx = 0; idx < coins.length; idx++) {
      let coinIncluded = 0;
      if (amount - coins[idx] >= 0) {
        coinIncluded = table[amount - coins[idx]][idx];
      }

      let coinExcluded = 0;
      if (idx >= 1) {
        // 동전을 순서대로 검사하고 있기 때문에, 바로 직전의 경우만 고려하면 된다.
        // 단, 0번째 동전은 직전이 없으므로 제외한다.
        coinExcluded = table[amount][idx - 1];
      }

      table[amount][idx] = coinIncluded + coinExcluded;
    }
  }

  return table[total][coins.length - 1];
};
