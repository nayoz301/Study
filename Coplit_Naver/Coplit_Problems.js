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

//Q4
function runLength(str) {
  //전이랑 같은 글자면 숫자+1에 알파벳
  //전이랑 다른 글자면 그 다음에 더해지게끔?
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    //전 글자랑 다른 경우
    if (str[i] !== str[i - 1]) {
      count = 1;
      result = result + count + str[i];
    } else {
      //전 글자랑 똑같은 경우
      count++;
      result = result.slice(0, result.length - 2) + count + str[i];
    }
  }
  return result;
}

//Q5
function findMissingNumber(str) {
  str = str.split(" ").sort((a, b) => a - b);
  for (let i = 1; i <= str.length; i++) {
    if (i !== Number(str[i - 1])) {
      return i;
    }
  }
}

//Q6
const binarySearch = function (arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let middle = parseInt((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return null;
};

//Q7
//더 공부해야할 듯

//Q8
const balancedParens = function (str) {
  const stack = [];
  const opener = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const closer = "}])";

  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== str[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

//Q9

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

//Q31
function encodingVideo(encodings, speeds) {
  //문제 이해를 못해서 오래걸림
  //인코딩 배열에 숫자는 현재 얼마나 인코딩 되었는지 퍼센트를 나타내는 것임
  //스피드는 한 시간에 몇 퍼센트가 진행되는 지를 나타내는 것임
  //앞에서부터 차례로 업로드 되지만 인코딩은 동시에 되므로
  //완료가 된 경우 맨 앞의 파일이 업로드될 때 같이 업로드 된다.

  let time = [];
  for (let i = 0; i < speeds.length; i++) {
    time.push((100 - encodings[i]) / speeds[i]);
  }
  let max = time.shift();
  let count = 1;
  let result = [];
  while (time.length > 0) {
    let thisNum = time.shift();
    if (max >= thisNum) {
      count++;
    } else {
      result.push(count);
      count = 1;
      max = thisNum;
    }
  }
  result.push(count);
  return result;
}

//코드스테이츠 레퍼런스
function encodingVideo(encodings, speeds) {
  // 업로드 마다 몇 개의 비디오가 업로드 되는지 담아줄 배열 result
  let result = [];
  let hours = 1;
  // 업로드 되는 비디오의 수
  let count = 0;
  // 현재 비디오의 인코딩 진행률
  let encoding = 0;

  // 모든 비디오가 다 업로드 될때까지 반복합니다.
  while (encodings[0]) {
    encoding = encodings[0] + speeds[0] * hours;
    // 첫 번째 비디오의 인코딩 진행률이 100이상인 경우
    if (encoding >= 100) {
      // 업로드 완료된 비디오의 갯수를 증가 시켜줍니다.
      count++;
      // 업로드가 완료된 비디오는 큐에서 제거합니다.
      encodings.shift();
      // 업로드가 완료된 인코딩 속도는 큐에서 제거합니다.
      speeds.shift();
    }
    // 첫 번째 비디오의 인코딩 진행률이 100 미만일 경우
    else {
      // 업로드된 비디오가 있다면 result에 push 합니다.
      if (count > 0) {
        result.push(count);
      }
      // 업로드 시간이 증가됩니다.
      //(업로드는 한시간에 한번만 가능하기 때문입니다.)
      hours++;
      // 업로드 완료된 비디오의 개수 초기화
      //(업로드는 한시간에 한번만 가능하기 때문입니다.)
      count = 0;
    }
  }
  // 모든 비디오가 업로드가 되면, 카운트된 업로드 비디오의 개수를 push후 리턴합니다.
  result.push(count);

  return result;
}

//Q26
function queueParking(spaceOrder, arrivalOrder, departureOrder) {
  //주차장 꽉찼으면 특정 순서로 나간다.
  //기다리는 중에 차 더오면 큐로 도착한 순서대로 줄 선다
  //주차장이 자리나면 큐에 첫번째 차량이 주차한다.
  //차량 무게에 따른 주차공간의 특정 운임비율과 킬로그램을 곱한다.

  //주차장 비어있는 경우 spaceOrder 길이만큼 일단 계산하기
  let dollar = 0;
  for (let i = 0; i < spaceOrder.length; i++) {
    dollar += spaceOrder[i] * arrivalOrder[i];
  }
  //주차장이 다 찬 경우라서 departureOrder 순으로 나가서 비는 공간에 차가 들어가므로
  //빠지는 곳이 몇번째인지 보고 인덱스 값을 구해서 계산해줌
  for (let j = spaceOrder.length; j < arrivalOrder.length; j++) {
    let Nth = departureOrder.shift();
    dollar += arrivalOrder[j] * spaceOrder[Nth - 1];
  }
  return dollar;
}

//i) queue
function queueParking(spaceOrder, arrivalOrder, departureOrder) {
  let totalRevenue = 0;
  let count = 0;

  while (arrivalOrder.length > 0) {
    const head = arrivalOrder[0];

    //When the first car is parked, the parking spaces are all empty.
    //So cars should be parked in order according to the number of parking spaces.
    if (count < spaceOrder.length) {
      totalRevenue = totalRevenue + head * spaceOrder[count];
    } else {
      const departureIdx = count - spaceOrder.length;
      const parkIdx = departureOrder[departureIdx] - 1;
      totalRevenue = totalRevenue + head * spaceOrder[parkIdx];
    }
    arrivalOrder.shift();
    count++;
  }
  return totalRevenue;
}

/*
코드스테이츠 레퍼런스
//ii) recursive
function queueParking(spaceOrder, arrivalOrder, departureOrder){

  base case: arrivalOrder.length === 0, return 0;
  recursive case: arrivalOrder.length > 0
  
  let count = 0;
  let totalRevenue = 0;
  const aux = function(spaceOrder, arrivalOrder, departureOrder, count){
    if(arrivalOrder.length === 0) {
      return 0;
    }

    const head = arrivalOrder[0];
    if(count < spaceOrder.length){
      totalRevenue = head * spaceOrder[count];
      count++;
      return totalRevenue + aux(spaceOrder, arrivalOrder.slice(1), departureOrder, count);
    }else{
      const departureIdx = count - spaceOrder.length;
      const parkIdx = departureOrder[departureIdx]-1;
      totalRevenue = head * spaceOrder[parkIdx];
      count++;
      return totalRevenue + aux(spaceOrder, arrivalOrder.slice(1), departureOrder, count);
    }
  }
  return aux(spaceOrder, arrivalOrder, departureOrder, count);
}
*/

//Q27
function countOfFingerMVs(playingArr) {
  //첫 엘리먼트가 다를 경우 상관없음
  //첫 엘리먼트가 같을 경우 두번째 엘리먼트가 중요.
  //두번째 엘리먼트에서 이미 존재하는 두번째 엘리먼트의 숫자보다 크면 상관없다.
  //숫자보다 작으면 첫 엘리먼트가 같았던 모든 것을 다 없애줘야한다.
  //그런 식으로 하면 된다.

  //맵을 돌려서 전부 숫자로 바꿔준다.
  playingArr = playingArr.map((el) => [Number(el[0]), Number(el[1])]);
  //객체를 만들어서 숫자를 넣어주고 존재할 경우 분기를 통해서 처리해준다.
  //마지막에 리턴해줄 카운트 변수도 선언해준다.
  let result = {};
  let count = 0;
  //while문을 이용해서 주어진 매개변수 앞에서 shift를 해서 길이가 0이 될 때까지 반복한다.
  //EX) result = {5:[15,[15]]} 이런식으로 객체를 구성한다.
  //5번째 줄에 해당하는 프렛을 모두 result[5][1]에 넣어준다.
  //이미 존재할 경우 프랫의 숫자가 result[5][0]보다 클 경우 result[5][1]에 푸쉬와 함께 카운트를 세준다.
  //이미 존재할 경우 프랫의 숫자가 result[5][0]와 같은 경우 카운트를 세지 않는다.
  //이미 존재할 경우 프랫의 숫자가 result[5][0]보다 작을 경우 result[5][1]의 길이만큼 카운트에 더해주고
  //result[5][1]를 비우고 현재 들어온 프랫을 넣어준다. 그리고 프랫 카운트를 더해주고 result[5][0]을 더 작은 수로 업데이트 해준다.
  while (playingArr.length !== 0) {
    let finger = playingArr.shift();
    //해당 줄을 잡고 있지 않은 경우
    if (result[finger[0]] === undefined) {
      result[finger[0]] = [finger[1], [finger[1]]];
      count++;
      //해당 줄을 잡고 있는 경우
    } else {
      //들어온 프랫이 현재 프랫보다 큰 경우
      if (finger[1] > result[finger[0]][0]) {
        result[finger[0]][1].push(finger[1]);
        count++;
      } else if (finger[1] === result[finger[0]][0]) {
        count = count;
      }
      //들어온 프랫이 현재 프랫보다 작은 경우
      else {
        count += result[finger[0]][1].length;
        result[finger[0]][0] = finger[1];
        result[finger[0]][1] = [finger[1]];
        count++;
      }
    }
  }
  return count - 1;
}

//코드스테이츠 레퍼런스
function countOfFingerMVs(playingArr) {
  const [numberOfMelodies, totalFret] = playingArr[0].map(Number);
  const lines = Array(7)
    .fill()
    .map((el) => []);
  let count = 0;
  for (let i = 1; i <= numberOfMelodies; i++) {
    const [line, fret] = playingArr[i].map(Number);
    const lineStack = lines[line];

    while (lineStack.length) {
      if (lineStack[lineStack.length - 1] > fret) {
        lineStack.pop();
        count++;
      } else if (lineStack[lineStack.length - 1] === fret) {
        lineStack.pop();
        count--;
        break;
      } else {
        break;
      }
    }
    lineStack.push(fret);
    count++;
  }
  return count;
}

//Q32
function rowBikesOut(rowBikes, n) {
  //매개변수 n을 제거하고 그 뒤로 있는 값들을 바깥부터 차례차례 빼준다.
  //이번엔 빼준 순서대로 원 배열에 다시 넣어준다.

  let idx = rowBikes.indexOf(n);
  let length = rowBikes.length;
  let difference = length - idx - 1;
  let result = rowBikes.slice(0, idx).concat(rowBikes.slice(idx + 1, length));
  for (let i = idx; i <= idx + difference; i++) {
    result.splice(i, 0, result.pop());
  }
  return result;
}

//코드스테이츠 레퍼런스
function rowBikesOut(rowBikes, n) {
  // n번째 바이크가 빠져나가기 위해
  // 끝에서부터 나간 바이크들을 순서대로 넣을 배열
  const exitBikes = [];

  while (rowBikes.length >= n) {
    if (rowBikes.length === n) {
      rowBikes.pop();
      continue;
    }
    //끝에서 부터 바이크를 내보낸 후, exitBikes에 넣어주기.
    const exitBike = rowBikes.pop();
    exitBikes.push(exitBike);
  }
  // exitBikes를 rowBikes에 차례대로 쌓기
  for (let i = 0; i < exitBikes.length; i++) {
    rowBikes.push(exitBikes[i]);
  }

  return rowBikes;
}
