
// const increase = (() => {
//     let count = 0;
//     return () => ++count;
// })();

// const decrease = (() => {
//     let count = 0;
//     return () => --count;
// })();

// console.log(increase()); //1
// console.log(decrease()); //0
// console.log(decrease()); //-1
// console.log(increase()); //0
// console.log(increase()); //1
// Count 공유가 안되는구나!



// const countCloser = () => {
//     let count = 0;

//     const increse = () => ++count;
//     const decrese = () => --count;

//     return {
//         increse,
//         decrese
//     }
// };

// const counter = countCloser();

// console.log(counter.increse());
// console.log(counter.increse());
// console.log(counter.decrese());
// console.log(counter.increse());
// console.log(counter.increse());



const { increase, decrease } = (() => {
    let count = 0;
    return {
        increase: () => ++count,
        decrease: () => --count,
    };
})();

console.log(increase());
console.log(decrease());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(increase());