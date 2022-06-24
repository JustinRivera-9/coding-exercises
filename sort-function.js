// generates an array of random numbers to sort
let myArray = [];
let arrayMax = 1000;
let limit = arrayMax + 1;
for (let i = 0; i < 10; i++) {
  myArray.push(Math.floor(Math.random()*limit));
};

console.log(myArray);

const sortFunction = (arr) => {
  let sortedArray = []; // sorted numbers will push to this array
  for (let i = 0; i < arr.length; i++) {
    let nextNum = arr[i+1];
    if (arr[i] < nextNum) { sortedArray.push(i) } 
  };
  console.log(sortedArray.join(', '))
};

sortFunction(myArray)

