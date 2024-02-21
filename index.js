// console.log(`Hello world`);
// console.log(`javascript`);

// window.alert(`Alert`);
// window.alert(`Alert Alert`);

// document.getElementById(`myH1`).textContent = 'Hello';
// document.getElementById(`myP`).textContent = 'Hello World';

//----------------------------------------------------------------------------------

//declare
// let x;
//assign
// x = 100;
// console.log(x);

// let y = 12321;
// console.log(y);

// NUMBER

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(`Im ${age} years old and my gpa is ${gpa}`);
// console.log(`The price is $${price}`)

// console.log(typeof age);

//----------------------------------------------------------------------------------

// STRING

// let myFirstName = 'Pham';
// let email = 'hoang123@gmail.com'

// console.log(typeof myFirstName);
// console.log(myFirstName)
// console.log(`My email is ${email}`)

//----------------------------------------------------------------------------------

// BOOLEAN

// let online = false;
// let isEating = true;

// console.log(typeof online);
// console.log(`Hoang is online:  ${online}`);
// console.log(`Is he eating: ${isEating}`);


// let fullName = "Hoang Pham";
// let age = 22;
// let isStudent = true;

// document.getElementById("p1").textContent = `My name is ${fullName}`;
// document.getElementById("p2").textContent = `Im ${age} years old`;
// document.getElementById("p3").textContent = `Am I a student: ${isStudent}`;

//----------------------------------------------------------------------------------

// OPERATORS

// let students = 30;
// student = student + 1;
// student = student - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudent = students % 3;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students %= 2;

// students++;
// students--;



// console.log(students);
// console.log(extraStudent);

/*
    operators precedence
    1. parenthesis - ()
    2. exponents - **
    3. multiplication & division & modulo - * & / & %
    4. addition & subtraction - + & -
*/

// let result = 6 / 2 ** (2 + 5);

// console.log(result);

//----------------------------------------------------------------------------------

// ACCEPT USER INPUT

// 1. window prompt

// let userName = window.prompt("What's your username?")

// console.log(userName);

// 2. HTML textbox

// let userName;

// document.getElementById("mySubmit").onclick = function () {
//     userName = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${userName}`;
// }

//----------------------------------------------------------------------------------

// TYPE CONVERSION

// let age = window.prompt('How old are you?');
// age = Number(age)

// age += 1;
// console.log(age);

// let x = "0";
// let y = "0";
// let z = "0";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//----------------------------------------------------------------------------------

// CONST

// const PI = 3.14159;
// let radious;
// let circumference;

// document.getElementById("mySubmit").onclick = function () {
//     radious = document.getElementById("myText").value;
//     radious = Number(radious);
//     circumference = 2 * PI * radious;
//     document.getElementById("myH3").textContent = circumference + "cm";
// }

//----------------------------------------------------------------------------------

// COUNTER PROGRAM

// const descBtn = document.getElementById('descBtn');
// const resetBtn = document.getElementById('resetBtn');
// const increaseBtn = document.getElementById('increaseBtn');
// const countLabel = document.getElementById('countLabel');
// let count = 0;

// increaseBtn.onclick = function () {
//     count++;
//     countLabel.textContent = count;
// }

// descBtn.onclick = function () {
//     count--;
//     countLabel.textContent = count;
// }

// resetBtn.onclick = function () {
//     count = 0;
//     countLabel.textContent = count;
// }

//----------------------------------------------------------------------------------

// MATH

// let x = 3;
// let y = 2;
// let z;
// let v = 1;

// lam tron
// z = Math.round(x);
// lam tron xuong
// z = Math.floor(x);
// lam tron len
// z = Math.ceil(x);
// loai bo phan sau dau thap phan
// z = Math.trunc(x);
// nhan x vs y
// z = Math.pow(x, y);
// can bac hai
// z = Math.sqrt(x);
// logarit
// z = Math.log(x);
// sin
// z = Math.sin(x);
// cos
// z = Math.cos(x);
// tan
// z = Math.tan(x);
// tuyet doi
// z = Math.abs(x);
// sign
// z = Math.sign(x);
// display max
// let max = Math.max(x, y, v);
// display min
// let min = Math.min(x, y, v);

// console.log(min);

//----------------------------------------------------------------------------------

// RAMDOM NUMBER GENERATOR

// const min = 50;
// const max = 100;

// give random number from 1 - 6 with only integer
// let randomNum = Math.floor(Math.random() * 6) + 1;

// give random number from 50 - 100 with only integer
// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// const myBtn = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myBtn.onclick = function () {
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;

//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

//----------------------------------------------------------------------------------

// IF STATEMENT 

