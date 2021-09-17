//Cl10
//Q1 Find pairless number
function solution(A) {
  if (A.length === 0) {
    return false;
  }
  if (A.length % 2 !== 0) {
    return false;
  }
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] === A[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

//Q2 Correct the code
function solution(A) {
  var ans = A[0];
  for (i = 1; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i];
    }
  }
  return ans;
}

//Q3 Find maximum number among the numbers digit '5' is deleted from
function solution(N) {
  if (N.length < 2) {
    return false;
  }
  N = N.toString();
  let storage = [];
  for (let i = 0; i < N.length; i++) {
    if (N[i] === "5") {
      let modN = N.slice(0, i) + N.slice(i + 1, N.length);
      storage.push(parseInt(modN));
    }
  }
  if (storage.length === 0) {
    return N;
  }
  storage.sort((a, b) => b - a);
  return storage[0];
}
