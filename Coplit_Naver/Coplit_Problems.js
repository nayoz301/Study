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
