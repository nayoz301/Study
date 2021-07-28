//문제1 - 5는 너무 쉬움

문제6
function removeNumberValues(obj) {
    for (let el in obj) {
        if (typeof obj[el] === 'number') {
            delete obj[el];
        }
    }
}

문제7
function removeArrayValues(obj) {
    for (let key in obj) {
        if (Array.isArray(obj[key]) === true) {
            delete obj[key];
        }
    }
}

문제8
function removeOddValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] !== 'string' && obj[key] % 2 !== 0) {
            delete obj[key];
        }
    }
}

문제9
function isPersonOldEnoughToVote(person) {
    if (person['age'] >= 18) {
        return true;
    } else {
        return false;
    }
}

문제10
function addFullNameProperty(obj) {
    // obj.fullName = obj.firstName + ' ' + obj.lastName;
    obj.fullName = `${obj.firstName} ${obj.lastName}`;
}

문제11
function removeNumbersLargerThan(num, obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] > num) {
            delete obj[key];
        }
    }
}

문제12
function countNumberOfKeys(obj) {
    return Object.keys(obj).length;
    return Object.entries(obj).length;
}

function countNumberOfKeys(obj) {
    let num = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            num = num + 1;
        }
    }
    return num;
}

문제13
//Object.entries(obj) 기억하기
function printObject(obj) {
    let result = '';
    if (Object.entries(obj).length === 0) {
        return result;
    }
    for (let key in obj) {
        result = result + `${key}: ${obj[key]}\n`
    }
    return result;
}

//이것도 잘 기억하기
function printObject(obj) {
    let n = '';
    for (let [key, value] of Object.entries(obj)) { //[key,value] of Object.entries(obj) 오브쓴다는 거 알아두기
        n = n + `${key}: ${value}\n` //여기서 바로 return해버리면 값이 안나온다. 일단 변수에 저장해두고 나중에 리턴해야함.

    }
    return n;
}

문제14
function getElementOfArrayProperty(obj, key, index) {
    let maybeArr = obj[key];
    if (Array.isArray(maybeArr) === true) {
        return maybeArr[index];
    }
}

//레퍼런스 풀이
function getElementOfArrayProperty(obj, key, index) {
    let arrProperty = obj[key];

    if (Array.isArray(arrProperty) === false) {
        return undefined;
    }
    return arrProperty[index];
}

문재15
function select(arr, obj) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        for (let key in obj) {
            if (arr[i] === key) {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

문제16
//첫번째 풀이
function getLastElementOfProperty(obj, property) {
    let n = obj[property]

    for (let key in obj) {
        if (Array.isArray(n) === false || n.length === 0) {
            return undefined;
        }

    }
    return n[n.length - 1]

}
//두번째 풀이
function getLastElementOfProperty(obj, property) {
    let n;
    for (let key in obj) {
        if (Array.isArray(obj[property]) === true && key === property) {
            n = obj[property];
            return n[n.length - 1];
        }
        return undefined;
    }

}
//세번째 풀이
function getLastElementOfProperty(obj, property) {
    if (Array.isArray(obj[property])) {
        if (obj[property].length !== 0) {
            return obj[property][obj[property].length - 1]
        }
    }
}
//다시 풀어보기 key === property 이거 잘보기

문제17
function getValueOfNthElement(arr, num) {
    if (arr.length === 0) {
        return 'no name'
    }

    if (num >= arr.length) {
        num = arr.length - 1;
    }
    let n;
    n = arr[num]; // n = {name: 'kelly'}
    return n['name']; // n.name도 가능 : 여기선 name이 변수가 아니라 고정값이기 때문에 이렇게 쓴다.
}

문제18
function getAllButLastElementOfProperty(obj, key) {
    let neww = [];
    let array;
    if (Array.isArray(obj[key])) {
        array = obj[key]
        for (let i = 0; i < array.length - 1; i++) {
            neww.push(array[i]);
        }
    }
    return neww;
}

//레퍼런스 풀이
function getAllButLastElementOfProperty(obj, key) {
    let prop = obj[key];
    if (!Array.isArray(prop) || prop.length === 0) {
        return [];
    }
    return prop.slice(0, -1);
}

문제19
//내 풀이
function extend(obj1, obj2) {
    for (let key in obj2) {
        if (!obj1[key]) { //만약에 obj1[key]=== obj2[key]일 때로 설정하면 계속 중첩이 되므로 중첩 방지를 위해 이렇게 해줌.
            obj1[key] = obj2[key];
        }
    }
}
//레퍼런스
function extend(obj1, obj2) {
    for (let key in obj2) {
        if (!(key in obj1)) {
            obj1[key] = obj2[key]
        }
    }
}

문제20
//undefined일 때 수를 더해도 NaN이라고 뜬다.
//미리 0을 할당해주고 카운트를 올려줘야 된다.
function countAllCharacters(str) {
    let obj = {};
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 0
        }
        obj[str[i]]++
    }
    return obj;
}

function countAllCharacters(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        if (!result[str[i]]) {  // 이 부분이 중요!! 객체에 key값이 없어서 현재 요소가 undefined일 때 문자열을 넣는 것은 가능하지만
            result[str[i]] = 0;   // undefined일 경우 숫자를 넣어줬을 때 NaN이 나오므로 반드시 0을 먼저 할당하고 카운트 해줘야한다.
        }
        result[str[i]]++;
    }
    return result;
}

//obj 는 str에서 어떤 문자가 나온 횟수를 담고 있는 객체입니다.
//즉 for 문을 돌릴 때 obj에서 str[i]가 key인 value를 1씩 증가시켜주면 되겠죠 (obj[str[i]]++)
//그런데 obj는 빈 객체로 시작합니다. 처음 나온 문자는 obj에 포함이 안 되어 있으니 obj[str[i]]를 한다면
//undefined가 튀어나올 겁니다. 그러므로 처음 나오는 경우에는 더하기 1을 해주기 전에 obj에 str[i]라는 키를 추가해줘야합니다.

문제21
//내가 푼 방법
function mostFrequentCharacter(str) {
    let tempCount = 0;
    let count = 0;
    let tempChar = '';
    let char = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }
        for (let n = 0; n < str.length; n++) {
            if (str[i] === str[n]) {
                tempCount++;
                tempChar = str[i];
            }
        }
        if (count < tempCount) {
            count = tempCount;
            char = tempChar;
        }
        tempCount = 0;
    }
    return char;
}

//레퍼런스 방법  
function mostFrequentCharacter(str) {
    let obj = { mostCount: 0, mostFrequent: '' }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 0;
        }
        obj[str[i]]++
        if (obj[str[i]] > obj['mostCount']) {
            obj['mostCount'] = obj[str[i]];
            obj['mostFrequent'] = str[i];
        }
    }
    return obj['mostFrequent']
}
// obj객체에 반복되는 문자와 반복횟수 를 먼저 지정해준다.
// 변수값에 ' '가 있는 경우 continue를 써서 다음루프로 넘겨버린다.
// 해당 글자가 객체에 undefined인지 확인을 하고 그렇다면 0을 속성값으로 넣어둔다.
// 그 후에 속성값을 ++ 해준다.
// 해당 키에 해당하는 밸류를 매칭해서 카운트가 더 큰지 확인하고 더 크다면 저장한다.
// 값을 반환한다.

//내가 다시 푼 것
function mostFrequentCharacter(str) {
    let result = { mostFrequent: '', mostCount: 0 };
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        } else {
            if (!result[str[i]]) {
                result[str[i]] = 0;
            }
            result[str[i]]++;
        } // 여기까지 객체 뽑기 완료

        if (result[str[i]] > result.mostCount) {
            result.mostCount = result[str[i]];
            result.mostFrequent = str[i]
        }
    }
    return result.mostFrequent;
}