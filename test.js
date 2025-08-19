const calculateTicketPrice = require('./index');

// Define test cases
const testCases = [
  { age: 15, expected: 20 },
  { age: 10, expected: 10 },
  { age: 12, expected: 20 },
  { age: 5, expected: 10 },
  { age: 18, expected: 20 },
  { age: 11, expected: 10 },
];

// Run tests
testCases.forEach((testCase, index) => {
  const result = calculateTicketPrice(testCase.age);
  if (result === testCase.expected) {
    console.log(`Test ${index + 1}: Passed`);
  } else {
    console.log(
      `Test ${index + 1}: Failed (Expected: ${
        testCase.expected
      }, Got: ${result})`
    );
  }
});
