let str = prompt("Nhap chuoi bat ki :");

function standradString(str) {
    str = str.trim();
    str = str.toLowerCase();
    const arr = str.split(" ");
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== ""){
            newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
        }
    }
    newStr = newStr.trimEnd();
    return newStr;
}
console.log(standradString(str));