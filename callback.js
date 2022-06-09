//콜백함수 = 함수안에 파라미터(매개변수)로 들어가는함수
//즉 함수에 함수가 들어가있는형태 addEventListener("", 콜백함수)

//용도 = 순차적으로 실행하고싶을 때 쓴다., 코드의 실행을 기다려주기위해 쓰인다!

//자바 스크립트는 동기적인 언어 즉 ,hoisting이 된 이후부터 코드가 순서대로 자동실행
//hoisting 은 변수선언이나 함수선언이 자동적으로 제일 먼저 시행되는 것

console.log("1");
console.log("2");
console.log("3"); //return 1 2 3

//비동기 -> 언제 코드가 실행될 지 예측할 수 없는것
//ex)setTimeout()
console.log("1");
setTimeout(function () {
  console.log("2"); //이때의 function이 콜백함수!! (지금 당장 부르진않는다.)
}, 1000);
console.log("3"); //return 1 3 2
//동기 콜백
function printlater(print) {
  print();
}
printlater(function () {
  console.log("hello");
});
//비동기 콜백
function printdelay(print, timeout) {
  setTimeout(print, timeout);
}
printdelay(function () {
  console.log("callback"), 2000;
});

//콜백함수 예제로 if문을 이용하여 만약 숫자가 같다면 이런 코드를 실행
//다르다면 저런 코드를 실행
const num = [13, 11, 42, 6];
function solution() {
  const num1 = num.sort(function (a, b) {
    //sort를 이해할 때 a,b를 그냥 앞에있는 수가 a 뒤에갈수록 b라고 생각하자
    //a-b >0 이렇게했을 때 양수가 앞으로 오고 음수가 뒤로 가니까
    //자동으로 a가 큰수가 오면서 내림차순이된다.
    return a - b; //
  });
  console.log(num1);
  function arr(a) {
    a();
  }
  if (num1[1] == 11) {
    arr(function () {
      console.log("right!!");
    });
  } else if (num1[2] !== 60) {
    arr(function () {
      console.log("miss!");
    });
  }
}
solution();

// *내가 잘모르는것%
//콜백 함수와 가장 알아여하는건 sort(function(a,b){
//  return a-b;
//  }) 에서 각 a,와 b가 하는 역할이다.

//학습 후
//  const number= [1,5,3,4,7,9,11,33,44,32]
//  number.sort(function(a,b){
//  return a-b;  일때 여기서 a,b를 console.log()하면 5,1 3,5 순서
// 즉 a가 뒤에 인자가 된다.!!!!!!!
//   })

//코드로 이해를 해보겠다.
const number = [1, 5, 3, 4, 7, 9, 11, 33, 44, 32];
number.sort(function (a, b) {
  console.log(a, b); // (5,1) (3,5) (4,3) (7,4) (9,7) 이렇게 묶임
  return a - b; //->양수면 그대로 음수면 바뀐다가 핵심 앞에 작은수가오는것이다.
});
