문제1;
function getType(anything) {
  if (anything === null) {
    return "null";
  } else if (Array.isArray(anything) === true) {
    return "array";
  } else {
    return typeof anything;
  }
}

문제2;
function getFirstElement(arr) {
  return arr[0];
}

문제3;
function getLastElement(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[arr.length - 1];
}

문제4;
function getNthElement(arr, index) {
  if (arr.length === 0) {
    return undefined;
  }
  if (arr.length <= index) {
    return "out of index range";
  }

  return arr[index];
}

문제5;
function computeSumOfAllElements(arr) {
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    n = n + arr[i];
  }
  return n;
}

문제6;
function getAllWords(str) {
  if (str.length === 0) {
    return [];
  }
  return str.split(" ");
}

문제7;
function getAllLetters(str) {
  let n = [];
  if (str.length === 0) {
    return [];
  }
  for (let i = 0; i < str.length; i++) {
    n.push(str[i]);
  }
  return n;
}

문제8;
function getLargestElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

문제9;
function getLongestWord(str) {
  // let str = 'I love coding'
  let a;
  let s = str.split(" "); // s = ['I','like','coding']
  let max = 0; // max = 1; s[0].length;
  for (let i = 0; i < s.length; i++) {
    if (max < s[i].length) {
      max = s[i].length; // max에 계속 저장하면 s[i].length만 입력이 되서 숫자가 리턴됌.
      a = s[i]; // 또 다른 변수를 입력해주고 거기에 length를 제외한 글자값만 입력되게끔 해주고 리턴해준다.
    }
  }
  return a;
}

문제10;
function getEvenNumbers(arr) {
  let result = [];
  for (n = 0; n < arr.length; n++) {
    if (Number(arr[n]) % 2 === 0) {
      result.push(Number(arr[n]));
    }
  }
  return result;
}

문제11;
function addToFront(arr, el) {
  arr.unshift(el);
  return arr;
}

문제12;
function addToBack(arr, el) {
  arr.push(el);
  return arr;
}

문제13;
function mergeArrays(arr1, arr2) {
  arr = arr1.concat(arr2);
  return arr;
}

문제14;
function getElementsAfter(arr, n) {
  if (n >= arr.length) {
    return [];
  }
  return arr.slice(n + 1); // 배열.slice(a,b)
  // a<=n<b 시작은 포함 끝은 미포함;
}

문제15;
function getElementsUpTo(arr, n) {
  if (n >= arr.length) {
    return [];
  }
  return arr.slice(0, n);
}

문제16;
function getAllElementsButFirst(arr) {
  return arr.slice(1);
}

문제17;
function getAllElementsButLast(arr) {
  return arr.slice(0, arr.length - 1);
}

문제18;
function removeFromFront(arr) {
  arr.shift();
  return arr;
}

문제19;
function removeFromBack(arr) {
  arr.pop();
  return arr;
}

문제20;
function removeFromBackOfNew(arr) {
  return (arr1 = arr.slice(0, arr.length - 1));
}

문제21;
function addToBackOfNew(arr, el) {
  brr = arr.slice(); // (0),(0,arr.length) 라고 써도 똑같음;
  brr.push(el); // push에 변수 선언하지 말기
  return brr;
}

문제22;
function addToFrontOfNew(arr, el) {
  let brr = arr.slice();
  brr.unshift(el);
  return brr;
}

문제23;
function getAllElementsButNth(arr, n) {
  let arr1 = [];
  if (n >= arr.length) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (n !== i) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

//첫번째 푼 답안
function getAllElementsButNth(arr, n) {
  if (n > arr.length) {
    return arr;
  }
  arr.splice(n, 1); // arr.splice(index,index부터 어디까지 자를건지)
  return arr;
}

문제24;
function createPhoneNumber(arr) {
  if (arr.length === 8) {
    arr.unshift(0);
    arr.unshift(1);
    arr.unshift(0);
  }

  let head = arr.slice(0, 3).join("");
  let body = arr.slice(-8, -4).join("");
  let tail = arr.slice(-4, arr.length).join("");

  return `(${head})${body}-${tail}`;
}

//레퍼런스 따라서 풀어본 것
function createPhoneNumber(arr) {
  let head = "(010)";
  const len = arr.length;
  const body = arr.slice(len - 8, len - 4).join("");
  const tail = arr.slice(len - 4, len).join("");

  if (len === 11) {
    head = `(${arr.slice(0, 3).join("")})`;
  }

  return `${head}${body}-${tail}`;
}

문제25;
function fibonacci(num) {
  if (num === 0) {
    return [0];
  }
  let n = [0, 1];
  let fib = 0;
  for (let i = 2; i <= num; i++) {
    fib = Number(n[i - 2]) + Number(n[i - 1]);
    n.push(fib);
  }
  return n;
}
