문제1
// TODO : 키워드 let을 사용하여 변수 course를 선언하세요.
let course;

문제2
let course; // TODO : 선언되어 있는 변수 course에 문자열 'code states'를 할당하세요.
course = 'code states';

문제3
let num1, num2, result;
// TODO : 변수 num1에 숫자 5를 할당하고, 변수 num2에 숫자 7을 할당한 후, 변수 result에 숫자가 할당된 변수 num1과 num2의 곱을 할당합니다.
num1 = 5;
num2 = 7;
result = num1*num2;

문제4
function getRunCatDistance(speed, time) {
    let distance;
    distance = speed * time;
    // TODO: 속력(speed), 시간(time)이 숫자로 주어졌을 때, 이동한 거리를 변수 distance에 할당하여 리턴하는
    // getRunCatDistance 함수를 작성하세요.
    return distance;
  }

문제5
function multiplyBy2(input) {
    input = input * 2;
    return input;
  }
  // TODO : 첫 번째 인자에 2를 곱하는 함수 multiplyBy2와 비슷하게
  // 첫 번째 인자를 2로 나누는 함수 divideBy2를 선언하세요.
  function divideBy2(input){
    input = input/2;
    return input;
  }

문제6
// 문자열을 인자로 받아서 느낌표를 붙여서 리턴 해주는 함수 returnWordWithJoy가 있습니다.
// 함수 returnWordWithJoy의 첫 번째 인자로 문자열 "I love coding"을 넣어서 호출하고, 그 결과값을 변수 word에 할당하세요.
let word; // TODO
word = returnWordWithJoy('I love coding')
// 아래 코드는 변경하지 마세요
function returnWordWithJoy(word) {
  if (typeof word !== 'string') {
    return 'wrong type';
  } else {
    return word + '!';
  }
}

문제7
let thing, num;
// TODO : thing에 문자열(string) '두루마리 휴지'를 할당하고, num에 숫자(number) 3을 할당합니다.
thing = "두루마리 휴지"
num = 3;
// 아래 코드는 수정하지 마세요.
function goGet(thing, num) {
  return '혜선아, 가서 ' + thing + ' ' + num + '개 가져다 줄레?';
}
let result = goGet(thing, num);

문제8
// TODO : 변수 score에 숫자 100이 할당되도록 하기 코드를 수정하세요.
let score = 90 + 10;

문제9
function convertToNumber(anything) {
    let result = Number(anything);
    return result;
  }
  
  let output = convertToNumber('123')
  console.log(output);
  let output2 = convertToNumber('hello')
  console.log(output2);
  let output3 = convertToNumber('3.141592')
  console.log(output3);


문제10

function convertToString(anything) {
    let result = String(anything);
    return result;
  }
  
  let output = convertToString(120);
  console.log(output);
  let output2 = convertToString('hello');
  console.log(output2);
  let output3 = convertToString(true);
  console.log(output3);
  
  