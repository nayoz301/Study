//03-18-2021 Basic Algorithm 리뷰

문제1
function transformFirstAndLast(arr) {
  let newArr = {};

  if (arr.length === 0) {
    return {};
  }

  //배열의 첫요소=키, 마지막 요소=값
  newArr[arr[0]] = arr[arr.length - 1]
  return newArr;
}
//전달받은 배열의 첫번째를 



문제2
//두번 째 풀이
function computeWhenDouble(interestRate) {
  let principal = 1;
  let rate = interestRate / 100 + 1;
  let count = 0;

  while (principal < 2) {
    principal = principal * rate;
    count++
    if (principal >= 2) {
      return count;
    }
  }
}

function computeWhenDouble(interestRate) {
  //원금 * 이자(이자를 년만큼제곱)
  if (interestRate >= 100) {
    return 1;
  }
  let principal = 100;
  let count = 0
  while (principal <= 200) { //while조건문은 true여야 계속 진행 / while문이 돌아가서 원금이 2배 바로전일때 한번 더 돌려서 2배 이상이 되게끔한다.
    principal = principal + principal * interestRate / 100;
    count++;
  }
  return count;
}


문제3
//두번째엔 너무 쉽게 풀음;;;
function powerOfTwo(num) {
  while (num >= 1) {
    if (num === 1) {
      return true;
    }
    num = num / 2
  }
  return false;
}

//다시 한번 풀기
//풀면서 너무 어지러움
function powerOfTwo(num) {
  if (num === 1) {
    return true;
  } else if (num % 2 === 1) {
    return false;
  } else { //짝수들만 있는 상태
    while (num % 2 === 0) {
      num = num / 2
    }
    if (num === 1) {
      return true;
    }
    else {
      return false;
    }
  }
}

문제4
//두번 째 푼 것
function firstCharacter(str) {
  if (str.length === 0) {
    return '';
  }
  str = str.split(' ')
  let result = '';
  for (let el of str) {
    result = result + el[0];
  }
  return result;
}

function firstCharacter(str) {
  if (str === '') {
    return ''
  }
  let newString = ''
  //각단어 첫글자의 문자열
  let splited_str = str.split(' ');
  for (let i = 0; i < splited_str.length; i++) {
    newString = newString + splited_str[i][0];
  }
  return newString;
}

문제5
//두번 째 풀이
function firstReverse(str) {
  str = str.split('');
  str = str.reverse();
  str = str.join('')
  return str;
}

function firstReverse(str) {
  let newStr = str.split('');
  let reverseStr = newStr.reverse();
  let result = reverseStr.join('');
  return result;
}

문제6
//문자열에서 한 글자만 대문자로 만들려고 str[0] = str[0].toUpperCase()해봐야 안된다.
function letterCapitalize(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    str[0] = str[0].toUpperCase();
    if (str[i] === ' ') {
      continue;
    } else {
      if (str[i - 1] === ' ') {
        str[i] = str[i].toUpperCase();
      }
    }
  }
  str = str.join('')
  return str;
}

function letterCapitalize(str) {
  //0번 인덱스의 글자 / 공백 다음 문자열을 upperCase
  if (str.length === 0) {
    return '';
  }
  let newStr = str.split(''); //글자 단위로 나눠서 배열에 넣어줌
  newStr[0] = newStr[0].toUpperCase();
  for (let i = 1; i < newStr.length; i++) {
    if (newStr[i - 1] === ' ') {
      newStr[i] = newStr[i].toUpperCase();
    }
  }
  return newStr.join('');

}


문제7
//두번째 풀어본 코드 매우 간결함
function convertListToObject(arr) {
  let result = {};
  for (let el of arr) {
    if (el.length === 0) {
      continue;
    } else {
      if (!result[el[0]]) { //키 값이 undefined 즉 아직 키 값이 할당이 안된 때에만 value를 넣어줌. 중복 방지
        result[el[0]] = el[1];
      }
    }
  }
  return result;
}

//한번 더 풀어보기
function convertListToObject(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i]
    if (newArr.length !== 0) {
      if (!(Object.keys(result).includes(newArr[0]))) {
        result[newArr[0]] = newArr[1];
      }
    }
  }
  return result;
}



//내 코드 중복처리 실패 헬프데스크 이용
function convertListToObject(arr) {
  let result = {};
  for (let key in arr) {
    let newArr = arr[key]
    if (newArr.length !== 0) {
      result[newArr[0]] = newArr[1];
    }
  }
  return result;
}

//양권님 코드
function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let resultObj = {}
  if (arr.length === 0) {
    return resultObj
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length !== 0) {
        if (!(Object.keys(resultObj).includes(arr[i][0]))) {
          resultObj[arr[i][0]] = arr[i][1]
        }
      }
      console.log(Object.keys(resultObj))
    }
  }
  console.log(resultObj)
  return resultObj
}

문제8
//두번째 푼 거
function convertDoubleSpaceToSingle(str) {
  str = str.split('  ');
  for (let el of str) {
    if (el === '  ') {
      el.replace('  ', ' ')
    }
  }
  str = str.join(' ')
  return str;
}

//첫번째 푼 거
function convertDoubleSpaceToSingle(str) {
  let str_nospace = str.split('  ');
  str_nospace = str_nospace.join(' ');
  return str_nospace;
}

문제9
//두번째 푼 거 
function ABCheck(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' && str[i + 4] === 'b') {
      return true;
    }
    if (str[i] === 'b' && str[i + 4] === 'a') {
      return true;
    }
  }
  return false;
}

function ABCheck(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      if (str[i + 4] === 'b') {
        return true;
      }
    }
    else if (str[i] === 'b') {
      if (str[i + 4] === 'a') {
        return true;
      }
    }
  }
  return false;
}

//레퍼런스에서는 i를 4부터 시작했다. i를 1부터 시작하는 거보다 4부터 시작해서 0번째를 확인하는 게 더 좋은 방법인듯
function ABCheck(str) {
  if (str === undefined) {
    return false;
  }

  str = str.toLowerCase();

  for (let i = 4; i < str.length; i++) {
    if (
      (str[i] === 'a' && str[i - 4] === 'b') ||
      (str[i] === 'b' && str[i - 4] === 'a')
    ) {
      return true;
    }
  }

  return false;
}

문제10
//두번째 풀이 아주 쉽게 풀음
function insertDash(str) {
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 1 && parseInt(str[i - 1]) % 2 === 1) {
      result = result + `-${str[i]}`
    } else {
      result = result + `${str[i]}`
    }
  }
  return result;
}
//첫번째 풀이s
function insertDash(str) {
  for (let i = 1; i < str.length; i++) {
    if (Number(str[i - 1]) % 2 === 1 && Number(str[i]) % 2 === 1) {
      str = str.substr(0, i).concat('-').concat(str.substr(i, str.length - 1))
    }
  }
  return str;
}

//해결 못함 무한의 루프 늪에 빠짐
function insertDash(str) {
  str = str.split('');
  // console.log(str)
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    if (str[i] % 2 === 1) {
      // console.log(str[i],i)
      let front = [];
      let minus = '-'
      let back = [];
      if (str[i + 1] % 2 === 1) {
        front = str.slice(0, str[i])
        back = str.slice(str[i + 1], str.length - 1)
        front = front.concat(minus);
        str = front.concat(back);
        console.log(i, i + 1)

      }
    }
  }
  str = str.join('');
  // console.log(str)
  return str;
}

문제11
function removeExtremes(arr) {
  let maxNum = 0;
  let minNum = 0;
  let elLen = arr.map(function (el) {
    return el.length;
  }) // [arr의 엘리먼트 길이로만 이루어진 배열 완성]
  maxNum = Math.max(...elLen);
  minNum = Math.min(...elLen);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length === maxNum) {
      arr.splice(i, 1)
      break
    }
  }// i>=0 이라고 해줘야 포문 돌아감. i=0했다가 가동이 안되었음.
  for (let i = arr.length - 1; i >= 0; i--) { //arr.length-2를 안하는 이유는 어차피 10번 포문에서 다 끝나고 16번으로 오면 똑같이 -1이기 떄문ㅇ.
    if (arr[i].length === minNum) {
      arr.splice(i, 1)
      break
    }
  }
  return arr;
}
//레퍼런스는 가장 긴 요소와 가장 짧은 요소의 인덱스 값을 구해서 그 값을 제외하고 새로운 빈 배열에 푸쉬해줬다.
function removeExtremes(arr) {
  let shortestLen = 20;
  let longestLen = 0;
  let shortestIdx = 0;
  let longestIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longestLen) {
      longestLen = arr[i].length;
      longestIdx = i;
    }

    if (arr[i].length <= shortestLen) {
      shortestLen = arr[i].length;
      shortestIdx = i;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== shortestIdx && i !== longestIdx) {
      result.push(arr[i]);
    }
  }

  return result;
}

문제12
function findBugInApples(arr) {
  let coord = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'B') {
        coord.push(j);
        coord.unshift(i);
      }
    }
  }
  return coord;
}

문제13
// 내가 푼 것
function readVertically(arr) {
  let maxLen = arr.map(function (el) {
    return el.length;
  })
  maxLen = Math.max(...maxLen);
  let result = '';
  for (let i = 0; i < maxLen; i++) { //
    for (let j = 0; j < arr.length; j++) { //
      if (!arr[j][i]) { // undefined일 경우에 바로 넘겨버리기
        continue;
      } else {
        result = result + arr[j][i]
      }
    }
  }
  return result;
}

//레퍼런스 
function readVertically(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (temp.length === j) {
        temp.push(str[j]);
      } else {
        temp[j] = temp[j] + str[j];
      }
    }
  }
  let result = '';
  for (let i = 0; i < temp.length; i++) {
    result = result + temp[i];
  }

  return result;
}

문제14
//첫번째 푼 것
function superIncreasing(arr) {
  let arrTemp
  let arrSum
  for (let i = 1; i < arr.length; i++) {
    arrTemp = arr.slice(0, i)
    arrSum = arrTemp.reduce(function (acc, cur) {
      return acc + cur;
    })
    if (arrSum < arr[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true
}

//리듀스로 풀어봄! 두번째 풀이
function superIncreasing(arr) {
  let result = arr.reduce(function (acc, cur) {
    if (acc < cur) {
      return acc + cur;
    } else {
      return 'stop'; // 여기를 false로 바꿔도 바로 false를 리턴하고 결과값을 리턴하는 게 아니라 리듀스 함수안에서 false를 0으로 인식하고 계속 돌린다.
    } // 그래서 조건대로 acc가 cur보다 적을 경우엔 계속 더해지며 숫자 타입이 마지막에 리턴될 것이며 그 경우 트루이고
  })  // acc가 cur보다 클 경우 이 것은 false지만 바로 바깥으로 break혹은 return false할 방법이 없기에 문자열 타입으로 바꿔준다.
  if (typeof result === 'string') {  // 그래서 마지막에 문자열인지 넘버인지를 판단해서 true or false 반환
    return false;
  } else {
    return true;
  }
}

//이거 고쳐보기 리듀스 이용하는거 이거 고친 게 위에꺼 ㅎㅎㅎ
function superIncreasing(arr) {
  let reducer = arr.reduce(function (acc, cur) {
    acc = acc + cur;
    if (acc < cur) {
      return true;
    }
    else {
      return false;
    }
  })
  return reducer;
}

문제15
//두번째 푼 것 쉽게 품
function modulo(num1, num2) {
  if (num1 === 0) {
    return 0
  } else if (num2 === 0) {
    return 'Error: cannot divide by zero'
  }
  while (num1 >= num2) {
    num1 = num1 - num2;
    if (num1 < num2) {
      return num1;
    }
  }
}

function modulo(num1, num2) {
  let remainder;
  if (num2 === 0) {
    return 'Error: cannot divide by zero';
  } else {
    if (num1 > num2) {
      remainder = num1 - num2;
      while (remainder >= num2) {
        remainder = remainder - num2;
      }
      return remainder
    } else if (num1 = num2) {
      return 0;
    } else {
      return 0;
    }
  }
}

문제16
//두번째 푼 거
function isIsogram(str) {
  str = str.toUpperCase();
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      return false;
    }
    result[str[i]] = str[i];// str[i] 대신에 true //여긴 암거나 들어가도 됨.
  }
  return true;
}

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[i] && j !== i) {
        return false;
      }
    }
  }
  return true;
}

문제17
//두번째 푼 거
function computeSquareRoot(num) {
  let ini = 1;
  while (ini ** 2 <= num) {
    ini = ini + 0.001;
  }
  return Number(ini.toFixed(2));
}

function computeSquareRoot(num) {
  //초기값을 설정하여 그거의 제곱이 num과 비슷해질때까지 조금씩 더하며 비교하는 방법
  let ini = 1;
  let sq = 1
  while (num >= sq) {
    ini = ini + 0.001;
    sq = ini * ini;
    if (sq >= num) {
      return parseFloat(ini.toFixed(2));
    }
  }
}
//레퍼런스 이렇게도 할 수 있구나.
function computeSquareRoot(num) {
  const diffs = [1, 0.1, 0.01, 0.001];
  let base = 1;
  for (let i = 0; i < diffs.length; i++) {
    while (base * base < num) { //diffs[0]일때 1을 쭉쭉쭉 더해서 base 제곱했을 때 num보다 크지 않을 정도로만 1먼저 더해주고
      base = base + diffs[i];  //그 다음 0.1더하고 0.01 더하고... 통에 돌/자갈/모래 순으로 넣어서 채우는 느낌으로 한다.
    }

    if (base * base === num) {
      return base;
    } else {
      base = base - diffs[i];
    }
  }
  return Number(base.toFixed(2));
}

문제18
//두번째 푼 거
function numberSearch(str) {
  if (str.length === 0) {
    return 0;
  }
  let arrNum = [];
  str = str.split('');
  arrNum = str.filter(function (el) {
    return !isNaN(el) && el !== ' ';  //!isNaN -> 숫자나 ' '공백만 추출. (나머지 문자열이 다 걸러짐)
  })
  str = str.filter(function (el) {
    return isNaN(el); //isNaN -> 문자열만 추출. (숫자나 ' '공백이 다 걸러진다.)
  })
  arrNum = arrNum.reduce(function (acc, cur) {
    return Number(acc) + Number(cur);
  })
  return Math.round(arrNum / str.length);
}
//첫번째 푼 거
function numberSearch(str) {
  let char = ''
  let num = 0;
  if (str.length === 0) {
    return 0;
  }
  for (let i = 0; i < str.length; i++) {
    if (!(isNaN(str[i]))) { //숫자가 아닌것은 다 NaN... 문자포함 등등 다 isNaN
      num = num + Number(str[i]);
    } else {
      char = char + str[i];
    }
  }
  char = char.replace(' ', '');
  char = char.length;
  return Math.round(num / char);
}


//s이건 if(typeof Number(str[i])==='number'){ 이부분이 도저히 안먹음. 
function numberSearch(str) {
  let char = ''
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (typeof Number(str[i]) === 'number') {
      num = num + Number(str[i]);
    } else if (typeof str[i] === 'string') {
      char = char + str[i];
    }
  }
  char = char.replace(' ', '');
  char = char.length;
  return parseInt(num / char);
}

문제19
//알파벳 나열로 다시 풀었다.
function decryptCaesarCipher(str, secret) {
  secret = Math.abs(secret - 26);
  let result = '';
  if (str.length === 0) {
    return '';
  }
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result = result + ' ';
    }
    for (let j = 0; j < alpha.length; j++) {
      if (str[i] === alpha[j]) {
        if (j + secret >= 26) {
          result = result + alpha[j + secret - 26]
        } else {
          result = result + alpha[j + secret]
        }
      }
    }
  }
  return result;
}

function decryptCaesarCipher(str, secret) {
  //97부터 122까지 26개 알파벳 /
  sercret = secret % 26 // 26보다 크면 골치 아프므로 이미 나눠주고 시작
  let subtract = 26 - secret;
  let numArr = []; //글자를 아스키코드로 바꿔서 넣어줄 빈 배열
  let charArr = []; //아스키코드를 글자로 바꿔서 넣어줄 빈 배열
  for (let i = 0; i < str.length; i++) { //문자 하나하나를 아스키코드로 변환하고 시크릿 빼서 원래대로 돌려줌.
    if (str.charCodeAt(i) === 32) {
      numArr.push(str.charCodeAt(i));
    }
    else {
      numArr.push(str.charCodeAt(i) - secret);
    } // console.log(i,numArr);
  }
  for (let j = 0; j < numArr.length; j++) {
    if (numArr[j] !== 32 && numArr[j] < 97) {
      numArr[j] = numArr[j] + 26;
    }
  }
  // console.log(numArr);//여기까지 됨. 그럼 다시 글자로 변환하기
  for (let k = 0; k < numArr.length; k++) {
    charArr.push(String.fromCharCode([numArr[k]]));
  }
  //console.log(charArr) //여기까지 됨.
  charArr = charArr.join('');
  return charArr;
}

//대형님 코드
function decryptCaesarCipher(str, secret) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let index = [];
  let result = [];
  for (let n = 0; n < str.length; n++) {
    if (str[n] === ' ') {
      index.push(' ')
    }
    if (alphabet.includes(str[n])) {
      index.push(alphabet.indexOf(str[n]))
    }
  }
  for (let i = 0; i < index.length; i++) {
    if (index[i] === ' ') {
      result.push(' ')
    }
    if (typeof index[i] === 'number' && index[i] >= secret) {
      result.push(alphabet[index[i] - secret])
    }
    if (typeof index[i] === 'number' && index[i] < secret) {
      result.push(alphabet[index[i] - secret + 26])
    }
  }
  return result.join('');
}


문제20
//두번째 푼거
function compressString(str) {
  let tempStorage = '';
  let count = 0;
  let result = '';
  if (str.length === 0) {
    return '';
  }
  if (str[0] !== str[1]) {
    result = str[0];
  }
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++
      tempStorage = tempStorage + str[i];
      // if(i===str.length-1){
      //   result = result + tempStorage;
      // }
      continue;
    } else {
      if (count >= 2) { //카운트가 2이상이면 연속 덩어리가 3개이상
        result = result + `${count + 1}${tempStorage[0]}`
      } else if (count === 1) { //카운트가 1이면 연속 덩어리가 2개
        result = result + `${tempStorage}`
      } else if (count === 0) {
        result = result + `${tempStorage}`
      }
      count = 0;
      tempStorage = str[i]
    }
  }
  if (count >= 2) { //카운트가 2이상이면 연속 덩어리가 3개이상
    result = result + `${count + 1}${tempStorage[0]}`
  } else if (count === 1) { //카운트가 1이면 연속 덩어리가 2개
    result = result + `${tempStorage}`
  } else if (count === 0) {
    result = result + `${tempStorage}`
  }
  return result;
}

//처음 푼 거
function compressString(str) {
  let result = '';
  let n = str[0];
  if (str === '') {
    return '';
  }
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      n = n + str[i];
      // console.log(result,i)
      // console.log(n,i)
    } else { //이번 글자가 저번 글자랑 다른 경우 a s d
      if (n.length >= 3) {
        result = result + n.length + n[0];
        n = str[i]
      } else if (n.length === 2) {
        result = result + n[0] + n[1];
        n = str[i];
        //console.log(result)
      } else { //if(n.length===1)
        result = result + n[0];
        // console.log(result,n)
        n = str[i];
      }
      // n = str[i]
    }
  }
  if (n.length >= 3) {
    result = result + n.length + n[0];
    //console.log(result)
  }
  else {
    result = result + n;
    //console.log(result)
  }
  // console.log(n.length)

  // console.log(result)
  return result;
}
//레퍼런스
function compressString(str) {
  // 연속되는 문자를 기록하기 위한 변수
  // 첫 번째 문자로 초기화
  let before = str[0];

  // 동일한 문자의 반복 횟수
  let count = 1;

  // 정답으로 리턴할 문자열
  let result = '';

  // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
  str = str + ' ';
  for (let i = 1; i < str.length; i++) {
    // 동일한 문자가 반복될 경우
    if (before === str[i]) {
      count++;
    } else {
      // 이전과 다른 문자일 경우,
      // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
      if (count >= 3) {
        result = result + `${count}${before}`;
      } else {
        result = result + before.repeat(count);
      }
      before = str[i];
      count = 1;
    }
  }

  return result;
}