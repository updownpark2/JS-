let count = 3; //이 수는 변화해야 하기 떄문에 let이라는 변수선언
const add = ++count //add는 count에 1을 더하고 count=add라는 선언
console.log(add)

const a = true;
const b = false;

console.log(`a is ${a&&b}`)//위 결과는 false가 나옴 a 는 true이나 b는 아니기 때문
console.log(`b is
   ${a||b}`)// 위 결과는 true가 나옴 a와 b중 하나만 true이면 되기 때문이다.

   //?연산자

   const haha = "sangha";
   console.log(haha==="sangha"? "yes":"no")
   //haha==="sangha"야? 맞으면 yes 아니면 no
   
   const aa = 'bb'
   switch(aa){ //aa가 case 에 걸리면 멈추는 기능
case 'ie':
console.log("wow");
break;//멈추기
case 'bb':
    console.log("that!!")//aa=bb이므로 that!!을 출력하고 멈춘다.
break;
default:
    console.log("sanme!")
    break;
   }

   //반복문
let i = 3;

   while(i>0){ //i가 0보다 크니??
       console.log(`yes is   ${i}`) //i 가 0보다 작아질 때까지
       i--; // i에 -1
   }

   // for(시작하는 문장, 반복조건, 반복 후 단계 )
ㄴ
   for( i=0; i<3; i++){ //;로 연결시키고 시작 반복조건 반복 후 순서이다.
       console.log("wow")
   }
   function add(){
    console.log("hello")
}//이렇게 함수를 선언하면 add()는 헬로만 출력할 수 있는 한계적인 함수가된다.

function add(sentence){
    console.log("sentence")
}//이렇게 함수에 입력값을 넣게되면 다양한 출력이 가능해진다.

function def(A,B="unknown"){ //두개의 파라미터가 있을 때 
console.log(`${A} to ${B}`)// 출력을 한 개만 시도하면 B의 값은 unknown이 되도록 default 한것.
}
def(sangha)

//rest parameters > 배열 형태로 전달하는것
function printAll(...args){ //...를 작성하면 배열 형태로 전달한다!
for(let i = 0; i<args.length; i++){
console.log(args[i])
}
}
print("pizza","hamberg","icecream")


//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
//{}안에서는 밖에 선언된 변수를 볼 수 있지만 {}밖에서는 안에있는 것을 볼 수없다.
//이를 local scope라고한다!

//early return은 function의 값이 조건에 맞지 않는 경우를 먼저 리턴해버리는거
function early(user){
if(user.point <=10 ){
    return;
}

}

//함수는 hoisting이 된다. 함수가 선언하기 전에 호출을 해도 사용이가능하다
// 즉 함수 선언의 위치는 크게 상관이 없다!


function random(answer,B,C){  // B,C의 콜백함수가 조건에 따라 실행됨
    if(answer === "hello"){ //answer이 맞게되면 B가 실행
        B()
    }

else{ //answer이 다르면 C가 실행
    C()
}
}
const B = function(){
    console.log("yes");
}
const C = function(){
    console.log("no"); //global scope
}
random("hello",B,C);

//arrow funtion
const simple = function(){ 
    console.log("gogosing!")
}//이 함수 선언이 아래와 같은 식으로 변하는 것이다.

const simple =()=>console.log("gogosing");
//이 Simple은 함수인데 어떤 역할을하냐면=> 이런역할을 해

const test = (a,b)=>a+b;//한줄이 아니라 다양한 일을 하게 되면

const test = (a,b)=>{ //이런 식으로 {}를 넣어줘야한다.
    const c = a+b
    return c;
}

//class!
//class는 붕어빵(데이터)을 만들 수 있는 틀!
//class 실제 데이터를 넣어 만들어진 결과물이 object!!

//class에 무엇을 넣느냐에 따라 다른 object가 형성된다.
class userinfo{
constructor(name, age){// 생선자: 필요한 데이터
    this.name=name;//this는 object네임이 됨
    this.age= age;
}
speak(){
    console.log(`${this.name}: Hi`)
}
}
const sangha = new userinfo("sangha",25);
console.log(sangha.name)
console.log(sangha.age)
// 오브젝트를 만드는 틀. 
class reusable{
constructor(cm, type, money){
    this.cm=cm;
    this.type=type;
    this.money=money;
}
}

const starbucks = new reusable("12","plastic","10,000won");
console.log(starbucks.type);

const ediya = {
    name:"asdasd",
    age:"13",
    fux:"daad"
}// 오브젝트를 반복적으로 만드는 상황이 아니라면 그냥 이렇게 만드는게 편하다.
console.log(ediya.name)

const zzZ = {name:"wow", age:"lol", face:"good"};
console.log(zzZ);
//JS라 가능한 추가법
zzZ.high=12
console.log(zzZ)
//JS라 가능한 삭제법
delete zzZ.high;
console.log(zzZ)

const person1 = { name:"aa",age:11}
const person2 = { name:"bb", age:22}
const person3 = { name: "cc", age:33}
//추가하고싶을때
function addperson(name,age){
return {name:name,
age:age
}
}
const person4 =addperson("dd",44)
console.log(person4)

//class 이용

class add{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
}
const person5 = new add("sang,12");
console.log(person5);


//for..in vs for..of
for(key in sangha){
    console.log(key)
}
//이렇게 하면 sangha에 있는 모든 key를 알아낼 수 있다.
//sangha.age, sangha.name 등등

function solution(arr) {

     for(i=0,i=arr.length-1,i++)
     { 
  const A = arr[i]
console.log(A)
     }
    return answer;
}
// ###코딩테스트 평균구하기
arr=[1,2,3,4,5]
function solution(arr) {
    let sum= 0;
    for(i=0;i<arr.length;i++)
    { 
 const A = arr[i]
sum = sum+A
    }
    let B = sum/arr.length
    return B;
}
solution(arr)

//코딩테스트 문자열 내 p와 y의 개수
const s = "ppooyy"    
function aa(s){
const dd =s.split("");
let plus1 = 0;
let plus2 = 0; 
for(i=0;i<s.length;i++){
    let Psearch = dd[i]
if(Psearch = "p"||"P"){
plus1 = plus1+1

}
else if(Psearch = "y"||"Y"){
    plus2 = plus2+1
}
}
if(plus1==plus2){
    console.log(true);
}
else {
    console.log(false);
}
}
aa(s)

const s = "hello"
const ss = s.split("");

const sss = JSON.stringify(ss)

console.log(sss);


const s = "dpooyy"    
function aa(s){
const dd =s.split("");
for(let i=0;i<s.length;i++){
    const Psearch = dd[i]
    if(Psearch=="p"||"P"){
        console.log("good")
    }
else if(Psearch=="y"||"Y"){
    console.log("Oh!")
}
   else{
       console.log("GOGO")
   }
}
}
aa(s)
const s = "pooyY"
const ss = s.split("");
let A = 0;
let B = 0;
function solution(s){
for(i=0; i<6; i++){
switch(ss[i]){

case "p"||"P":
    A= A+1
    break
case "y"||"Y":
    B=B+1
    break
}
}
if(A==B){
    console.log(true)
}
else{
    console.log(false)
}
}
solution(s)
//


const s = "ppooyY"
const ss = s.split("");
let A = [];
let B = [];
function solution(s){
for(i=0; i<6; i++){
switch(ss[i]){

case "p":
    A.push("a")
    break
    case "P":
    A.push("a")
    break
case "y":
    B.push("b")
    break
    case "Y":
        B.push("b")
        break
default:
    break
}
}
if(A.length==B.length){
    console.log(true)
}
else{
    console.log(false)
}
}
solution(s)
const s = "ssppss"
const ss = s.split("");
let A = 0;
let B = 0;
function solution(s){
for(i=0; i<6; i++){
switch(ss[i]){

case "p":
   A=A+1
    break
    case "P":
    A+A+1
    break
case "y":
  B=B+1
    break
    case "Y":
       B=B+1
        break
default:
    break
}
}
if(A==B){
    return true;
}
else{
    return false;
}
}
solution(s)

//
const s = "PpooyyY"
function solution(s){
    const ss = s.split("");
    let A = 0;
    let B = 0;
    for(i=0; i<ss.length; i++){
    switch(ss[i]){
    case "p":
       A=A+1;
        break;
    case "P":
        A=A+1;
        break;
    case "y":
      B=B+1;
        break;
    case "Y":
     B=B+1;
         break;
    default:
          break
    }
    }
 if(A==B){console.log(true)
 }
 else{
     console.log(false)
 }
    };
    solution(s)
    
///
function solution(s){
    const ss = s.split("");
    let A = 0;
    let B = 0;
    for(i=0; i<ss.length; i++){
    switch(ss[i]){
    case "p":
       A=A+1;
        break;
    case "P":
        A=A+1;
        break;
    case "y":
      B=B+1;
        break;
    case "Y":
     B=B+1;
         break;
    default:
          break
    }
    }
 if(A==B){return true
 }
 else{
     return false
 }
    };
   
    //드디어됏다!!!!!!!!!1

let s = "onetwothreefourfive"
function change(s){
const num0 = /zero/ig;
const num1 = /one/ig;
const num2 = /two/ig;
const num3 = /three/ig;
const num4 = /four/ig;
const num5 = /five/ig;
const num6 = /six/ig;
const num7 = /seven/ig;
const num8 = /eight/ig;
const num9 = /nine/ig;
const gogo = num+"i"
console.log(typeof(gogo))
}
change(s)
//
let s = "one4seveneight"
function change(s){
let arr =[/zero/ig,/one/ig,/two/ig,/three/ig,/four/ig,/five/ig,/six/ig,/seven/ig,/eight/ig,/nine/ig];
for(let i =0;i<10;i++){
let abc = (s.replaceAll(arr[i],i))
s= abc
}
return(s)
}
change(s)
//
function change(s){
    let arr =[/zero/ig,/one/ig,/two/ig,/three/ig,/four/ig,/five/ig,/six/ig,/seven/ig,/eight/ig,/nine/ig];
    for(let i =0;i<10;i++){
    let abc = (s.replaceAll(arr[i],i))
    s= abc
    }
    return(s)
    }
    //
let s = "23four5six7"
    function solution(s) {
        let arr =[/zero/ig,/one/ig,/two/ig,/three/ig,/four/ig,/five/ig,/six/ig,/seven/ig,/eight/ig,/nine/ig];
         for(let i =0;i<10;i++){
         let answer = (s.replaceAll(arr[i],i))
         s= answer
         }
         const AA = JSON.stringify(s)
     console.log(typeof(AA))
     return AA
         }
         solution(s)
//테스트
         let s = "23four5six7"
    function solution(s) {
        let arr =[/zero/ig,/one/ig,/two/ig,/three/ig,/four/ig,/five/ig,/six/ig,/seven/ig,/eight/ig,/nine/ig];
         for(let i =0;i<10;i++){
         let answer = (s.replaceAll(arr[i],i))
         s= answer
         }
         return s
         }
         solution(s)
         console.log(typeof(s))