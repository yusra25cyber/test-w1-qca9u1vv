// run `node index.js` in the terminal

const prompt = require('prompt-sync')();

// put your code below ⬇️
const userAge = parseFloat(prompt('what is your age?'))
function calculateTicketPrice (age) 
{
 if (userAge<12) {
   console.log('the ticket price is RM10')
   return 10
 } else if (userAge>=12) {
   console.log('the ticket price is RM20')
   return 20
 }
}

const ticketprice = calculateTicketPrice(userAge);
console.log(`your ticket price is RM${ticketprice}`)

// to test if your answer is correct
// run `node test.js` in the terminal

// if it shows:
// Test 1: Passed
// Test 2: Passed
// Test 3: Passed
// Test 4: Passed
// Test 5: Passed
// Test 6: Passed

// That means you passed! 🎉
// Otherwise, try again! 💪

// Ignore below
module.exports = calculateTicketPrice;
