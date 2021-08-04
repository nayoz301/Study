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

//2

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
