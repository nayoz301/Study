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

//Q4
//내 풀이
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
      // 타겟이 맨 왼쪽 숫자보다 크고 중간 숫자보다 작을 경우
      // right에 middle -1
      // 그렇지 않을 경우 left에 middle +1
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
      // 오른쪽 절반이 정렬되어 있는 상태
    } else {
      // 타겟이 가운데 숫자보단 크고 맨 마지막 숫자보단 작을 경우
      // left = middle + 1
      // 그렇지 않을 경우 right = middle -1;
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};
