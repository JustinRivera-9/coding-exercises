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

    console.log(reduceArr)
  };
  
  factorial(11);


  
/*// QUESTION ABOUT ASYNC...AWAIT
const shopForBeans = require('./library.js');
  
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans(); // WHY DOESNT NEXT LINE EXECUTE IMMEDIATELY?
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
  
getBeans();
*/
  
  