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

// let age = 11;

// if (age >= 18) {
//     console.log(`You are ${age} years old. You are old enough`)
// }
// else {
//     console.log(`You are not old enough.`)
// }

// let isStudent = true;

// if (isStudent) {
//     console.log(`You are a student.`)
// } else {
//     console.log(`You are not a student`)
// }

// let age = 0;

// if (age >= 100) {
//     console.log(`Ypu are TOO OLD to enter`)
// }
// else if (age == 0) {
//     console.log(`You cant enter you are an infant`)
// }
// else if (age >= 18) {
//     console.log(`You are old enough to enter this site`)
// }
// else if (age < 0) {
//     console.log(`Your age is INVALID`)
// }
// else {
//     console.log(`You must be 18+ to enter`)
// }

// const myText = document.getElementById(`myText`);
// const mySubmit = document.getElementById(`mySubmit`);
// const resultElement = document.getElementById(`resultElement`);
// let age;

// mySubmit.onclick = function () {
//     age = myText.value;
//     age = Number(age);
//     if (age >= 100) {
//         resultElement.textContent = `You are TOO OLD to enter`
//     }
//     else if (age == 0) {
//         resultElement.textContent = `You cant enter you are an infant`
//     }
//     else if (age >= 18) {
//         resultElement.textContent = `You are old enough to enter this site`
//     }
//     else if (age < 0) {
//         resultElement.textContent = `Your age is INVALID`
//     }
//     else {
//         resultElement.textContent = `You must be 18+ to enter`
//     }
// }
//----------------------------------------------------------------------------------

// CHECK PROPERTY

// const myCheckBox = document.getElementById('myCheckBox');
// const visaBtn = document.getElementById('visaBtn');
// const masterBtn = document.getElementById('masterBtn');
// const paypalBtn = document.getElementById('paypalBtn');
// const mySubmit = document.getElementById('mySubmit');
// const subResult = document.getElementById('subResult');
// const paymentResult = document.getElementById('paymentResult');


// mySubmit.onclick = function () {
//     if (myCheckBox.checked) {
//         subResult.textContent = `You are subcribed!`
//     } else {
//         subResult.textContent = `You are NOT subcribed!`
//     }

//     if (visaBtn.checked) {
//         paymentResult.textContent = `You are paying with Visa`
//     }
//     else if (masterBtn.checked) {
//         paymentResult.textContent = `You are paying with MasterCard`
//     }
//     else if (paypalBtn.checked) {
//         paymentResult.textContent = `You are paying with Paypal`
//     }
//     else {
//         paymentResult.textContent = `You must submit a payment method`
//     }
// }
//----------------------------------------------------------------------------------

// TERNARY OPERATOR ? :

// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message)

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "U r a student" : "U r NOT a student";
// console.log(message);

// let purchaseAmount = 125;
// let message = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (message / 100)}`);
//----------------------------------------------------------------------------------

// SWITCH

// let day = 6;

// switch (day) {
//     case 1:
//         console.log('It is Monday');
//         break;
//     case 2:
//         console.log('It is Tuesday');
//         break;
//     case 3:
//         console.log('It is Wednesday');
//         break;
//     case 4:
//         console.log('It is Thursday');
//         break;
//     case 5:
//         console.log('It is Friday');
//         break;
//     case 6:
//         console.log('It is Saturday');
//         break;
//     case 7:
//         console.log('It is Sunday');
//         break;
//     default:
//         console.log(`${day} is not a valid day!`);
//         break;
// }

// let testScore = 52;
// let letterGrade;

// switch (true) {
//     case testScore >= 90:
//         letterGrade = "A"
//         break;
//     case testScore >= 80:
//         letterGrade = "B"
//         break;
//     case testScore >= 70:
//         letterGrade = "C"
//         break;
//     case testScore >= 60:
//         letterGrade = "D"
//         break;
//     default:
//         letterGrade = "F"
//         break;
// }

// console.log(letterGrade);
//----------------------------------------------------------------------------------

// STRING METHODS

// let username = "BillCypher";

// The first charater of a string
// console.log(username.charAt(0));

// The index position of a character (start from 0)
// console.log(username.indexOf("i"));

// The last index position of a character (start from 0)
// console.log(username.lastIndexOf("l"));

// The length of a string
// console.log(username.length);

// Remove blank space
// username = username.trim();
// console.log(username);

// Return the string in upercase/lowercase
// username = username.toUpperCase();
// console.log(username);
// username = username.toLowerCase();
// console.log(username);

// Repeat th string Nth times
// username = username.repeat(3);
// console.log(username);

// To check if the string starts/ends/includes with a specific character
// let result = username.startsWith(" ")

// if (result) {
//     console.log(`Your username can not start with ' '`);
// } else {
//     console.log(username);
// }

// let response = username.endsWith(" ")

// if (response) {
//     console.log(`Your username can not end with ' '`);
// } else {
//     console.log(username);
// }

// let include = username.includes(" ")

// if (include) {
//     console.log(`Your username can not include with ' '`);
// } else {
//     console.log(username);
// }

// Replace characters
// let phonenumber = "123-456-7890";

// phonenumber = phonenumber.replaceAll("-", "");
// console.log(phonenumber)

// Pads a string from the start/end with another string (multiple times) until it reaches a given length
// let phonenumber = "123-456-7890";

// phonenumber = phonenumber.padStart(15, "0");
// console.log(phonenumber)

// phonenumber = phonenumber.padEnd(15, "0");
// console.log(phonenumber)
//----------------------------------------------------------------------------------

// STRING SLICING

// const fullName = "Billy Cypher";

// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5, 11);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(lastChar);
// console.log(firstChar);
// console.log(firstName);
// console.log(lastName);

// let firstname = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstname);
// let lastname = fullName.slice(fullName.indexOf(" ")).trim();//or fullName.slice(fullName.indexOf(" ") + 1)
// console.log(lastname);

// const email = 'billy101@gmail.com'

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);
// console.log(username)
// console.log(extension)
//----------------------------------------------------------------------------------

// METHOD CHAINING

// ---- NO METHOD CHAINING ----

// let username = window.prompt("Enter your username: ")

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChar = username.slice(1);
// extraChar = extraChar.toLowerCase();

// username = letter + extraChar;

// console.log(username);

// ---- WITH METHOD CHAINING ----

// let username = window.prompt("Enter your username: ")

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);
//----------------------------------------------------------------------------------

// LOGICAL OPERATORS && - || - !

// const temp = 25;

// if (temp > 0 && temp <= 30) {
//     console.log("The weather is GOOD")
// }
// else {
//     console.log("The weather is BAD")
// }

// const temp = 250;

// if (temp <= 0 || temp > 30) {
//     console.log("The weather is BAD")
// }
// else {
//     console.log("The weather is GOOD")
// }

// const isSunny = false;

// if (!isSunny) {
//     console.log("It is cloudy ")
// } else {
//     console.log("It is sunny")
// }
//----------------------------------------------------------------------------------

// STRICT EQUALITY

// = assignment operator
// == comparision operator (compare if values are equal)
// === strict equality operator (compare if values & datatypes are equal)
// != inequality operator
// !== strict in equality operator

// const PI = 3.14;

// if (PI === "3.14") {
//     console.log("That is Pi")
// } else {
//     console.log("That is NOT Pi")
// }
//----------------------------------------------------------------------------------

// WHILE LOOP

// let username = "";

// while (username === "" || username === null) {
//     username = window.prompt(`Enter your name:`)
// }

// console.log(`Hello ${username}`)

// let username;

// do {
//     username = window.prompt(`Enter your name:`)
// } while (username === "" || username === null)

// console.log(`Hello ${username}`)

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt(`ENTER YOUR USERNAME`)
//     password = window.prompt(`ENTER YOUR PASSWORD`)

//     if (username === "Bill" && password === "pass") {
//         loggedIn = true
//         console.log(`You are in`)
//     } else {
//         console.log(`invalid infomation`)
//     }
// }

// let loggedin = true;

// do {
//     username = window.prompt(`ENTER YOUR USERNAME`)
//     password = window.prompt(`ENTER YOUR PASSWORD`)

//     if (username === "Bill" && password === "pass") {
//         loggedin = true
//         console.log(`You are in`)
//     } else {
//         console.log(`invalid infomation`)
//     }
// } while (!loggedin)
//----------------------------------------------------------------------------------

// FOR LOOP

// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// console.log(`HAPPY NEW YEAR`)

// for (let i = 1; i <= 20; i++) {
//     if (i == 13) {
//         continue
//     } else {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 20; i++) {
//     if (i == 13) {
//         break
//     } else {
//         console.log(i)
//     }
// }
//----------------------------------------------------------------------------------

// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attemp = 0;
let guess;
let running = true;

while (running) {

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        window.alert("pls enter a valid number")
    } else if (guess < minNum || guess > maxNum) {
        window.alert("pls enter a valid number")
    } else {
        attemp++;
        if (guess < answer) {
            window.alert("YOUR NUMBER IS TOO LOW")
        } else if (guess > answer) {
            window.alert("YOUR NUMBER IS TOO HIGH")
        } else {
            window.alert(`CONGRATULATION!THE NUMBER ${answer} is a correct number. IT TOOK YOU ${attemp} attemps`)
            running = false
        }
    }
}