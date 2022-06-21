let myArray = [];
let arrayMax = 1000;
let limit = arrayMax + 1;
for (let i = 0; i < 10; i++) {
  myArray.push(Math.floor(Math.random()*limit));
};

const sortFunction = (arr) => {
  let sortedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let nextNum = arr[i+1];
    if (arr[i] < nextNum) {
      sortedArray.push(i);
    } 
  };
  console.log(sortedArray.join(', '))
};

sortFunction(myArray)









/*
function compareNumber(a, b) {
  let result = a - b;
  return result
}

console.log(myArray.sort(compareNumber))
*/
