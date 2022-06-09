const array = [];
//배열은 같은타입의 인덱스를 넣는 것이 바람직하다.
const array1 = [1,2,3,4,5]
const array2 = ["a","b","c","d","e"]
//배열은 삭제와 추가가 자유롭다.

const fruits = ["🍎","🥭",🍌];
console.log(fruits);
console.log(fruits["key!"])
//배열에 해당하는 인덱스숫자를 key

//*.looping over an array
const fruits = ["🍎","🥭","🍌"];
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//for of 를 사용
const fruits = ["🍎","🥭","🍌"];
for(let fruit of fruits){
    console.log(fruit)
}
//for each를 사용
const fruits = ["🍎","🥭","🍌"];
fruits.forEach(function(fruit,index){
    console.log(fruit,index)
}) //각각의 인덱스에 함수를 적용한다.
const fruits = ["🍎","🥭","🍌"];
fruits.forEach((fruit)=> console.log(fruit));
//위와같은 anonymous 함수의 경우는 애로우 함수로 적용이가능하다.

//*array - add,delete,copy
//1. 아이템을 뒤에서부터!
//넣기 : push
const fruits = ["🍎","🥭","🍌"];
fruits.push("🍒")//["🍎","🥭","🍌","🍒"]
//빼기 
fruits.pop();["🍎","🥭","🍌"]
//맨뒤에 체리가빠짐  한 번 더하면 바나나가 빠짐
fruits.pop();//["🍎","🥭"]

//2.아이템을 앞에서부터!
//넣기 : unshift
fruits.unshift("🫐")
//빼기
fruits.shift()

//**push와 pop은 굉장히 빠르다. 그러나 unshift와 shift는 느리다.

//3.지정된 아이템을 삭제하자!
const fruits = ["🍎","🥭","🍌","🍓"];
fruits.splice(1)//.splice(여기부터,몇개?,추가할거)
console.log(fruits)

const fruits = ["🍎","🥭","🍌","🍓"];
fruits.splice(0,3,"🍆","🍇")
console.log(fruits); //추가도 가능하다.["🍆","🍇","🍓"]

//4.배열 + 배열 
const fruits = ["🍎","🥭","🍌","🍓"];
const fruits2= ["🍑","🍍"];
const newfruits = fruits.concat(fruits2)
console.log(newfruits);

//5.search
const fruits = ["🍎","🥭","🍌","🍓"];
console.log(fruits.indexOf("🍌"));//결과값 2 

console.log(fruits.includes("🍎")) // 결과값 true

const fruits = ["🍎","🥭","🍌","🍓","🍎"];
console.log(fruits.lastIndexOf("🍎"))//결과값 4 이는 찾고자하는마지막 데이터를 구함



    
