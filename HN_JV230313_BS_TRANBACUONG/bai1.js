let array = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
let max = array[0];
function maxNumber(array) {
    for (let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(maxNumber(array));