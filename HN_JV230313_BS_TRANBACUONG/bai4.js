// Cach 1: Sử dụng hàm sort

const array = [1, 200, 3, 40, 5];

function compareNumbers(a, b) {
    return a - b;
}

const sortArray = array.sort(compareNumbers);
sortArray.reverse();

console.log(sortArray);


// Cach 2: Không dùng hàm sort

const array = [-5, 200, 3, 40, 5];

for (let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
        if(array[i] < array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);