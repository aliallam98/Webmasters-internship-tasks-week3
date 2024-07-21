// 1-
const sumArrayOfNumbers = (arrayOfNumber) => {
  return arrayOfNumber.reduce((acc, curr) => acc + curr, 0);
};
// ---------------------------------------


// 2-
const findBiggestNumber = (arrayOfNumber) => {
  return Math.max(...arrayOfNumber);
};
//Another way
const findBiggestNumberTwo = (arrayOfNumber) => {
  return arrayOfNumber.sort((a, b) => b - a)[0]
};
// ---------------------------------------



// 3-
const reverseText = (text)=>{
    return text.split("").reverse().join("")
}
// ---------------------------------------



// 4-
const removeDuplicatedNumbers = (arrayOfNumber)=>{
    return [...new Set(arrayOfNumber)]
}

console.log(sumArrayOfNumbers([1,2,2,4,4,5]));
console.log(findBiggestNumber([1,2,2,4,4,5]));
console.log(findBiggestNumberTwo([1,2,2,4,4,5]));
console.log(reverseText("Ali Allam"));
console.log(removeDuplicatedNumbers([1,2,2,4,4,5]));


// i used node js to run this file 
