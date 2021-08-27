//Lesson4 MissingInteger
function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });

  let min = 1;

  for (let i in A) {
    if (A[i] > 0 && A[i] === min) {
      min++;
    }
  }

  return min;
}

//Lesson8 EquiLeader
function solution(A) {
  let result = 0;
  const frequencyOBJ = {};
  const half = parseInt(A.length / 2);

  let MostFrequentTimes = 0;
  let MostFrequentValue = 0;

  for (let i = 0; i < A.length; i++) {
    if (frequencyOBJ[A[i]] === undefined) {
      frequencyOBJ[A[i]] = [i];
    } else {
      frequencyOBJ[A[i]].push(i);
    }
    if (
      frequencyOBJ[A[i]].length > half &&
      frequencyOBJ[A[i]].length > MostFrequentTimes
    ) {
      MostFrequentTimes = frequencyOBJ[A[i]].length;
      MostFrequentValue = A[i];
    }
  }

  let numOfLeaderInLeft = 0;
  for (let j = 0; j < A.length; j++) {
    const leftLen = j + 1;
    if (A[j] === MostFrequentValue) numOfLeaderInLeft++;
    const rightLen = A.length - leftLen;
    const numOfLeaderInRight = MostFrequentTimes - numOfLeaderInLeft;

    if (
      numOfLeaderInLeft > parseInt(leftLen / 2) &&
      numOfLeaderInRight > parseInt(rightLen / 2)
    ) {
      result++;
    }
  }

  return result;
}

//다른 분의 풀이
function solution(A) {
  let right_hash = {};

  for (let i = 0; i < A.length; i++) {
    right_hash[A[i]] = (right_hash[A[i]] || 0) + 1;
  }

  let left_hash = {};
  let equiLeader = 0;
  let leftLen = 0;
  let leftLeader = "";
  let leftLeaderCount = 0;
  let rightLen = A.length;

  for (let i = 0; i < A.length; i++) {
    // 왼쪽으로 하나 옮기기
    rightLen--;
    right_hash[A[i]]--;

    left_hash[A[i]] = (left_hash[A[i]] || 0) + 1;
    leftLen++;

    // 왼쪽 leader
    if (leftLeaderCount < left_hash[A[i]]) {
      leftLeader = A[i];
      leftLeaderCount = left_hash[A[i]];
    }

    // equi leader 확인
    if (
      rightLen / 2 < right_hash[leftLeader] &&
      leftLen / 2 < leftLeaderCount
    ) {
      equiLeader++;
    }
  }

  return equiLeader;
}

//Lesson9
function solution(A) {
  let max = 0;
  const sum = A.reduce((prevSum, currentNum) => {
    let nextSum = prevSum + currentNum;
    if (nextSum < 0) {
      return 0;
    }
    if (nextSum < max) {
      return nextSum;
    }
    return (max = nextSum);
  }, 0);
  return max === 0 ? Math.max(...A) : max;
}

//다른 풀이
function solution(A) {
  if (A.length === 1) return A[0];

  let localMaxSum = A[0];
  let globalMaxSum = A[0];

  for (let i = 1; i < A.length; i++) {
    localMaxSum = Math.max(A[i], localMaxSum + A[i]);
    globalMaxSum = Math.max(globalMaxSum, localMaxSum);
  }

  return globalMaxSum;
}
