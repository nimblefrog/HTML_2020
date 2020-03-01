// JavaScript 註解 Ctrl + C
// 跳出一個彈出視窗
// alert("Hello");
// alert('World');

//宣告變數
var userName = 'Ella';
var greeting = 'Hello';
//console.log(userName + ' ' + greeting);
//console.log(`${greeting} Andy, 今天過得如何?`);

// 在瀏覽器的console印出一段文字
//console.log('Hello World');

//資料型別:數字(number)
var num1 = 10;
var num2 = 20;
var num3 = '30';

//console.log(num1 + num3); //1030
//取得變數的資料型別 typeof
// console.log(typeof num1);
// console.log(typeof num3);

//把文字轉為整數 parseInt(變數)
//把文字轉為浮點數 paresFloat(變數)
//console.log(num1 + parseInt(num3));


// 物件 Object {}
var user1 = {
    name: 'Josh',
    age: 30,
    email: 'Josh@gmail.com',
    phone: '0912-345678',
    address: {
        city: '台北市',
        district: '文山區',
        zip: '103'
    }
};

console.log(typeof user1);
console.log(user1);
//物件.屬性名稱
console.log(user1.name);
console.log(user1.age);
console.log(user1.email);
console.log(user1.address);
console.log(user1.address.city);