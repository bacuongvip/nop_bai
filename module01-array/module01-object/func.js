//Function expresssion
let say = function () {
  console.log("hello");
};
say();
console.log("dsaf");

//4. Javascript engine : 2 loai

//bai 1
function alertMessage(){
    alert("Xin chao");
}
alertMessage();

//bai 2
function number(x){
    return x+1;
}
let n = +prompt("Nhap so ");
console.log(number(n));

//bai 3
function compare(a, b){
    if(a > b){
        console.log(`${a} > ${b}`);
    } else {
        console.log(a + b);;
    }
}
let a = +prompt("Nhap a");
let b = +prompt("Nhap b");
compare(a, b);

//bai 4
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert(result);
result = addNumbers();
alert(result);

//bai 5
let input = prompt("Nhap ten famous");
const famous = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe và Regulus"];
const star = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "UrsaMajor và Leo"];
function index(famous){
    for(let i = 0; i < famous.length; i++){
        if(input == famous[i]){
            return i;
        }
    }
    return -1;
}
console.log(star[index(famous)]);

