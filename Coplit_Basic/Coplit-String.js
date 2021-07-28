문제1
function getFullName(firstName, lastName) {
    if (firstName.length <= 10 && lastName.length <= 10) {
        return firstName + ' ' + lastName; // 백팁도 가능
    }
}

문제2
function checkAge(name, age) {
    if (name.length <= 10 && age > 0 && age < 100) {
        if (age >= 21) {
            return 'Welcome, ' + name + '!';
        } else if (age <= 21) {
            return 'Go home, ' + name + '!';
        }
    }
}

문제3
function getLengthOfWord(word) {
    if (word.length < + 10) {
        return word.length
    }
}

문제4
function computeAverageLengthOfWords(word1, word2) {
    if (word1.length <= 10 && word2.length <= 10) {
        return (word1.length + word2.length) / 2;
    }
}

문제5
function computeAverageLengthOfWords2(word1, word2) {
    if (word1.length <= 10 && word2.length <= 10) {
        return Math.floor((word1.length + word2.length) / 2);
    }
}

문제6
// 두번째로 푼 방법: word1을 가장 짧은 수가로 가정하고 서로 대소를 비교하며 값을 구하기
function findShortestOfThreeWords(word1, word2, word3) {
    let shortestword = word1

    if (word1.length > word2.length) {
        shortestword = word2;
        if (word2.length > word3.length) {
            shortestword = word3;
        }
    } else if (word1.length > word3.length) {
        shortestword = word3;
    }
    return shortestword;
}

// 첫번째로 푼 방법: Math.min을 이용하여 길의의 최소값을 구하는 방법.
function findShortestOfThreeWords(word1, word2, word3) {
    let w1 = word1.length;
    let w2 = word2.length;
    let w3 = word3.length;
    if (Math.min(w1, w2, w3) === w1) {
        return word1;
    } else if (Math.min(w1, w2, w3) === w2) {
        return word2;
    } else if (Math.min(w1, w2, w3) === w3) {
        return word3;
    }
    // TODO: 여기에 코드를 작성합니다.
}

문제7
function isOddLength(word) {
    let w = word.length;
    if (w <= 10) {
        if (w % 2 !== 0) {
            return true;
        }
        return false;
    }
    return false;
}

문제8
function areValidCredentials(name, password) {
    if (name.length <= 10 && password.length <= 20) {
        if (name.length >= 3 && password.length >= 8) {
            return true;
        }
        return false;
    }
}

문제9
//첫번째 풀이: 가장 짧은 수를 가정해서 다른 수와 비교하는 방법
function findMinLengthOfThreeWords(word1, word2, word3) {
    let w1 = word1.length;
    let w2 = word2.length;
    let w3 = word3.length;
    let shortestLen = w1;

    if (w1 > w2) {
        shortestLen = w2;
        if (w2 > w3) {
            shortestLen = w3;
        }
    } else {
        if (w1 > w3) {
            shortestLen = w3;
        }
    }
    return shortestLen;
}

//두번째 풀이: 단어를 출력하는 게 아니고 단어 길이를 출력하는 거라서 다 넣고 Math.min 하면 된다.
function findMinLengthOfThreeWords(word1, word2, word3) {
    if (word1.length, word2.length, word3.length <= 20) {
        return Math.min(word1.length, word2.length, word3.length)
    }
}

문제10
function takeLetters(num, str) {
    if (num >= str.length || str === '') {
        return str;
    }
    else {
        return str.substring(0, num); //substr까지만 써도 됌. slice로 써도 됌.
    }
}

문제11
function dropLetters(num, str) {
    return str.slice(num, str.length);
}

문제12
//toUpperCase나 toLowerCase 둘 중 하나로 통일해서 비교하기
function compareOnlyAlphabet(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}

문제13
//백팁 사용해보기
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return `${num1}은(는) ${num2}보다 큽니다`
    } else if (num1 < num2) {
        return `${num1}은(는) ${num2}보다 작습니다`
    } else {
        return '두 수는 같습니다'
    }
}

문제14
function compareNumberStrings(numStr1, numStr2) {
    let a = Math.max(Number(numStr1), Number(numStr2))
    a = a + 5;
    return String(a);
}

문제15
function showTime(hour, min, sec) {
    return `현재 시각은 ${hour}시 ${min}분 ${sec}초 입니다.`
}

문제16
//Math.abs()는 절대값을 구하는 메소드
function computeDifference(num1, num2) {
    let sub = num1 - num2;
    sub = Math.abs(sub);
    return `${num1}, ${num2}의 차이는 ${sub}입니다.`
}

문제17
//hour과 day를 전부 가장 작은 단위인 min으로 바꿔주는 게 포인트
function makeLastSeenMsg(name, period) {
    let min = period;
    const hour = 60;
    const day = 24 * 60;
    if (min < hour) {
        return `${name}: ${min}분 전에 접속함`
    }
    if (min >= hour && min < day) {
        min = Math.floor(min / hour);
        return `${name}: ${min}시간 전에 접속함`
    }
    if (min >= day) {
        min = Math.floor(min / day);
        return `${name}: ${min}일 전에 접속함`
    }
}

