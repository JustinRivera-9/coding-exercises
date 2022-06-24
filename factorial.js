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
  
factorial(30);