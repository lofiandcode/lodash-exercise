
const _ = {
    clamp (number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const ClampedValue = Math.min(lowerClampedValue, upper);
        return ClampedValue;
    }
};
/*
    - in take a number, lower bound, and upper bound
    - if number greater than the upper bound, return upper bound
    - if number is lower than the lower bound, return the lower bound
    - else return the number
*/





// Do not write or modify code below this line.
module.exports = _;