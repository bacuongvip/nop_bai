let month = +prompt("Nhập Tháng :");
let year = +prompt("Nhập Năm :");

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Tháng ${month} năm ${year} có 31 ngày`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Tháng ${month} năm ${year} có 30 ngày`);
        break;
    case 2:
        let check_nam_nhuan = (year % 4===0 && year%100 !==0 && year % 400 !==0) || (year%100===0 && year % 400===0);
        if (check_nam_nhuan) {
            console.log(`Tháng ${month} năm ${year} có 29 ngày`);
        } else {
            console.log(`Tháng ${month} năm ${year} có 28 ngày`);
        }
        break;
    default:
        alert(`Không tồn tại tháng ${month} năm ${year}`);
        break;
}