//코드를 처음 배운 때부터 익혀왔던 메소드를 정리해놓는 파일입니다.

//배열을 거꾸로 돌린다. [1,2,3,4,5] => [5,4,3,2,1]
arr.reverse()

//타입
typeof NaN // 'number'

isNaN(undefined) //true
isNaN('abcd') //true
isNaN({1:2}) //true
isNaN([2]) //false
isNaN(null) //false
isNaN('1234') //false
isNaN(1234) //false
isNaN('') //false
isNaN(' ') //false
//if(!(isNaN(str[i]))){ isNaN -> 숫자가 아닌 문자 ''등 모든 여집합 / !isNaN-> 숫자

//올림 내림 반올림
num.toFixed() //정수로 반올림 해준다.
num.toFixed(n) //소수점 n+1자릿수에서 반올림해서, 소숫점 n자리까지만 표기
Math.round(n) //정수로 반올림 해준다.
Math.ceil(n) //소수점 올림, 정수형 반환
Math.floor(n) //소수점 버림 내림, 정수형 반환
parseInt(n) //소수점 버림 내림, 정수형 반환 -> String을 Number로 변환
Number(n) //소수점 그대로 둔 채 String을 Number로 변환
Math.abs(n) //절대값 반환
Math.max(a,b,c,d) //가장 큰 숫자 반환
Math.max(...arr) //arr = [1,2,3,4]; spread sytax로 가능
Math.min //max와 같은 문법이지만 가장 작은 값 반환

//거듭제곱
Math.pow(2,3) //2의 3승
Math.pow(5,0.5) // 5의 제곱근을 이렇게 구할 수도 있다.
Math.sqrt(5) // 5의 제곱근 구하기.
2**3 //2의 3승

//slice => str이나 arr를 자를 때 사용
str.slice(0,4) //인덱스 0부터 3까지 복사, 4는 포함하지 않음
str.slice(1) //인덱스 1부터 끝까지 복사
str.slice(0) //전체 복사
str.slice() //전체 복사
let a = [1,2,3,4,5,6]
a.slice(-1) //[6]
a.slice(-6) //[1,2,3,4,5,6]
a.slice(-10) //[1,2,3,4,5,6]
a.slice(-5,-1) //[2,3,4,5]

//splice => arr를 자르고 추가할 때 사용
arr.splice(1,0,'a'); //인덱스 1번 포함 시작, 1번부터 몇개 뺄건지, 그 자리에 무엇을 넣을지;
arr.splice(1,1); //인덱스 1번 포함 시작, 1번 인덱스 1개만 빼기

//반복문
for(let value of arr) //배열의 각 인덱스 자리에 있는 value에 차례대로 접근
for(let key in ARRorOBJ) //배열의 idx값에 접근 혹은 객체의 key값에 접근
for(let i=0, n=0; i<5; i++, n--) //기본 반복문에 변수를 2개도 사용 가능

//str을 arr로, arr을 str로
arr.join('-') //배열을 문자열로 바꿀 때 각 밸류 사이에 특정 문자열을 집어넣어준다.
arr.split('') //문자열을 배열로 바꿀 때 어떤 문자열을 기준으로 분리한다.
continue //반복문에서 사용하면 해당 횟차를 건너띈다.
break //반복문에서 사용하면 해당 횟차에서 반복문을 탈출하게 된다.

//문자열
arr.toString() //[1, 2, 3, 4, 5] => "1,2,3,4,5", 1234 => "1234", 객체는 "[object Object]" 이렇게 뜸.
str.repeat('hello') //문자열이 n만큼 반복됨. "hellohellohello"
str.match('abc') //문자열안에 'abc'가 있는 경우 ["abc", index: 0, input: "abcdefg", groups: undefined] 배열을 반환
//정규표현식
let test  = 'love you. love me. love everything!'
var regExp = /love/gi;
test2 = test.match(regExp) //['love', 'love', 'love']
test2.length //3

//배열
arr.push(n) //배열에 값n을 뒤에서부터 넣어줌
arr.pop() //배열 맨 뒤에서부터 값을 빼줌
arr.unshift(n) //배열 맨 앞에 값n을 넣어줌
arr.shift() //배열 맨 앞부터 값을 빼줌
typeof arr //object로 나옴
typeof obj //object로 나옴
Array.isArray(n) //n이 배열인지 아닌지 true false로 구별. arr은 true, obj는 false
arr.sort((a,b)=>a-b) //오름차순으로 나열
Object.keys(obj) //obj에 key값만 뽑아서 배열로 만들어서 반환, arr에 idx값을 뽑을 수도 있음.
Object.keys(obj).length //객체안에 값이 몇개나 있는지 확인할 수 있음
Object.values(obj) //객체 밸류 값만 배열로 뽑아서 볼 수 있음. 배열에서 사용하는 것은 의미가 없는게 배열 그 자체로 나온다.
arr.forEach((el,idx,arr)=>console.log(el,idx,arr)) //forEach는 map, filter 같이 원본 배열을 바꿀 수 없으며 요소 뿐만 아니라 인덱스, 원형 배열도 참조할 수 있다.
arr.flat() //배열 내부에 배열이 있는 경우 벗겨준다. arr.flat().flat().flat()
[0,1,2].concat([3,4,5]) //[0,1,2,3,4,5] 병합이 된다. arr.concat.arr2 이와 같이 사용.
let arr = [...arr1, ...arr2] // const arr1 = [0, 1, 2] const arr2 = [3, 4, 5];
let brr = arr //이 경우 arr이 바뀌면 주소값을 공유하는 brr도 값이 arr을 따라 변경되지만
let brr = arr.slice() //이 경우 arr이 바뀌어도 brr이 바뀌지 않는 딥복사.
let brr = Array.from(arr) //brr에 arr을 복사하기. arr을 변경해도 brr이 바뀌지 않는다.
1 in arr //arr에 1이라는 idx가 있는 지 확인. 불리언 값을 반환
//객체
let newObj = {...obj, ...obj2} // let obj = {a:1, b:2, c:3}, let obj2 = {d:4, e:5, f:6} => {a: 1, b: 2, c: 3, d: 4, e: 5, …}
Object.assign(obj, obj2) //obj에 obj2를 복사 붙여넣기한다. 키 값이 이미 존재하는 경우 새로운 밸류로 덮어쓴다.
'a' in obj //key값이 a가 있는 지 확인. 불리언 값을 반환. 'a' in {a: 1} => true

new Date().getFullYear() //올해 년도가 나온다. 이 것 말고도 new Date() 다음에 붙일 수 있는 것이 아주 많다.
`${backtick}` //백틱 사용요령

//sort사용 방법 배열안의 객체
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
//sort by value
items.sort((a,b)=>a.value-b.value)
//sort by name
items.sort((a,b)=>a.name-b.name)
//sort by length of name
items.sort((a,b)=>a.name.length-b.name.length)


//유클리드 호제법
//최소공배수
function lcm(a, b) {
  let gcd = getGCD(a, b);
  let lcm = (a * b) / gcd;

    return lcm;
}

//최대공약수
function getGCD(m, n) {
  if (m % n === 0) return n;
  return gcd(n, m % n);
}

//매트릭스 만들기 (1)
let maxNum = 5; 
let matrix = new Array(maxNum+1).fill(0).map(el=>Array(maxNum+1).fill(0)); //maxNum+1 하는 이유는 매트릭스 만들 때 index 5인 경우 실제로는 6번째이기 떄문이다.

//매트릭스 만들기 (2)
let maxNum = 5;
let arr = []
  for(let n = 0; n <= maxNum; n++ ){
    function makeArr(){
      for(let i = 0; i<arr.length;i++){
        arr[i].push(0);
      }
      arr.push(new Array(arr.length+1).fill(0));
    }
    makeArr();
  }

//배열안의 숫자 스트링을 숫자로 만들기
let StringNum=["1", "2", "3", "4"].toString().split(`,`).map(x=>+x)

//10진법을 2진법으로 바꾸기
let num = 12345;
let newNum = num.toString(2);