// let n = prompt("Nhap n: ");
// let x = prompt("Nhap x: ");
// if(x >= (n/2)) {
//     alert("Higher half of " + n);
// } else if(x < (n/2)){
//     alert("Lower half of " + n);
// } else {
//     alert("nhap lai n > x");
// }

// let x = prompt("Nhap x:");
// if(x % 2 == 0) {
//     alert(x + " la so chan");
// } else if(x % 2 != 0) {
//     alert(x + " la so le");
// }

// let Toan = + prompt("Nhap diem Toan");
// let Ly   = + prompt("Nhap diem Ly");
// let Hoa  = + prompt("Nhap diem Hoa");
// let Van  = + prompt("Nhap diem Van");
// let Anh  = + prompt("Nhap diem Anh");

// let avg = (Toan + Ly + Hoa + Van + Anh)/5;
// if (avg >= 9) {
//     alert("Grade A");
// } else if (avg >= 8) {
//     alert("Grade B");
// } else if (avg >= 7) {
//     alert("Grade C");
// } else if (avg >= 6) {
//     alert("Grade D");
// } else if (avg >= 4) {
//     alert("Grade E");
// } else {
//     alert("Grade F");
// };

// let year = prompt("Nhap nam");
// if ((year % 4===0 && year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)) {
//     alert("Nam nhuan");
// } else {
//     alert("Nam khong nhuan");
// }

// let a = + prompt("Nhap a");
// let b = + prompt("Nhap b");
// let operator = prompt("Nhap toan tu bat ky (+,-,*,/)");
// switch (operator) {
//     case "+":
//         console.log(a + b);
//         break;
//     case "-":
//         console.log(a - b);
//         break;
//     case "*":
//         console.log(a * b);
//         break;
//     case "/":
//         console.log(a / b);
//         break;
//     default:
//         console.log("Nhap lai");
//         break;
// }

// let a = + prompt("Nhap a");
// let b = + prompt("Nhap b");
// let c = + prompt("Nhap c");

// // Tim max
// if (a >= b && a >= c) {
//     console.log("Max la a = " + a );
// } else if (b >= a && b >= c) {
//     console.log("Max la b = " + b );
// } else if (c >= a && c >= b) {
//     console.log("Max la c = " + c );
// }

// // Kiem tra so chinh phuong
// let a = + prompt("Nhap a");
// if(Number.isInteger(Math.sqrt(a))){
//     console.log(a + " la so chinh phuong ");
// } else {
//     console.log(a + " khong la so chinh phuong ");
// }

// let a   = + prompt("Nhap a");
// let b   = + prompt("Nhap b");
// let c   = + prompt("Nhap c");

// let delta = b*b - 4*a*c;

// if(a != 0) {
//     if(delta > 0){
//         console.log("pt bac 2 co 2 nghiem: x1= " + (-b + Math.sqrt(delta)/(2*a)));
//         console.log("x2= " + (-b - Math.sqrt(delta)/(2*a)));
//     } else if(delta == 0) {
//         console.log("pt bac 2 co nghiem kep x1=x2= " + (-b/(2*a)));
//     } else {
//         console.log("pt bac 2 vo nghiem");
//     }

// } else {
//     console.log("nghiem cua pt: x= " + (-c/b));
// }

// let a   = + prompt("Nhap a");
// let b   = + prompt("Nhap b");
// let c   = + prompt("Nhap c");

// if((a+b) > c && (b+c) > a && (c+a) > b){
//     console.log("Day la tam giac");
// } else {
//     console.log("Day khong phai tam giac");
// }

//bai5
// let n = + prompt("Nhập n: ");
// for( let i = 1 ; i <= 10 ; i++){
//     console.log( n +' x '+  i +' =', n * i );
// }

//bai6
// let n = prompt("Nhập vào một số nguyên dương:");
// if (isNaN(n) || n <= 0 || !Number.isInteger(Number(n))) {
//   console.log("Bạn đã nhập vào một giá trị không hợp lệ!");
// } else {
//   console.log("Dãy số Fibonacci " + n + " phần tử là:");
//   let a = 0, b = 1;
//   for (let i = 1; i <= n; i++) {
//     console.log(a);
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
// }

// //bai6
// let number = + prompt('Nhập số : ');
// // 0, 1 ,1 ,2 ,3, 5, 8,.....
// //Khai báo các biến
// let number1 = 0;
// let number2 = 1;
// let nextNumber = 0;
// for(let i=2; i <= number; i++){
//     //Nếu số nhập vào tư
//     if(number ==0){
//         console.log(number1);
//         continue;
//     }
//     if(number ==0) {
//         console.log(number2);
//         continue;
//     }
// }
// // Gán các giá trị cho dãy
// nextNumber = number1 + number2;
// number1 = number2;
// number2 = nextNumber;
// console.log(nextNumber);

//bai7
// let n = + prompt('Nhập n: ');
// if(Number.isInteger(n)) {
//     if(n > 0 ) {
//         if(n % 2 == 0){
//         console.log(n + ' Đây là số chẵn');
//     } else {
//         console.log(n + ' Đây là số lẻ');
//     }
//     } else {
//         console.log(n + ' không là số nguyên dương')
//     }
// } else {
//     console.log(n + " không là số nguyên");
// }
// for(let i=0; i <10l i++){
//     if(i%2==0){
//         console.log('in trước log ', i);
//         break;
//         //continue;
//         console.log('in sau log ', i);
//     }
//     console.log(i);
// }

//bai8
// let n = + prompt('Nhập n: ');
// if(Number.isInteger(n) && n > 0) {

// } else {
//     console.log("Đây không phải là số nguyên dương");
// }

//bai 9
// let n = + prompt("Nhap n");
//     if(n < 2){
//         alert(n + " khong la so nguyen to");
//     }
//     let count = 0;
//     for(let i = 2; i < n; i++){
//         if(n % i == 0){
//             count++;
//         }
//     }
//     if(count == 0){
//         alert(n + " la so nguyen to")
//     }else{
//         alert(n + " khong la so nguyen to");
//     }

// //bai 10
// for(let i = 0; i < 4; i++) {
//     let str = "";
//     for(let j = 0; j < 4 ;j++){
//         str += "*";
//     }
//     console.log(str + "\n");
// }

// //bai2
// let temp = +prompt("Input temperature: ");
// if(temp > 100){
//     alert("Tang nhiet do");
// } else if(temp < 20) {
//     alert("Giam nhiet do");
// } else {
//     alert("Nhiet do la: " + temp);
// }

// //bai3
// let f0 = 0;
// let f1 = 1;
// let fibo;
// for(let i = 0; i < 20; i++) {
//     if(i == 0 || i == 1){
//         console.log(i);
//     } else {
//         fibo = f0 + f1;
//         f0 = f1;
//         f1 = fibo;
//         console.log(fibo);
//     }
// }

// //bai 4
// let f0 = 0;
// let f1 = 1;
// let n = + prompt("Nhap n");
// let fibo;
// for(let i = 0; i < n; i++) {
//     fibo = f0 + f1;
//     f0 = f1;
//     f1 = fibo;
//     if(fibo % 5 === 0){
//         console.log("so dau tien trong day chia het cho 5: " +fibo);
//         break;
//     }
// }

// //bai5
// let f0 = 0;
// let f1 = 1;
// let fibo;
// let sum = 0;
// for(let i = 0; i < 20; i++) {
//     if(i == 0 || i == 1){
//         sum += i;
//     } else {
//         fibo = f0 + f1;
//         f0 = f1;
//         f1 = fibo;
//         sum += fibo;
//     }
// }
// console.log("Tong 20 so dau tien: " + sum);

// //bai6
// let sum = 0;
// let j = 1;
// for(let i = 0; i < 30; i++){
//     sum += 7*j;
//     j++;
// }
// console.log(sum);

// //bai 7
// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0){
//         if(i % 5 === 0){
//             console.log("FizzBuzz");
//         } else {
//             console.log("Fizz");
//         }
//     } else {
//         if(i % 5 === 0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// //bai 8
// function myFunction(){
//     let min = + prompt("Nhap khoang tu min--->max : Nhap min= ");
//     let max = + prompt("Nhap khoang tu min--->max : Nhap max= ");
//     let random = Math.floor(Math.random() * (max - min) ) + min;
//     console.log(random);
//     let user = + prompt("Nhap gia tri ngau nhien " + min + "--->" + max);
//     while(user > random || user < random){
//         if(user > random && user < max){
//             alert("Số bạn nhập lớn hơn số ngẫu nhiên. Vui lòng nhập lại:");
//         }
//         if(user < random && user > min){
//             alert("Số bạn nhập bé hơn số ngẫu nhiên. Vui lòng nhập lại:");
//         }
//         user = + prompt("Nhập giá trị ngẫu nhiên" + min + "--->" + max);
//     }
//     if(user === random) {
//         alert("Chúc mừng bạn đã chọn đúng !!!")
//     }
// }

// let temp;
// const a = [5,9,8,7,20,6,444,50];
// for(let i = 0 ; i < 8; i++){
//     for(let j = 0; j < 8; j++){
//         if(a[j] > a[j+1]){
//             temp = a[j];
//             a[j] = a[j+1];
//             a[j+1] = temp;
//         }
//     }
// }
// console.log(a);

// //bai 3
// let a = [5, 7, 10, 80, 200, 500];
// console.log(a);
// let n = +prompt("Nhap N:");
// for (let i = 0; i < a.length; i++) {
//   if (n < a[0]) {
//     a.splice(0, 0, n);
//   } else if (n > a[a.length-1]) {
//     a.splice(a.length, 0, n);
//   }
//   if (n >= a[i] && n <= a[i + 1]) {
//     a.splice(i + 1, 0, n);
//   }
// }
// console.log(a);

// //bai 4
// let a = [3, 5, 5, 5, 7, 8, 22, 7, 88, 3];
// console.log(a);
// let b = [];
// let c = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] == a[j]) {
//       b.push(a[i]);
//       break;
//     }
//   }
// }
// console.log(b);
// for (let i = 0; i < a.length; i++) {
//   if (b.indexOf(a[i]) == -1) {
//     c.push(a[i]);
//   }
// }
// console.log(c);

// //bai 5
// let a = [3, 5, 5, 5, 7, 8, 22, 7, 88, 3];
// console.log(a);
// let b = [];
// let c = [];
// let d = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] == a[j]) {
//       if(b.includes(a[i]) == false){
//           b.push(a[i]);
//           break;
//         }
//       }
//     }
//   }

// console.log(b);
// for (let i = 0; i < a.length; i++) {
//   if (b.indexOf(a[i]) == -1) {
//     c.push(a[i]);
//   }
// }
// console.log(c);
// d = b.concat(c);
// console.log(d);

// const bakery = ["chocolate", "marshmallow", "cookies", "chips"];
// const cart = [];
// for (let i = 0; i < bakery.length; i++) {
//   let str = i + 1 + ". " + bakery[i];
//   console.log(str);
// }
// const a = ["chocolate", 0];
// const b = ["marshmallow", 0];
// const c = ["cookies", 0];
// const d = ["chips", 0];
// cart.push(a, b, c, d);
// let check;
// do {
//   let n = prompt("Nhap ten sp:");
//   if (bakery.includes(n)) {
//     let index = bakery.indexOf(n);
//     cart[index][1] += 1;
//     alert(cart);
//   } else {
//     alert("We don't have that item");
//   }
//   check = prompt("Co tiep tuc mua hang khong:");
// } while (check == "yes");
// alert("Thank you for buying");






