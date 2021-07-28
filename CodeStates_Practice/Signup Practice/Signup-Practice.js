let elInputUsername = document.querySelector('#username');
let elSuccessMessage = document.querySelector('.success-Message');
let elFailureMessage = document.querySelector('.failure-Message');
let elSignUp = document.querySelector('#sign-up');
let elCheckBox = document.querySelector('#check-box')

console.log(elSuccessMessage)

elInputUsername.onkeyup = function () {
    console.log('뭔가 입력하고 있군요?')
    if (elInputUsername.value.length===0){
        elSuccessMessage.classList.add('hide')
        elFailureMessage.classList.add('hide');
    }
    else if (elInputUsername.value.length>=1 && elInputUsername.value.length<=3){
        elSuccessMessage.classList.add('hide')
        elFailureMessage.classList.remove('hide');
    }
    else {
        elSuccessMessage.classList.remove('hide')
        elFailureMessage.classList.add('hide');
        
    }
}

elCheckBox.onclick = function () {
    alert("약관을 내용을 숙지하셔야 합니다.")
}

elSignUp.onclick = function () {
    alert("회원가입을 축하드립니다.")
}

// function myFunction() {
//     alert("You pressed a key inside the input field");
//   }
