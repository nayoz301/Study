//Q1
function ABCheck(str) {
  if (str === undefined) {
    return false;
  }
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" && str[i + 4] === "b") {
      return true;
    }
  }
  return false;
}

//Q2
//1월 1일은 월요일
function day(str) {
  const a = Number(str.split(" ")[0]);
  const b = Number(str.split(" ")[1]);
  const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const selected = months.slice(0, a);
  let days = selected.reduce((acc, cur) => acc + cur);
  days = days + b;
  days = days % 7;
  return day[days];
}

//Q3
let isIsogram = function (str) {
  str = str.toLowerCase().split("").sort();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }
  return true;
};

//레퍼런스
// function isIsogram(str) {
//   if(str.length === 0) {
//     return true;
//   }

//   let storage = {};
//   let strLowerCase = str.toLowerCase();

//   for(let i = 0; i < strLowerCase.length; i++) {
//     if(storage[strLowerCase[i]]) {
//       return false;
//     }
//     storage[strLowerCase[i]] = 1;
//   }

//   return true;
// }

//Week2 test1
function test1(romanNumeral) {
  // 기준이 되는 로마숫자에서 덧셈의 경우 오른쪽에 붙이기
  // 뺄셈의 경우 왼쪽에 붙이기
  // 큰수가 오른쪽에 있는 경우는 큰 수에서 왼쪽 수를 빼는 연산을 해야함
  // 큰수가 왼쪽에 있는 경우 큰 수에서 오른쪽 수를 더하는 연산을 해야함
  if (romanNumeral.length === 0) return 0;
  if (typeof romanNumeral !== "string") return null;

  //큰수가 앞에 오는지 맨 뒤에 오는지를 확인해야한다.
  let romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let n = 0; n < romanNumeral.length; n++) {
    let cur = romanNum[romanNumeral[n]];
    let next = romanNum[romanNumeral[n + 1]];
    if (next === undefined) next = 0;

    result += cur;

    if (cur < next) result -= cur * 2;
  }
  return result;
}

//Week2 test2
// function test2(str) {
//   // 반복문으로 쭉 돌면서 반복되는 글자와 반복되는 길이를 추려서 객체에 담아준다.
//   // 배열로 풀어도될 것같다.
//   // 반복문을 돌면서 전번과 같은 문자로 반복되는 경우 storage에 추가에서 'bbbb' 이런식으로 저장
//   // 더이상 반복되지 않는 경우 배열.push 로 추가.
//   // 선별 작업 후에 반복문 돌면서 length가 가장 긴 엘리먼트 찾아서
//   // findindex 해주고
//   // idx가 10으로 나온경우 [10, 10+반복글자.length-1] 을 리턴해준다.
//   if(str.length===0)
//   return [0,0]

function test2(str) {
  if (str.length === 0) return null;

  let storage = [];
  let repeated = "";
  if (str[0] === str[1]) repeated = str[0] + str[1];
  else {
    storage.push(str[0]);
    repeated = str[1];
  }
  for (let i = 2; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      repeated = repeated + str[i];
    } else {
      storage.push(repeated);
      repeated = str[i];
    }
  }
  storage.push(repeated);
  let maxLen = 0;
  let idx = 0;
  for (let i = 0; i < storage.length; i++) {
    if (storage[i].length > maxLen) {
      maxLen = storage[i].length;
      idx = i;
    }
  }
  let sum = 0;
  for (let j = 0; j < idx; j++) {
    sum = sum + storage[j].length;
  }

  return [sum, sum + maxLen - 1];
}

//Week2 test3
function test3(arr) {
  // 빈 배열일 경우 1을 리턴
  // 완벽한 배열일 경우 마지막 숫자+1을 리턴
  // 중간에 빠진 숫자를 찾아서 리턴하기

  // 숫자배열을 한번 오름차순으로 정렬시킨 후에
  // 0번 인덱스부터 차례대로 올라가면서 확인하기
  // 전 번 숫자를 카운트에 저장해서 1차이가 나는지 확인해주기
  // [1,2,3,5,6,7,8]
  // 시간복잡도 O(N)

  if (arr.length === 0) return 1;

  let prevNum = 0;
  sortedArr = arr.slice(0);
  sortedArr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] - 1 !== prevNum) {
      return sortedArr[i] - 1;
    }
    prevNum = sortedArr[i];
  }
  return arr[arr.length - 1] + 1;
}
