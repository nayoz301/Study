//Cl10
//Q1 Find pairless number
function solution(A) {
  if (A.length === 0) {
    return false;
  }
  if (A.length % 2 !== 0) {
    return false;
  }
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] === A[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

//Q2 Correct the code
function solution(A) {
  var ans = A[0];
  for (i = 1; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i];
    }
  }
  return ans;
}

//Q3 Find maximum number among the numbers digit '5' is deleted from
function solution(N) {
  if (N.length < 2) {
    return false;
  }
  N = N.toString();
  let storage = [];
  for (let i = 0; i < N.length; i++) {
    if (N[i] === "5") {
      let modN = N.slice(0, i) + N.slice(i + 1, N.length);
      storage.push(parseInt(modN));
    }
  }
  if (storage.length === 0) {
    return N;
  }
  storage.sort((a, b) => b - a);
  return storage[0];
}

//////코딩테스트 C
//Q1
/*
1
3 5 7
9 11 13 15 17
19 21 23 25 27 29 31
n 번째 줄을 입력 하였을 때, 그 줄의 마지막 3개 수의 합을 출력하기
입력 : 정수 n ( 2 ≤ n ≤ 1000 )
출력 : n번째 줄 마지막 3개 수의 합
*/
function solution(n) {
  /*
  1,3,5,7,9, 11의 길이
  홀수만 반복
  길이 2n-1
  
  1->1
  2->3
  3->5
  4->7
  5->9
  6->11
  7->13
  맨 앞숫자 구하기
  2n-1;
  2n-1 => 5
  */
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let length = 2 * i - 1;
    sum += length;
  }
  let lastNum = sum * 2 - 1;

  return lastNum * 3 - 6;
}

//Q2
/*
3 과목의 평균을 소수 둘째점까지 구하고 점수에 맞게 등급까지 리턴하기
*/
function solution(numArr) {
  let sum = numArr.reduce((acc, cur) => acc + cur);
  let average = (sum / numArr.length).toFixed(2);
  let grade = "";

  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else if (average >= 60) grade = "D";
  else grade = "F";

  return [average, grade];
}

//Q3
/*
주어진 둘레의 길이로 만들 수 있는 삼각형의 개수를 구하기

예를 들어 삼각형의 둘레의 길이가 9m라고 하면,
한 변의 길이가 1m, 두 변의 길이가 4m인 삼각형
한 변의 길이가 2m, 다른 변의 길이가 3m, 나머지 변의 길이가 4m인 삼각형
세 변의 길이가 모두 3m인 삼각형
총 3가지 삼각형을 만들 수 있다.

입력 : 삼각형 둘레의 길이( 1이상 100이하 )
출력 : 만들어질 수 있는 서로 다른 삼각형의 수
*/
function solution(size) {
  /*
  삼각형이 되기 위해서는 두변의 길이를 합한 것이 나머지 하나의 변의 길이보다 무조건 길어야한다.
  두 변을 합한 값이 둘레를 절반한 것보다 같거나 작으면 안된다.
  둘레가 100인 경우 예를 들어
  한변의 길이가 50이상인 경우 성립 불가능
  
  가장긴변 >= 중간 >= 가장 짧은 길이
  가장긴변 < 중간 + 가장짧은길이
  
  */
  let oneSideMaxLen = 0;
  if (size % 2 === 0) oneSideMaxLen = size / 2 - 1;
  else if (size % 2 !== 0) oneSideMaxLen = parseInt(size / 2);

  let count = 0;

  for (let min = 1; min <= oneSideMaxLen; min++) {
    for (let middle = min; middle <= oneSideMaxLen; middle++) {
      let max = size - min - middle;
      if (middle > max) break;
      if (min + middle > max) count++;
    }
  }

  return count;
}

//Q4
/*
입력된 숫자가 홀수인지 짝수인지를 판별하는 것이 목표입니다
*/
function solution(num) {
  return num % 2 === 0 ? "짝" : "홀";
}
