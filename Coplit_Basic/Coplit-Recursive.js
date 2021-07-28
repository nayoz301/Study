문제1
function sumTo(num) {
    if (num === 0) {
        return 0;
    }
    return num + sumTo(num - 1)
}

문제2
function isOdd(num) {
    num = Math.abs(num)
    if (num === 1) {
        return true;
    } else if (num === 0) {
        return false;
    }
    return isOdd(num - 2);
}

문제3
function factorial(num) {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

문제4
function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1
    }
    return num = fibonacci(num - 1) + fibonacci(num - 2)
}

문제5
function arrSum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + arrSum(arr.slice(1))
}

문제6
function arrProduct(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * arrProduct(arr.slice(1))
}

문제7
function arrLength(arr) {
    if (arr.isEmpty() === true) {
        return 0
    }
    return 1 + arrLength(arr.slice(1))
}

문제8
function drop(num, arr) {
    if (num > arr.length) {
        num = arr.length;
    }
    if (arr.length === 0) {
        return [];
    } else if (num === 0) {
        return arr;
    }
    return drop(num - 1, arr.slice(1))
}

문제9
//첫번째 푼 것
function take(num, arr) {
    if (num >= arr.length) {
        return arr;;
    }
    if (arr.length === 0) {
        return [];
    } else if (num === 0) {
        return [];
    }
    let head = num;
    let tail = arr.slice(0, arr.length - 1)
    return take(head, tail)
}

//두번쨰 푼 것
function take(num, arr) {
    if (arr.length === 0 || num === 0) {
        return [];
    }
    let head = arr[0];
    let tail = arr.slice(1);
    return [head].concat(take(num - 1, arr.slice(1)))
}

문제10
//내가 푼 거
function and(arr) {
    if (arr.length === 0) {
        return true;
    }
    let result;
    let head = arr[0];
    let tail = arr.slice(1);
    result = head * and(tail);
    if (result === 0) {
        return false;
    } else if (result === 1) {
        return true;
    }
}

//페어 때 같이 푼 거
function and(arr) {
    if (arr.length === 0) {
        return true;
    } //빈배열이 마지막에 올 경우 답에 무조건 트루로 나올거라고 걱정했는데 가장 내부의 함수의 값이므로 상관없다.

    let head = arr[0]
    let tail = arr.slice(1)
    return Boolean(head * and(tail));
}

//레퍼런스
function and(arr) {
    if (arr.length === 0) {
        return true;
    }
    let head = arr[0];
    let tail = arr.slice(1);

    return head && and(tail)
}

문제11
//레퍼런스
function or(arr) {
    if (arr.length === 0) {
        return false;
    }
    let head = arr[0]
    let tail = arr.slice(1);
    return head || or(tail)
}

//내가 푼 것
function or(arr) {
    if (arr.length === 0) {
        return false;
    }
    let result = '';
    let head = arr[0];
    let tail = arr.slice(1);
    result = head + or(tail);
    if (result === 0) {
        return false;
    } else if (result >= 1) {
        return true;
    }
}

문제12
//내가 푼 거
function reverseArr(arr) {
    if (arr.length === 0) {
        return [];
    }
    let head = arr[arr.length - 1]
    let tail = arr.slice(0, arr.length - 1)
    return [head].concat(reverseArr(tail))
}

//레퍼런스 코드
function reverseArr(arr) {
    if (arr.length === 0) {
        return [];
    }

    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);
    return reverseArr(tail).concat(head);
}

문제13
function findMatryoshka(matryoshka, size) {
    if (Object.keys(matryoshka).length === 0) {
        return false;
    }
    if (matryoshka.size === size) {
        return true;
    } else if (matryoshka.matryoshka) {
        return findMatryoshka(matryoshka.matryoshka, size)
    }
    return false;
}

문제14
//내가 푼 거
function unpackGiftbox(giftBox, wish) {
    if (giftBox.length === 0) {
        return false;
    }
    for (let i = 0; i < giftBox.length; i++) {
        if (Array.isArray(giftBox[i])) {
            if (unpackGiftbox(giftBox[i], wish)) {
                return true;
            }
        } else if (giftBox[i] === wish) {
            return true;
        }
    }
    return false;
}

//위에꺼랑 똑같은 데 중간 처리 방식이 조금 다름 
function unpackGiftbox(giftBox, wish) {
  for(let i = 0; i<giftBox.length;i++){
    if(giftBox[i]===wish){
      return true;
    }else if(Array.isArray(giftBox[i])){
      let result = [];
      result = unpackGiftbox(giftBox[i], wish) // 여기선 return을 바로 하게 되면 안된다.
      if (result===true){ // 바로 리턴을 하게 되면 배열안의 내용이 wish가 아닐 경우 다음으로 넘어가지 않고 바로 false를 리턴한다.
      return true;
      }
    } 
  }
  return false; 
}

//Reduce를 이용해서 풀기
function unpackGiftbox(giftBox, wish) {
  let reducer = giftBox.reduce(function(acc,cur){
    if (cur===wish){
      return true;
    } else if(Array.isArray(cur)){
      return unpackGiftbox(cur,wish)
    } else{
      return acc;
    }
  },false)
  return reducer;
}

문제15
function flattenArr(arr) {
    let result = [];
    if (arr.length === 0) {
        return [];
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flattenArr(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

