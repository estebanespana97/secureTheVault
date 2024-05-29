/* 
pseudo code section: 
Combo of the lock is 10 - 40 - 39
Create an alert that says "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
Three variables by using a plus, minus, and multiplication. 

Add comments to say what I'm doing

Create a box displaying the vault codes and the text or a popup dialog box. 
*/

// This is my alert


/* I am making my variables here with three unique arithmetic operators
I am also converting them to strings so that I can display them. 
*/

// First Calculation
const firstCode = 9+1;
const str1 = firstCode.toString();

// Second Calculation
const secondCode = 39+1;
const str2 = secondCode.toString();

// Third Calculation
const thirdCode = 13*3;
const str3 = thirdCode.toString();

const displayString = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${str1}-${str2}-${str3}`;
console.log(displayString);

alert(displayString);