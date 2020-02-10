// function sayHello(greeting,name = "world!"){
//   return `${greeting} ${name}!`;
// };
// // java script will hunt for named functions before running the code.
// //so we can run the console at the top.
// // console.log('sayHello Message', sayHello());
// console.log('sayHello Message:' , sayHello('Hello','Niall'));
// console.log('sayHello Message:' , sayHello('Niall')); // this prints Niall world.
//an argument with a default value must be at the end!!
// if no name is entered it will be undefined.


// //however this wont work with an annomenous function so you must
// // put the function above the log.
// var add = function(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }
// console.log(add(1, 2));



// Task: 20 minutes
// Declare a named function that takes an array of numbers,
//  and returns the sum, or total, of all of the numbers in the array.


// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the
// given string is a key on the given object and
//  false if the object does not have a key that matches
//   the string. Store this function in an appropriately
//   named variable to invoke it.

//
// function sumFun(array){;
//   var total = 0;
//   for (number of array){
//     total += number;
//   }
//   return total
// };
//
// console.log(sumFun([1, 2, 3 ]));
//
// var doesKeyExist = function(object,key){
//   if (object[key]){
//     return true
//   } else{
//       return false
//     }
//   }
//
//
// var person = {
//   name:'Wojtek',
//   age: 30
// }
//
// console.log(doesKeyExist(person, 'name'));

//arrow function below
// var multiply = (firstNumber, secondNumber) => {
//   return firstNumber * secondNumber;
// }
// console.log(multiply(2,3));
