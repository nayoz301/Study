문제1
function returnFunction() {
  return function () {
    return 'Hello HoF!'
  }
}

문제2
function functionParameter(func, num) {
  return func(num);
}

문제3
function applyTwice(func, num) {
  return func(func(num));
}


문제4
function compose(func1, func2, num) {
  return func1(func2(num));
}

문제5
function compose2(func1, func2) {
  return function (num) {
    return func1(func2(num));
  }
}

문제6
function pipe(...funcs) { //...spread 사용법
  return function (num) {
    let result = num;
    for (let i = 0; i < funcs.length; i++) { //spread시 length 설정
      result = funcs[i](result);
    }
    return result;
  }
}

문제7
function callbackOnly(callback, response) {
  if (response['status'] === 'fail') {
    return 'Something went wrong!'
  }
  else {
    return callback(response['data']);
  }
}

문제8
//푼 첫번째 방법
function mapCallback(func, arr) {
  let brr = [];
  if (arr.length === 0) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) { //기본 for문을 사용하였다.
    brr.push(func(arr[i]))
  }
  return brr;
}

//내가 푼 두번째 방법 
function mapCallback(func, arr) {
  let brr = [];
  if (arr.length === 0) {
    return [];
  }
  for (let el of arr) {
    //배열이라서 for of을 사용하였다. 여기서 for in을 사용하게 되면 key값 즉 각 항의 인덱스를 대입하게 되는데
    //그 경우에는 위의 첫번째 방법에서 brr.push(func(i))로 쓰는 것과 같은 결과가 나온다. 여기선 i의 0,1,2,3...같은 인덱스 값이 아닌 각 인덱스 값에 해당하는 엘리먼트를 함수에 넣어야하는 것.
    brr.push(func(el))
  }
  return brr;
}

문제9
function filterCallback(func, arr) {
  let brr = [];
  if (arr.length === 0) {
    return [];
  }
  for (let el of arr) {
    if (func(el) === true) {
      brr.push(el);
    }
  }
  return brr;
}

문제10
function removeElement(arr, discarder) {
  return arr.filter(function (el) { //filter는 불리언 값이 참일 경우 참에 해당하는 엘리먼트만을 추출하여 새로운 배열을 만드는 함수이다. el은 임의로 정할 수 있으며 for에서 i와 같이 배열의 처음부터 끝까지 도는 인자이다.
    return el !== discarder;
  })
}
//위 문제랑 다를 것 없는 안전하게 트루 폴스 넣어줬다.
function removeElement(arr, discarder) {
  return arr.filter(function (el) {
    if (el !== discarder) {
      return true;
    }
    return false;
  })
}

문제11
function keep(arr, keeper) {
  return arr.filter(function (el) {
    if (el === keeper) {
      return true;
    }
    return false;
  })
}

문제12
function filterOddLengthWords(words) {
  return words.filter(function (el) {
    if (el.length % 2 === 1) {
      return true;
    }
    return false;
  })
}

문제13 //이문제 싱크빅
function getIndex(arr, num) {
  let n = arr.filter(function (el) {
    if (el < num) {
      return true;
    }
    else {
      return false;
    }

  })
  return n.length;
}

//좀 더 간단한 느낌으로
function getIndex(arr, num) {
  return arr.filter(function (el) {
    return el < num
  }).length;
}

문제14
function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  let arr = obj[property];
  if (Array.isArray(arr) === true) {
    return arr.filter(function (el) {
      return typeof el === 'number' && lessThan100(el); //숫자가 아닌 경우 입력 받았을 때 에러가 났다. typeof el==='number' &&을 붙여줄 생각을 못헀다.
    })
  }
  return []; // 그리고 그 나머지 else에 대한 결과로 빈 배열 출력
}

문제15
function getDoubledElements(arr) {
  if (arr.length === 0) {
    return [];
  }
  return arr.map(function (el) {
    return el * 2;
  })
}

문제16
function getLengthOfElements(arr) {
  return arr.map(function (el) {
    return el.length;
  })
}

문제17
function checkEvenOrNot(arr) {
  return arr.map(function (el) {
    if (el !== 0 && el % 2 === 0) {
      return 'ok'
    }
    else {
      return 'no'
    }
  })
}

문제18
function getOnlyNames(arr) {
  return arr.map(function (el) {
    return el['name'];
  })
}

문제19
function getFullNames(arr) {
  return arr.map(function (el) {
    return `${el.firstName} ${el.lastName}`
  })
}

문제20
function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  let arr = obj[property];
  if (Array.isArray(arr) === true) {  //처음에 arr.map부터 시작해서 그 밑에 ArrayisArray를 썼다가 불통되었었다.
    return arr.map(function (el) {  //객체와 키를 입력받아서 해당하는 값이 배열인 경우에! 배열의 각요소들에 제곱을 해주는거라서 미리 어레인지 확인해주었다.
      return square(el);
    })
  }
  return [];
}


문제21
function getOnlyAllowedToDrink(arr) {
  let overage = arr.filter(function (el) {
    return el.age >= 18;  //이 부분에서 자꼬 틀리는데 age라는 키에 닿으려면 지정해놓은 el.age로 해야되는데 자꾸 arr.age로 접근해서 틀림.
  }) //필터로 18이상인 배열 만들어줌
  return overage.map(function (el) {
    return el.name;
  })
}

문제22
function classicMovies(arr, year) {
  let filtered_movie = arr.filter(function (el) {
    return el.year < year; // 해당 year이전의 영화만 추림
  })
  return filtered_movie.map(function (el) {
    return `${el.title} by ${el.director}`
  })
}

문제23
function computeSumOfAllElements(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let reducer = function (acc, cur) {
    return acc + cur;
  }
  return arr.reduce(reducer);
}

문제24
function computeProductOfAllElements(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr.reduce(function (acc, cur) { // 자꾸 요 앞에 return을 까먹는다.
    return acc * cur;
  }, 1) // 곱셈이니까 초기값을 1로 지정해준다. 아니면 index0에 0이 들어있는 배열을 받을 경우 곱셈이 다 0이 되버리니까 초기값 1로 두고 시작.
}

문제25
function computeAverageOfNumbers(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce(function (acc, cur) {
    return acc + cur; // 바로 반환하지 않고 sum에 총 합을 저장해두고 조건문 밖으로 나와서 arr.length로 나누어 평균을 리턴했다.
  })
  return sum / arr.length
}

문제26
//세번째 reduce만으로 푼 거
function calculateScore(records, value) {
  return records.reduce(function (acc, cur) {
    if (cur.animal === value) {
      acc = acc + cur.score;
    }
  }, 0)
}
//두번째 푼 거
function calculateScore(records, value) {
  let result = [];

  records.forEach(function (el) {
    if (el.animal === value) {
      result.push(el.score);
    }
  })

  return result.reduce(function (acc, cur) {
    return acc + cur;
  }, 0)
}

function calculateScore(records, value) {
  if (records.length === 0) {
    return 0;
  }
  //animal 속성값이 value와 일치하는 경우부터 필터하기
  let filtered_arr = records.filter(function (el) {
    return el.animal === value;
  })
  //mouse를 입력받은 경우(인자가 배열에 없어서 빈 배열을 만들어낸경우)
  if (filtered_arr.length === 0) {
    return 0;
  }
  //score속값만 따로 빼서 배열로 만들기
  let scores = filtered_arr.map(function (el) {
    return el.score;
  })
  //스코어 점수 더해주기
  return scores.reduce(function (acc, cur) {
    return acc + cur;
  })
}

문제27
function getLongestElement(arr) {
  return arr.reduce(function(acc,cur){
    if(cur.length>acc.length){
      return cur;
    } else {
      return acc;
    }
  },'')
}

문제28
//처음에 return 값에다가 cur.length / acc.length라고 해두고 그 값을 읽을 수 없다고 나와서
//뭐가 문제인고 했더니 reduce라는 함수는 acc,cur이라는 값을 계속 반복적으로 저장하고 출력하는 함수이기 때문에
//acc와 cur값을 지속적으로 공급해줘야 하는데 내가 컴퓨터가 읽을 수 없게 .length를 붙여서 더이상 진행이 안됬던 것.
//Reduce로 푼 것
function getLengthOfLongestElement(arr) {
  if(arr.length===0){
    return 0;
  }
  return arr.reduce(function(acc,cur){
    if(cur.length>acc.length){
      return cur
    } else {
      return acc
    }
  },'').length
}

//첫번째 푼 스타일
function getLengthOfLongestElement(arr) {
  let maxLen = 0;
  if (arr.length === 0) {
    return 0;
  }
  arr = arr.map(function (el) {
    return el.length;
  })
  maxLen = Math.max(...arr);
  return maxLen;
}

//두번째 푼 스타일
function getLengthOfLongestElement(arr) {
  let reducer = function (acc, cur) {
    if (acc.length >= cur.length) {
      return acc;
    }
    else {
      return cur;
    }
  }
  return arr.reduce(reducer, '').length;
}

문제29
//reduce로 푼 것
function joinArrayOfArrays(arr) {
  return arr.reduce(function(acc,cur){
    return acc.concat(cur)
  })
}

//첫번째 풀었지만 반복문을 쓰면 안됌;
function joinArrayOfArrays(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }
  return result;
}

//맵을 두번 써서 풀이
function joinArrayOfArrays(arr) {
  let result = [];
  arr.map(function (el) {
    el.map(function (dl) {
      return result.push(dl)
    })
  })
  return result;
}

//컨캣을 써서 풀이
function joinArrayOfArrays(arr) {
  let brr = arr.reduce(function (acc, cur) {
    return acc.concat(cur);
  })
  return brr;
}
//acc는 누적값이므로 컨캣을 해서 계속 누적해가는 아이디어로 사용

문제30
//두번째 작성 코드//isNaN으로 필터 이용해서 숫자만 걸러줌 /isNaN으로 빈 문자열 나온거 제거/리듀스 사용해서 대소비교 /
function findShortestWord(arr) {
  //문자를 새 배열에
  let charArr = arr.filter(function (el) {
    return isNaN(el);
  })
  if (charArr.length === 0) {
    return '';
  }
  let charLen = charArr.reduce(function (acc, cur) {
    if (acc.length <= cur.length) { //숫자가 같아도 acc를 리턴해야함. 길이가 중복될때는 첫번째 숫자를 리턴해야하기 때문.
      return acc;
    } else {
      return cur;
    }
  })
  return charLen;
}
//두번 째 푼 거
function findShortestWord(arr) {
  arr = arr.filter(function(el){
    return typeof el === 'string';
  })

  if(arr.length===0){
    return '';
  }

  return arr.reduce(function(acc,cur){
    if(acc.length<=cur.length){
      return acc;
    } else {
      return cur;
    }
  })
}

//isNaN 말고 typeof로 숫자 거름 /sort사용해서 정열 반대로했음.
function findShortestWord(arr) {
  if (arr.length === 0) {
    return '';
  }
  else {
    let brr = arr.filter(function (el) {
      return typeof el === 'string' //arr배열에서 string값만 뽑아내어 brr에 담는다.
    })
    if (brr.length === 0) {
      return '';
    }
    else {
      let min = brr.sort(function (a, b) {
        return a.length - b.length;
      })
      return min[0];
    }

  }
}

문제31
//forEach로 반복을 돌리면 따로 저장할 필요없이 덮어쓰기 가능
function studentReports(students) {
  //여학생만 추출
  students = students.filter(function (el) {
    return el['gender'] === 'female';

  })

  //키 grade에 있는 문자열 숫자를 더해서 평균을 내서 다시 넣어줌.
  students.forEach(function (el) {
    let sum = el['grades'].reduce(function (acc, cur) {
      return acc + cur;
    })
    // console.log(sum)
    let avg = sum / el['grades'].length;
    // console.log(avg)
    return el['grades'] = avg;

  })
  console.log(students)
  return students;
}


문제32
//첫번째 푼 방법 /이중맵으로 2차원 배열 안에 접근하여 숫자만 푸쉬해옴 /리듀스로 다 더해서 리턴
function sumOfArraysInArray(arr) {
  let brr = [];
  arr.map(function (el) { //arr배열안의 작은 배열들에 접근
    el.map(function (fl) { //작은 배열안에 접근
      if (typeof fl === 'number') { // 넘버타입이면 brr에 푸쉬
        brr.push(fl);
      }

    })
  })
  if (brr.length === 0) {
    return 0;
  }
  let reducer = function (acc, cur) {
    return acc + cur;
  }
  return brr.reduce(reducer);
}

//두번째 푼 방법 /첫번째에선 더블맵으로 2차원 배열에 들어갔지만 여기선 리듀스로 컨캣해서 모든 배열을 하나로 뭉친 후 숫자를 걸러냈다.
function sumOfArraysInArray(arr) {
  //reduce로 concat해버린다.
  arr = arr.reduce(function (acc, cur) {
    return acc.concat(cur);
  })
  //isNaN으로 숫자만 걸러낸다.
  arr = arr.filter(function (el) {
    return typeof el === 'number';
  })
  if (arr.length === 0) {
    return 0;
  }
  arr = arr.reduce(function (acc, cur) {
    return acc + cur;
  })
  return arr;
  //더하고 리턴
}

function sumOfArraysInArray(arr) {
  arr = arr.reduce(function(acc,cur){
    return acc.concat(cur);
  })
  arr = arr.filter(function(el){
    return typeof el === 'number'
  })

  arr = arr.reduce(function(acc,cur){
    return acc + cur;
  },0) //초기값 0 설정함으로서 number가 없는 빈배열 0으로 리턴해줌
  return arr;
}