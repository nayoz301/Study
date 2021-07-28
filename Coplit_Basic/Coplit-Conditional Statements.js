문제1

function isOldEnoughToDrink(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
    // TODO: 여기에 코드를 작성합니다.
}

문제2
function isGreaterThan30(temp) {
    if (temp >= 30) {
        return '에어컨을 켜야겠다!'
    } else {
        return '여름이 매우 덥네요'
    }
    // TODO: 여기에 코드를 작성합니다.
}



문제3
function equalsTen(num) {
    if (num === 10) {
        return true;
    } else {
        return false;
    }
    // TODO: 여기에 코드를 작성합니다.
}


문제4
function isGreaterThan(num1, num2) {
    if (num2 > num1) {
        return true;
    } else {
        return false;
    }
    // TODO: 여기에 코드를 작성합니다.
}

문제5
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
    // TODO: 여기에 코드를 작성합니다.
}

문제6
function isEvenAndGreaterThanTen(num) {
    if (num % 2 === 0 && num > 10) {
        return true;
    }
    return false;

    // TODO: 여기에 코드를 작성합니다.
}

문제7
function fizzBuzz(num) {
    num >= 1;
    if (num % 3 === 0 && num % 5 === 0) { // 가장 교집합이 많은 항목부터 조건문으로 써줘야한다.
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return 'No FizzBuzz';
    }
}


문제8
function miniCalculator(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    }
    else if (operator === '-') {
        return num1 - num2;
    }
    else if (operator === '*') {
        return num1 * num2;
    }
    else if (operator === '/') {
        return num1 / num2;
    }
}


문제9
function daysInMonth(month) {
    (month >= 1 && month <= 12)
    if (month === 2) {
        return 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 31;
    }
    // TODO: 여기에 코드를 작성합니다.
}


문제10
function followingDay(day) {
    (day === '월요일' || '화요일' || '수요일' || '목요일' || '금요일' || '토요일' || '일요일');
    if (day === '월요일') {
        return '화요일';
    } else if (day === '화요일') {
        return '수요일';
    } else if (day === '수요일') {
        return '목요일';
    } else if (day === '목요일') {
        return '금요일';
    } else if (day === '금요일') {
        return '토요일';
    } else if (day === '토요일') {
        return '일요일';
    } else if (day === '일요일') {
        return '월요일';
    } else {
        return '올바른 요일이 아닙니다'
    }
    // TODO: 여기에 코드를 작성합니다.
}

문제11
// 두번째 푼 방법
function isEitherEvenAndLessThan9(num1, num2) {
    if (num1, num2 < 9 && (num1 % 2 === 0 || num2 % 2 === 0)) {
        return true
    }
    return false;
}


// 첫번째 푼 방법
function isEitherEvenAndLessThan9(num1, num2) {
    if (num1 < 9 && num2 < 9) {
        if (num1 % 2 === 0 || num2 % 2 === 0) {
            return true;
        }
        return false;
    }
    return false;
}

문제12
function convertScoreToGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A'
    } else if (score >= 80 && score < 90) {
        return 'B'
    } else if (score >= 70 && score < 80) {
        return 'C'
    } else if (score >= 60 && score < 70) {
        return 'D'
    } else if (score >= 0 && score < 60) {
        return 'F'
    } else {
        return 'INVALID SCORE'
    }

}

문제13
//함수를 두 종류로 나눠서 처리하기
function plusAndMinus(score) {
    let extra = score % 10;
    if (extra <= 2) {
        return '-';
    } else if (extra >= 8) {
        return '+';
    } else {
        return '';
    }
}

function convertScoreToGradeWithPlusAndMinus(score) {
    if (score > 100 || score < 0) {
        return 'INVALID SCORE'
    }
    if (score === 100) {
        return 'A+';
    }
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else if (score < 60) {
        grade = 'F';
    }

    if (grade !== 'F') {
        grade = grade + plusAndMinus(score);
    }
    return grade;
}


문제14
// 첫번째 방법
function isPythagorean(side1, side2, side3) {
    side1, side2, side3 > 1;

    if (side1 > side2 && side1 > side3) {
        if (Math.pow(side1, 2) === side2 * side2 + side3 ** 2) {
            return true;
        }
    }
    if (side2 > side1 && side2 > side3) {
        if (Math.pow(side2, 2) === side1 * side1 + side3 ** 2) {
            return true;
        }
    }
    if (side3 > side1 && side3 > side2) {
        if (Math.pow(side3, 2) === side1 * side1 + side2 ** 2) {
            return true;
        }
    }
    return false;
}

//두번째 방법
function isPythagorean(side1, side2, side3) {
    pow1 = Math.pow(side1, 2);
    pow2 = side2 * side2;
    pow3 = side3 ** 2;

    if (pow1 === pow2 + pow3 || pow2 === pow1 + pow3 || pow3 === pow1 + pow2) {
        return true;
    }
    return false;
}


문제15
function or(expression1, expression2) {
    if (expression1 === true && expression2 === true) {
        return true;
    } else if (expression1 === true && expression2 !== true) {
        return true;
    } else if (expression1 !== true && expression2 === true) {
        return true;
    } else if (expression1 !== true && expression2 !== true) {
        return false;
    }
}


문제16
// 두번째 풀이
function addOneSecond(hour, minute, second) {
    hour >= 0 && hour < 24;
    minute >= 0 && minute < 60;
    second >= 0 && second < 60;

    second++;
    if (second === 60) {
        minute++;
        second = 0;
    }
    if (minute === 60) {
        hour++;
        minute = 0;
    }
    if (hour === 24) {
        hour = 0;
    }

    return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`
}

// 첫번째 풀이
function addOneSecond(hour, minute, second) {
    hour >= 0 && hour < 24;
    minute >= 0 && minute < 60;
    second >= 0 && second < 60;
    let h = hour;
    let m = minute;
    let s = second;
    s++;
    if (s === 60) {
        s = 0;
        m++;
        if (m === 60) {
            m = 0;
            h++;
            if (h === 24) {
                h = 0;
            }
        }
    }

    return `1초 뒤에 ${h}시 ${m}분 ${s}초 입니다`
}


문제17
//어이없었음 이렇게 쉽다니..
function isFalsy(anything) {
    return !Boolean(anything);
}


//첫번째 풀이
function isFalsy(anything) {
    // TODO: 여기에 코드를 작성합니다.
    if (anything === true) {
        return false;
    } if (anything === 1) {
        return false;
    } if (anything === "1") {
        return false;
    } if (anything === false) {
        return true;
    } else if (anything === 0) {
        return true;
    } else if (anything === -0) {
        return true;
    } else if (anything === 0n) {
        return true;
    } else if (anything === '') {
        return true;
    } else if (anything === null) {
        return true;
    } else if (anything === undefined) {
        return true;
    } else if (isNaN(NaN)) {
        return true;
    } else {
        return false;
    }
}

