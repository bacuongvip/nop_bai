// let str = prompt("Nhap chuoi bat ky");
// let str1 = str.toLowerCase();
// const a = str1.split(" ");
// let str2 = "";
// for (let i = 0; i < a.length; i++) {
//   let char = a[i].charAt(0).toUpperCase() + a[i].substring(1);
//   str2 += char + " ";
// }
// console.log(str2);

// const employ = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C"];

// let n = "";
// do{
//     n = prompt("Nhap C,R,U,D:");
//     if (n == "c") {
//     let add = prompt("Nhap ten nhan vien:");
//     employ.push(add);
//     alert(`Ten cac nhan vien: ${employ}`);
//     } else if(n == "r"){
//         alert(`Ten cac nhan vien: ${employ}`);
//     } else if(n == "u"){
//         let index = +prompt("Nhap vi tri update");
//         let add1 = prompt("Nhap ten moi:");
//         employ[index] = add1;
//         alert(`Ten cac nhan vien: ${employ}`);
//     } else if(n == "d"){
//         let index1 = +prompt("Nhap vi tri xoa");
//         employ.splice(index1, 1);
//         alert(`Ten cac nhan vien: ${employ}`);
//     }
// } while(n != "q");

// //bai 6
// let day = +prompt("Nhap ngay");
// let month = +prompt("Nhap thang");
// let year = +prompt("Nhap nam");
// let next_day = "";
// let next_month = "";
// let next_year = "";

// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         if(day >= 1 && day <=30) {
//             next_day = day + 1;
//             next_month = month;
//             next_year = year;
//         } else if(day == 31 && month != 12){
//             next_day = 1;
//             next_month = month + 1;
//             next_year = year;
//         } else if(day == 31 && month == 12){
//             next_day = 1;
//             next_month = 1;
//             next_year = year + 1;
//         } else {
//             alert("Khong hop le");
//         }
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         if(day >=1 && day <= 29) {
//             next_day = day + 1;
//             next_month = month;
//             next_year = year;
//         } else if(day == 30){
//             next_day = 1;
//             next_month = month + 1;
//             next_year = year;
//         } else {
//             alert("Khong hop le");
//         }
//         break;
//     case 2:
//         let check_nam_nhuan = (year % 4===0 && year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0);
//         if (check_nam_nhuan) {
//             if(day >= 1 && day <= 28){
//                 next_day = 1;
//                 next_month = month;
//                 next_year = year;
//             } else if(day == 29){
//                 next_day = 1;
//                 next_month = month + 1;
//                 next_year = year;
//             } else {
//                 alert("Khong hop le");
//             }
//         } else {
//             if(day >=1 && day <= 27){
//                 next_day = 1;
//                 next_month = month;
//                 next_year = year;
//             } else if(day == 28){
//                 next_day = 1;
//                 next_month = month + 1;
//                 next_year = year;
//             } else {
//                 alert("Khong hop le");
//             }
//         }
//         break;
//     default:
//         alert("khong hop le");
//         break;
// }
// alert(`Ngay tiep theo ${next_day}/${next_month}/${next_year}`);

// //bai7
// const bookStore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
// const cart = [
//   ["Tôi thấy hoa vàng trên cỏ xanh", 0],
//   ["Đắc nhân tâm", 0],
// ];
// let check;
// do {
//   let n = prompt("Nhap C, R, U, D:");
//   if (n == "c") {
//     let add = prompt("Nhap ten cuon sach:");
//     bookStore.push(add);
//     cart.push([add, 0]);
//     alert(`Ten + so luong: ${cart}`);
//   } else if (n == "r") {
//     alert(`Ten + so luong: ${cart}`);
//   } else if (n == "u") {
//     let index = +prompt("Nhap vi tri update");
//     let item = +prompt("Nhap so luong can them");
//     cart[index][1] += item;
//     alert(`Ten + so luong: ${cart}`);
//   } else if (n == "d") {
//     let index1 = +prompt("Nhap vi tri xoa");
//     let item2 = +prompt("Nhap so luong muon xoa");
//     bookStore.splice(index1, 1);
//     cart[index1][1] -= item2;
//     alert(`Ten + so luong: ${cart}`);
//   }
//   check = prompt("Co tiep tuc mua hang khong:");
// } while (check == "yes");
// alert("Thank you for buying");
