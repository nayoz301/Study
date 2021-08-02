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

//ㅇㅇ
