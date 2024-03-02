// var cityName = prompt("Enter the name of the city:");

// if (cityName.toLowerCase() === "karachi") {
//     console.log("Welcome to the city of lights!");
// } else {
//     console.log("Welcome to " + cityName);
// }

// var gender = prompt("Enter your gender (male or female):");

// if (gender.toLowerCase() === "male") {
//     console.log("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//     console.log("Good Morning Ma'am.");
// } else {
//     console.log("Please enter a valid gender.");
// }

// var signalColor = prompt("Enter the color of the road traffic signal:");

// switch (signalColor.toLowerCase()) {
//     case "red":
//         console.log("Must Stop");
//         break;
//     case "yellow":
//         console.log("Ready to move");
//         break;
//     case "green":
//         console.log("Move now");
//         break;
//     default:
//         console.log("Invalid color. Please enter a valid road traffic signal color.");
// }

// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// if (remainingFuel < 0.25) {
//     console.log("Please refill the fuel in your car.");
// } else {
//     console.log("Your car has enough fuel.");
// }

// a.
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// b.
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// c.
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// // e.
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// // f.
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));

// var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

// var percentage = (totalObtainedMarks / totalMarks) * 100;

// var grade;

// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// document.write("<h2>Results</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");

// if (percentage >= 60) {
//   document.write("<p>Remarks: Passed</p>");
// } else {
//   document.write("<p>Remarks: Failed</p>");
// }

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) {
//     document.write("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     document.write("Close enough to the correct answer.");
// } else {
//     document.write("Sorry, incorrect guess. The secret number was " + secretNumber + ".");
// }

// var number = parseInt(prompt("Enter a number:"));

// if (number % 3 === 0) {
//     document.write(number + " is divisible by 3.");
// } else {
//     document.write(number + " is not divisible by 3.");
// }

// var number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//     document.write(number + " is an even number.");
// } else {
//     document.write(number + " is an odd number.");
// }

// var temperature = parseFloat(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//     document.write("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("It is extremely cold.");
// }

// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     document.write("Invalid input. Please enter valid numbers.");
// } else {
//     switch (operation) {
//         case '+':
//             result = firstNumber + secondNumber;
//             break;
//         case '-':
//             result = firstNumber - secondNumber;
//             break;
//         case '*':
//             result = firstNumber * secondNumber;
//             break;
//         case '/':
//             result = secondNumber !== 0 ? firstNumber / secondNumber : "Cannot divide by zero.";
//             break;
//         case '%':
//             result = secondNumber !== 0 ? firstNumber % secondNumber : "Cannot calculate remainder when dividing by zero.";
//             break;
//         default:
//             document.write("Invalid operation. Please enter a valid operation.");
//             break;
//     }

//     document.write("Result: " + result);
// }

// var city = "Karachi";
// if (city === "Karachi") {
//   console.log("The City OF Lights");
// }

// if (x === y) {
//   var z = prompt("Enter the value of z?");
// }

// var zipCode = "10010";
// if (zipCode === "10010") {
//   alert("Karachi");
// } else {
//   alert("Please write correct city");
// }

// var x = 1;
// if (x === 1) {
//   x = 10;
// }

// var firstName = prompt("Enter your first name:");
// var anotherName = "John";

// if (firstName !== anotherName) {
//     alert("No match");
// }

// let input = prompt("Enter a character (number or string):");

// if (!isNaN(input)) {
//   console.log("The input is a number.");
// } else {
//   let asciiValue = input.charCodeAt(0);

//   if (asciiValue >= 65 && asciiValue <= 90) {
//     console.log("The input is an uppercase letter.");
//   } else if (asciiValue >= 97 && asciiValue <= 122) {
//     console.log("The input is a lowercase letter.");
//   } else {
//     console.log("Invalid input.");
//   }
// }

// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//   console.log(`${num1} is larger than ${num2}.`);
// } else if (num1 < num2) {
//   console.log(`${num2} is larger than ${num1}.`);
// } else {
//   console.log("Both integers are equal.");
// }

// let number = parseInt(prompt("Enter a number:"));

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// let char = prompt("Enter a character:");

// let vowels = "aeiouAEIOU";

// if (vowels.includes(char)) {
//     console.log("The character is a vowel.");
// } else {
//     console.log("The character is not a vowel.");
// }

// let correctPassword = "securePassword";
// let userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// if (time >= 0000 && time < 1200) {
//     console.log("Good morning!");
// } else if (time >= 1200 && time < 1800) {
//     console.log("Good afternoon!");
// } else if (time >= 1800 && time < 2400) {
//     console.log("Good evening!");
// } else {
//     console.log("Invalid input. Please enter a time in 24-hour clock format.");
// }

// var firstName = prompt("Enter your first name:");
// var anotherName = "John";

// if (firstName !== anotherName) {
//     alert("No match");
// }

// var variable1 = 5;
// var variable2 = 3;

// if (variable1 >= variable2) {
//   alert("Variable1 is greater than or equal to Variable2");
// } else {
//   alert("Variable1 is less than Variable2");
// }

// var marks = parseFloat(prompt("Enter your marks:"));

// if (marks >= 90) {
//   alert("Your percentage is " + marks + "%. Grade: A");
// } else if (marks >= 80) {
//   alert("Your percentage is " + marks + "%. Grade: B");
// } else if (marks >= 70) {
//   alert("Your percentage is " + marks + "%. Grade: C");
// } else {
//   alert("Your percentage is " + marks + "%. Grade: Fail");
// }

// if (a === 10) {
//   alert("a is 10");
// } else {
//   alert("The correct value of a is " + a);
// }

// var enteredCity = prompt("Enter a city:");

// if (enteredCity.toLowerCase() === "karachi") {
//     alert("Acknowledging it is Karachi.");
// } else if (enteredCity.toLowerCase() === "lahore") {
//     alert("Acknowledging it is Lahore.");
// } else {
//     alert("Different city entered.");
// }

// var variable1 = 10;
// var variable2 = 20;

// if (variable1 < variable2 || variable1 > variable2) {
//   alert("The first variable is less than or greater than the second variable.");
// }

// var firstName = "YourFirstName";
// var lastName = "YourLastName";

// var userFirstName = prompt("Enter your first name:");
// var userLastName = prompt("Enter your last name:");

// if (userFirstName === firstName && userLastName === lastName) {
//     alert("The entered name matches.");
// }

// var password = prompt("Enter your password:");

// if (password !== "") {
//   if (password.length <= 5) {
//     alert("Password must be greater than 5.");
//   } else {
//     alert("OK");
//   }
// } else {
//   alert("Password cannot be empty.");
// }

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }

// if (a === 1 && c === "Max") {
//   alert("OK");
// }

// var variable1 = 10;
// var variable2 = 10;

// if (variable1 === variable2) {
//     if (variable1 <= variable2) {
//         alert("The conditions are met.");
//     }
// }

