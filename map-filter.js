// const numbers = [12, 23, 34, 12, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// MAp:
// const numbers = [12, 23, 34, 12, 8];
// function square(element) {
//     return element * element;
    
// }
// numbers.map(function(element, index, array) {
//     console.log(element, index, array);
// })

//step-2
// const numbers = [12, 23, 34, 12, 8];
// function square(element) {
//     return element * element;
    
// }
// const result = numbers.map(function(element) {
//     return element * element;
// })
// console.log(result);


//step-3:

// numbers = [12, 23, 34, 12, 8];
// const result = numbers.map(x => x * x);
// console.log(result);


//filter:

// numbers = [12, 23, 34, 12, 8];
// const bigger = numbers.filter(x => x > 15);
// console.log(bigger);


//find:

numbers = [12, 23, 34, 12, 8];
const bigger = numbers.find(x => x > 15);
console.log(bigger);
