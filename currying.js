//curry function implementation
function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function(...moreArgs) {
          return curried(...args, ...moreArgs);
        }
      }
    }
  }
  
  const add = (a, b, c) => a + b + c;
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1, 2, 3));  // outputs 6
  console.log(curriedAdd(1)(2, 3));  // outputs 6
  console.log(curriedAdd(1, 2)(3));  // outputs 6
  console.log(curriedAdd(1)(2)(3));  // outputs 6
  


const adder=(a)=>(b)=>a+b;
const adderThree=(a)=>(b)=>c=>a+b+c;


const tenAdder=adder(10)
const twentyAdded=tenAdder(20)
const twentyAddedOptional=adder(10)(20)

console.log({twentyAdded,twentyAddedOptional})