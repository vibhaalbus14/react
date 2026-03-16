//normal function
function addNormal(a, b) {
  return a + b;
}
//arrrow function
const add = (a, b) => {
  return a + b;
}; //arrow functions are called like normal functions

//template literals
//${var name} used in `` to diff bw print stmts vs variables
//can span over multiple lines

const val = add(5, 6);
console.log(`the sum of 5,6 is ${val}.`);

//... becomes spread or rest acc to context
//spread means expands
//rest means collect

var arr1 = [1, 2, 3, 4];
var arr2 = [...arr1];

var obj1 = { name: "vibha", class: "12th" };
var obj2 = { ...obj1 };
var obj3 = { sec: "b", ...obj1 }; //modification

function printNumbers(...nums) {
  ///collects into an array
  console.log(nums);
}

printNumbers(1, 2, 3, 4, 5);

//destructuring
const { name } = { ...obj2 }; // equi to const name=obj2.name
console.log(`name is ${name}`);

var [first, ...rest] = arr1; //first ele will become fisrt and the rest of the elemnst in arr1 will come under rest as an arrray itself
//note : ...in destructuring must be prest at last
console.log(`first is ${first} and rst is ${rest}`);

//async is a function that returns promise
//await is used inside async
//try and catch for errors

//promise
//.then()
//.catch()
//.finally()
