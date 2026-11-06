// =====================================================
// JavaScript Workshop - app.js
// Open index.html with Live Server, then press F12 > Console
// =====================================================

// ---------- Task A: Greeting & Name Length ----------
// prompt() always returns a string (or null if the user cancels).
const userName = prompt("Enter your name:");
if (userName) {
  // Template string: backticks + ${ } to insert values
  console.log(`Hello, ${userName}! Your name has ${userName.length} letters.`);
} else {
  console.log("No name entered.");
}

// ---------- Task B: Temperature Conversion ----------
function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
console.log("0°C =", celsiusToFahrenheit(0));     // 32
console.log("25°C =", celsiusToFahrenheit(25));   // 77
console.log("100°C =", celsiusToFahrenheit(100)); // 212

// ---------- Master Project: Grade & Average Calculator ----------
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  return "F";
}

function calculateAverage(numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total / numbers.length;
}

const scores = [95, 72, 40, 88];
for (const s of scores) {
  console.log(`${s} -> ${getGrade(s)}`);
}
console.log("Average:", calculateAverage(scores)); // 73.75

// ---------- Task C: Largest Number (using if, not Math.max) ----------
function largest(a, b, c) {
  let max = a;          // assume the first number is the biggest
  if (b > max) {
    max = b;            // b is bigger, so update
  }
  if (c > max) {
    max = c;            // c is bigger, so update
  }
  return max;
}
console.log("largest(3, 9, 5) =", largest(3, 9, 5));    // 9
console.log("largest(10, 2, 7) =", largest(10, 2, 7));  // 10
console.log("largest(1, 4, 8) =", largest(1, 4, 8));    // 8

// ---------- Task D: Multiples of 3 from 1 to 20 + their sum ----------
let sumOfMultiples = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {              // % gives the remainder; 0 means divisible
    console.log(i);               // 3, 6, 9, 12, 15, 18
    sumOfMultiples += i;
  }
}
console.log("Sum of multiples of 3:", sumOfMultiples); // 63

// ---------- Bonus Challenge: Sherif Rostom (1 to 30) ----------
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {   // check BOTH first, or it would print only "Sherif"
    console.log("SherifRostom");
  } else if (i % 3 === 0) {
    console.log("Sherif");
  } else if (i % 5 === 0) {
    console.log("Rostom");
  } else {
    console.log(i);
  }
}

// ---------- Debugging: the 4 error types (uncomment ONE line at a time to see it) ----------
// 1) SyntaxError:    console.log("Hello";              // missing closing parenthesis
// 2) ReferenceError: console.log(userNmae);            // typo in a variable name
// 3) TypeError:      const pi = 3.14; pi = 3.15;       // cannot change a const
// 4) Logic Error (code runs, wrong result):
//    const age = prompt("Age?");                       // prompt returns a STRING
//    console.log(age + 1);                             // "25" + 1 gives "251", not 26
//    console.log(Number(age) + 1);                     // the fix: convert to a number first
