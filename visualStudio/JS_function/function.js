//Function - JS는 절차지향적인 언어이다.
//- one function === one thing
//- function name(param1, param2) {실행부.....return;}
//- function is object in JS - 프로토타입

//- hoisting = 브라우저가 런타임에 먼저 선언부로 자리를 이동시켜주는것.
test();

function test(){
  console.log('hello world!!!');
}

//test();

// Parameters
// - primitive param : pass by value
// - object param : passed by refrence

const tomato = { name: 'tamato🍅'};
console.log('before convert: '+tomato.name);

function changeName(obj){
  obj.name = 'apple🍎';
}

changeName(tomato);
console.log('after convert: '+tomato.name);

// Dafault param(added in ES6)
function showMessage(messgae, from){
  console.log(`${messgae} by ${from}`);
}

function showMessage_2(messgae, from){
  if(from === undefined){
    from = 'unknown';
  }
  console.log(`${messgae} by ${from}`);
}

function showMessage_3(messgae = 'unknown', from = 'unknown'){
  messgae = (messgae === typeof null ? 'nothing' : messgae);
  console.log(`${messgae} by ${from}`);
}

showMessage('Hi');
showMessage_2('Hi');
showMessage_3('Hi', 'apple');
showMessage_3(null, 'tomato');

// Rest param (added in ES6)
// 파라미터를 배열로 바꿔준다.
function printAll(...args){
  for(let i=0; i<args.length; i++){
    console.log(args[i]);
  }
}

printAll('Have', 'a', 'good', 'time');

// anonymous function
const print = function(){
  console.log('print');
}
print();

const printAgain = print;
printAgain();
