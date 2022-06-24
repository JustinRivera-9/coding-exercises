/*//ATTEMPT USING WITH SET ARGUMENT TO SEE LOGIC
const factorial = num => {
  let first = num * (num-1);
  let second = first * (num-2);
  let third = second * (num-3);
  let fourth = third * (num-4);
  return fourth;
}
console.log(factorial(5)); //output should be 120*/


//ATTEMP USING FOR LOOP
const factorial = num => {
    let arr = [];
  
    for (let i = num; i >= 1; i--) 
    {
        arr.push(i);
    };
  
    const initialValue = 1;
    const reduceArr = arr.reduce(
        (previousValue, currentValue) => previousValue * currentValue, initialValue)

    console.log(`${num}! = ${reduceArr}`)
  };
  
factorial(11);


// let number = 8;
// let factorial = 1;
//   if (number < 0) {
//     console.log("Cant find factorial for negative numbers")
//   } else {
//       for ( let num = 2; num <= number; num++) {
//         factorial *= num;
//       }

//       console.log(`${number}! = ${factorial}`)
//   }