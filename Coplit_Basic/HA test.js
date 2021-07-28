테스트1
//첫번째 풀이
function test1(str) {
    let result = {};
    let newArr = [];
    if (str.length === 0) {
        return {};
    }
    str = str.toLowerCase();
    str = str.split(' '); //['asd','a','brunch'...]
    for (let n = 0; n < str.length; n++) {
        if (str[n] === '') {
            continue;
        } else {
            newArr.push(str[n])
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (result[newArr[i]] === undefined) {
            result[newArr[i]] = 0;
        }
        result[newArr[i]]++;
    }
    return result;
}

//두번째 풀이
function test1(str) {
    let result = {};
    str = str.toLowerCase();
    str = str.split(' ');

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '') {
            continue;
        }
        if (!result[str[i]]) {
            result[str[i]] = 0
        }
        result[str[i]]++;
    }
    return result;
}

테스트2
//첫번째 풀이
function test2(num) {
    num = String(num).split('');
    if (num[0] === '-') {
        num[1] = num[0] + num[1];
        num.shift();
    }
    num = num.reduce(function (acc, cur) {
        return parseInt(acc) + parseInt(cur);
    })
    return Number(num);
}

//두번째 풀이
function test2(num) {
    num = num.toString();
    num = num.split('');
    if (num[0] === '-') {
        num[1] = num[0] + num[1];
        num.shift();
    }
    return num.reduce(function (acc, cur) {
        return Number(acc) + Number(cur);
    }, 0)
}

테스트3
//두번째 풀이 재귀
function test3(num) {
    if (num < 10) {
        return num
    }
    num = String(num);
    num = num.split('');
    num = num.reduce(function (acc, cur) {
        return Number(acc) * Number(cur);
    })
    return test3(num)
}
//첫번째 풀이
function test3(num) {
    //각 자리수 곱하는 재귀함수 만들기
    //10보다 작을 때 까지
    let result = [];
    num = String(num);
    for (let i = 0; i < num.length; i++) {
        result.push(num[i]);
    }
    num = 1;
    for (let n = 0; n < result.length; n++) {
        num = num * Number(result[n])
    }
    if (String(num).length !== 1) {
        return test3(num);
    }
    return num;
}

테스트4
function printRole(user) {
    // Joe Blow를 클릭하면 clerk 이
    // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
    // 이 함수는 수정하지 마십시오.
    console.log(user.role);
}
// printRole(arr[i])
function test4(arr) {
    for (let i = 0; i < arr.length; i++) {
        let ulElement = document.querySelector('#container')
        let liElement = document.createElement('li');
        let aElement = document.createElement('a');
        let divElement = document.createElement('div')

        aElement.classList.add('name');
        divElement.classList.add('age')

        aElement.textContent = `${arr[i].firstName} ${arr[i].lastName}`
        divElement.textContent = `${arr[i].age}`

        liElement.append(aElement, divElement);
        ulElement.append(liElement);

        aElement.addEventListener('click', function () {
            return printRole(arr[i])
        });
        //펑션으로 안 감싸면 클릭 이벤트 줌과 동시에 함수가 실행이 되는 것 같음.
        // aElement.addEventListener('click',printRole(arr[i])) 
    }
}



테스트5
//두번째 풀이
function test5(arr) {
    let storage = [];
    let tempStorage = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            tempStorage[arr[i][j][0]] = arr[i][j][1];
        }
        storage[i] = tempStorage;
        tempStorage = {};
    }
    storage.sort(function (a, b) {
        return a.age - b.age;
    });

    for (let i = 0; i < storage.length; i++) {
        if (!storage[i].firstName) {
            result.push(`${storage[i].lastName}`)
        } else if (!storage[i].lastName) {
            result.push(`${storage[i].firstName}`)
        } else {
            result.push(`${storage[i].firstName} ${storage[i].lastName}`)
        }
    }
    return result
}

//for 많이 사용 //두번째 리뷰 때 for 대신 다른 거 이용해보기 
function test5(arr) {
    let obj = {};
    let objTemp = {};
    for (let i = 0; i < arr.length; i++) {
        for (let n = 0; n < arr[i].length; n++) {
            if (arr[i][n][0] === 'firstName' || arr[i][n][0] === 'age' || arr[i][n][0] === 'lastName') {
                objTemp[arr[i][n][0]] = arr[i][n][1]
            }
        }
        obj[i] = objTemp;
        objTemp = {}; // 추출완료
    }

    let arrAge = [];
    for (let j = 0; j < Object.keys(obj).length; j++) {
        arrAge.push(obj[j]['age'])
    }
    arrAge.sort(function (a, b) { //오름차순
        return a - b
    });
    let result = [];
    for (let k = 0; k < arrAge.length; k++) {
        for (let h = 0; h < Object.keys(obj).length; h++) {
            if (arrAge[k] === obj[h]['age']) {
                //if문 조건을 간결하게 나타낼 방법 찾아보기
                if (obj[h]['firstName'] && obj[h]['lastName']) {
                    result.push(`${obj[h]['firstName']} ${obj[h]['lastName']}`);
                } else if (!obj[h]['lastName']) { // obj!==undefined 를 이렇게 나타냄
                    result.push(obj[h]['firstName']);
                } else if (!obj[h]['firstName'])
                    result.push(obj[h]['lastName']);
            }
        }
    }
    return result;
}

테스트6
//첫번째 풀이
function test6() {
    let count = 0;

    let fibo = function (num) {
        if (num < 2) {
            return num;
        }
        return fibo(num - 1) + fibo(num - 2)
    }

    return function () {
        count++
        return fibo(count - 1)
    }
}

//두번째 풀이
function test6() {
    let count = 0
    let fibo = [0, 1]
    return function () {
        if (count === 0) {
            count++
            return fibo[0]
        } else if (count === 1) {
            count++
            return fibo[1]
        } else {
            fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
            return fibo[fibo.length - 1]
        }
    }
}

테스트7
function test7(arr, id) {
    let result = null;
    for (let el of arr) {
        if (el.id === id) {
            return el;
        } else {
            if (el.children) {
                result = test7(el.children, id)
            }
            if (result !== null) {
                return result;
            }
        }
    }
    return result;
}
