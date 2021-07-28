문제1
function findTheBug(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '#') {
            return i;
        }
    }
    return undefined;
}

문제2
function sumTo(num) {
    let n = 0;
    for (let i = 1; i <= num; i++) {
        n = n + i;
    }
    return n;
}

문제3
//while 구동 조건문 설정과 그 안의 if문 설정 num = num -2
//순서가 중요하다. While하고 바로 if문으로 판별해줘야한다. 먼저 빼주게 되면 불필요한 조건 추가가 생긴다.
//예를 들어, 먼저 while내부 if조건문으로 트루 폴스를 빼기전에 먼저 설정해주면 처음에 num이 0일 경우를 설정안해줘도 된다.
//그리고 while문의 조건도 달라지게 된다. 먼저 빼는 경우 num>1이라고 했야하지만 판별 후 빼는 경우는 num>=0으로 하면됌.
function isOdd(num) {
    if (num < 0) {
        num = -num;
    }

    while (num >= 0) {
        if (num === 1) {
            return true;
        } else if (num === 0) {
            return false;
        }
        num = num - 2;
    }
}

문제4
function factorial(num) {
    let result = 1;
    if (num === 0) {
        return 1
    }
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}

문제5
function repeatString(str, num) {
    let n = '';
    for (let i = 0; i < num; i++) {
        n = n + str;
    }
    return n;
}

문제6
function makeDigits(num) {
    let n = '';
    for (let i = 1; i <= num; i++) {
        n = n + i;
    }
    return n;
}

문제7
function makeDigits2(num) {
    let n = '1'
    let i = 2;
    while (i <= num) {
        n = n + '-' + i;
        i++;
    }
    return n;
}

문제8
//다양한 풀이
function makeOddDigits(num) {
    let result = '';
    let count = num;
    let value = 1
    while (count >= 0) {
        result = result + value;
        if (count === 1) {
            return result;
        }
        value += 2;
        count -= 1;
    }
}

function makeOddDigits(num) {
    let n = '';
    let i = 1
    let t = 1
    while (i <= num) {
        n = n + t;
        t += 2;
        i += 1;
    }
    return n;
}

function makeOddDigits(num) {
    let i = 1;
    let n = '';
    let c = -1;
    while (i <= num) {
        i++;
        c = c + 2;
        n = n + String(c);
    }
    return n;
}

function makeOddDigits(num) {
    let i = 1;
    let n = '';
    while (i <= num) {
        i++;
        n = n + (2 * i - 1);
    }
    return n;
}

문제9
//처음 푼 거 나중에 푼 거
function makeMultiplesOfDigit(num) {
    let result = '';
    for (let i = 3; i <= num; i = i + 3) {
        result = result + i;
    }
    return result;
}

function makeMultiplesOfDigit(num) {
    let n = '';
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            n = n + i;
        }
    }
    return n;
}

문제10
function makeMultiplesOfDigit2(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let count = 0;
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0 && i !== 0) {
            count++;
        }
    }
    return count;
}

//레퍼런스 풀이 방법
function makeMultiplesOfDigit2(num1, num2) {
    let count = 0;
    let start = num1;
    let end = num2;

    if (num1 > num2) {
        start = num2;
        end = num1;
    }

    if (start === 0) {
        start = 1;
    }

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            count += 1;
        }
    }

    return count;
}

문제11
function countCharacter(str, letter) {
    let count = 0;
    if (str.length === 0) {
        return 0;
    }
    for (let i = 0; i < str.length; i++) {
        if (letter === str[i]) {
            count++
        }
    }
    return count;
}

문제12
//다양한 풀이
function getMaxNumberFromString(str) {
    if (str.length === 0) {
        return '0';
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(Number(str[i]));
    }
    let max = Math.max(...result)
    return String(max)
}

function getMaxNumberFromString(str) {
    if (str.length === 0) {
        return '0';
    }
    let max = Number(str[0]);
    for (let i = 0; i < str.length; i++) {
        if (max < Number(str[i])) {
            max = Number(str[i]);
        }
    }
    return String(max);
}

function getMaxNumberFromString(str) {
    if (str === '') {
        return '0';
    }
    str = Number(str);
    let n = '';
    for (let i = 1; i <= str.length; i++) {
        n = parseInt(str[0])
        if (parseInt(str[i]) > parseInt(str[i - 1])) {
            n = parseInt(str[i]);
        } else if (parseInt(str[i]) <= parseInt(str(i - 1))) {
            n = parseInt(str[i - 1]);
        }
    }
    return n;
}

문제13
function replaceAll(str, from, to) {
    let n = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === from) {
            n = n + to;
        }
        else {
            n = n + str[i];
        }
    }
    return n;
}

문제14
function characterAndNumber(word) {
    let n = '';
    for (let i = 0; i < word.length; i++) {
        n = n + word[i] + i;
    }
    return n;
}

문제15
function computePower(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result = result * base;
    }
    return result;
}

문제16
function getSumOfFactors(num) {
    let n = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            n = n + i;
        }
    }
    return n;
}

문제17
//처음에 풀 땐 어려웠는데 내 방식대로 좀 길더라도 해보니까 풀렸다.
function isPrime(num) {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    }
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            count++
        }
    }
    if (count >= 1) {
        return false;
    }
    return true;
}

//레퍼런스 방식 : num의 제곱근과 2부터 제곱근 사이 홀수로 나눠줘보는 방식
function isPrime(num) {
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    let sqrt = parseInt(Math.sqrt(num));
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

문제18
//나의 풀이법
function listPrimes(num) {
    let count = 0;
    let result = '2';
    if (num === 2) {
        return '2';
    }
    for (let i = 3; i <= num; i++) {
        for (let n = 2; n < i; n++) {
            if (i % n === 0) {
                count++
            }
        }
        if (count === 0) {
            result = result + '-' + i;
            count = 0; // count를 0으로 바꿔줘야 다음 라운드로 넘어가서 오류가 안생김.
        }
        count = 0; // count를 0으로 바꿔줘야 다음 라운드로 넘어가서 오류가 안생김.
    }
    return result;
}

//레퍼런스 풀이법은 이해는 가지만 다시 풀 때 떠오르지 않는다.
function listPrimes(num) {
    let n = '2';
    for (let i = 3; i <= num; i += 2) {
        let sqrt = parseInt(Math.sqrt(i));
        let isPrime = true;
        for (let j = 3; j <= sqrt; j += 2) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            n = n + '-' + i;
        }
    }
    return n;
}

function listPrimes(num) {
    let result = '2';
    for (let i = 3; i <= num; i += 2) {
        let sqrt = parseInt(Math.sqrt(i));
        let isPrime = true;
        for (let j = 3; j <= sqrt; j += 2) {
            if (i % j === 0) {
                isPrime = false;
                break
            } else {
                isPrime = true;
            }
        }
        if (isPrime === true) {
            result = `${result}-${i}`
        }
    }
    return result;
}

문제19
//두번째 푼 것
function makePermutations(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        for (let n = 0; n < str.length; n++) {
            result = result + `${str[i]}${str[n]},`;
        }
    }
    return result.slice(0, result.length - 1)
}

//처음 푼 것
function makePermutations(str) {
    let n = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            n = n + `${str[i]}${str[j]},`;
            if (str[i] === str[str.length - 1] && str[j] === str[str.length - 1]) {
                n = n.substring(0, n.length - 1);
            }
        }
    }
    return n;
}

문제20
function hasRepeatedCharacter(str) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        for (let n = i + 1; n < str.length; n++) {
            if (str[i] === str[n]) {
                return true;
            }
        }
    }
    return false;
}

문제21
function makeMarginalString(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        for (let n = 0; n <= i; n++) {
            result = result + `${str[n]}`
        }
    }
    return result;
}
