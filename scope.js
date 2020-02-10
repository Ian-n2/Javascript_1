// // // var is function scoped
// var name = 'Jill'
//
//
// var secretFunction = function(){
//   var pinCode = [0,0,0,0]
//   // console.log('pinCode is', pinCode);
//   console.log('name inside of function', name);
//
//
// }
// secretFunction();
// console.log('name outside of secretFunction', name);
// // console.log('pinCode outside of function', pinCode);
// // // it cant find things outside of the var function
//
// var fliterNamesByFirstLetter = function(names, letter){
//   var fliteredNames = [];
//   for (let name of names){
//     if (name[0] === letter) {
//       fliteredNames.push(name);
//     }
//   }// so because we chnged var to let the log below cant see the name.
//   console.log('name after forloop:', name);
//   return fliteredNames;
// }
//
// var students = ["John", "Jack", "Joe", "Kevin"]
// console.log(fliterNamesByFirstLetter(students, 'J'));
//
//
// // let BLOCK scoped this means it will only work between the {}

// let isItfive = function(number){
//   let result;
//   console.log('result start:', result);
//   if (number === 5){
//      result = true
//   }else{
//     result = false
//
//   }
//   return result
//   }
//
// console.log(isItfive(4));
// console.log(isItfive(5));
//
// let temperature = 30;
// if (temperature > 15) {
//   let jacket = false;
//   var happy = true;
// } else {
//   let jacket = true;
//   var happy = false;
// }
// console.log('jacket after if-else blocks:', jacket);
// console.log('happy after if-else blocks:', happy);

// const means it will not change (also blocked scoped)
// if you try to change it an error will occar

// const calcutlateEnergy = function(mass){
//   const speedOfLight = 299792458;
//   return mass * speedOfLight ** 2;
// }
// let energyOfMe = calcutlateEnergy(68);
// console.log('energyOfMe is' , energyOfMe);
//
// const song ={
//   title: "Raspberry Beret",
//   artist: 'Prince'
// }
// console.log('song before mutation' , song);
// song.title = 'When Doves Cry'
// song.year = 1984
// console.log('song after mutation' , song);

const helloWorld = function(){
  result = "Hello World";
};

helloWorld();
console.log(result);
