function solve(firstN, secondN, thirdN) {
    'use strict';

    //  function sum(first, second) {
     // return first + second
    //  }

    const sum = (first, second) => first + second;
    const substract = (first, second) => first - second;

    const result = substract(sum(firstN, secondN), thirdN)

    console.log(result)

}

solve(23,6,10)