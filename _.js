
const _ = {
    /*
        Ideate clamp Method
        - in take a number, lower bound, and upper bound
        - if number greater than the upper bound, return upper bound
        - if number is lower than the lower bound, return the lower bound
        - else return the number
    */
    clamp (number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const ClampedValue = Math.min(lowerClampedValue, upper);
        return ClampedValue;
    },
    /*
        Ideate inRange Method
        - check start and end
            - if no end value, set end to start and start to 0
            - if start > end, swap the values
        - if number < start || number >= end, return false
        - else, return true
    */
    inRange (number, start, end) {
        //handle if end == undefined
        //else handle if start > end
        if (!end) {
            end = start;
            start = 0;
        } else {
            if (start > end) {
                const temp = end;
                end = start;
                start = temp;
            };
        };
        //Return true if number is greater than or equal to start AND less than end.
        return (start <= number && number < end)
    },

    words (string) {
        return string.split(' ');
    },

    pad (string, length) {
        if (length <= string.length) return string;

        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - (string.length + startPaddingLength);
        const paddedString = ' '.repeat(startPaddingLength).concat(string, ' '.repeat(endPaddingLength));
        
        return paddedString;
    },

    has (object, key) {
        return object[key] !== undefined;
    }
};






// Do not write or modify code below this line.
module.exports = _;