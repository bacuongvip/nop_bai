// //bai 1
// let n = prompt("Nhap n:");
// function square(x){
//     return Math.pow(x, 2);
// }
// console.log(`Binh phuong ${n} la ${square(n)}`);

// //bai 2
// let height = +prompt("Nhap chieu dai");
// let width = +prompt("Nhap chieu rong");
// function perimeter(height, width){
//     return (height + width) * 2;
// }
// function acr(height, width){
//     return height * width;
// }
// console.log(`Chu vi ${perimeter(height, width)}`);
// console.log(`Dien tich ${acr(height, width)}`);

// //bai 3
// let a = +prompt("Nhap giai thua");
// function giai_thua(x) {
//     if(x > 1){
//         return x * giai_thua(x - 1);
//     } else {
//         return 1;
//     }
// }
// console.log(giai_thua(a));

// //bai 4
// let type = +prompt("Nhap bat ki");
// function check(type){
//     if(Number.isInteger(type)){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(check(type));

// //bai 5
// let x = prompt("Nhap x");
// let y = prompt("Nhap y");
// let z = prompt("Nhap z");

// function number(x, y, z){
//     if(x <= y && x <= z){
//         return x;
//     }
//     if(y <= x && y <= z){
//         return y;
//     }
//     if(z <= y && z <= y){
//         return z;
//     }
// }
// console.log(`So nho nhat ${x} ${y} ${z} la ${number(x, y, z)}`);

// //bai 6
// let type = +prompt("Nhap bat ki");
// function check(type){
//     if(Number.isInteger(type) && type > 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(check(type));

// //bai 7
// let a = prompt("Nhap a");
// let b = prompt("Nhap b");
// function swap(a, b){
//     temp = a;
//     a = b;
//     b = temp;
//     console.log("a:", a, "---b:", b);
// }
// swap(a, b);

// //bai 8
// let a = [1,2,3,4,5,6];
// function rever(a){
//     a.reverse();
//     console.log(a);
// }
// rever(a);

//bai 9
const char = ["a", "b", "d", "c", "a", "a", "d", "g"];
let n = prompt("Nhap ki tu bat ki");
function check(c) {
    let sum = 0;
    for(let i = 0; i < char.length; i++){
        if(char[i] == c){
            sum += 1;
        }
    }
    if (sum != 0){
        return sum;
    } else {
        return 0;
    }
}
console.log(`Co ${check(n)} ki tu ${n}`);