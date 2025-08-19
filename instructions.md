### Coding Challenge: Movie Ticket Price Calculator 🎬

#### Task:

You need to write a small program that calculates the price of a movie ticket based on the age of the customer.

#### Instructions:

1. Use `prompt` to ask the user for their age and store it in a variable, e.g., `userAge`.

2. Create a function named `calculateTicketPrice` that takes the age as a parameter:

   - Use `if` statements to set the ticket price:
     - If the age is younger than 12 years old, the ticket price is RM 10.
     - If the age is 12 years old or older, the ticket price is RM 20.
   - Return the ticket price as a number.

3. After creating the function:
   - Create a variable, e.g., `ticketPrice`, and assign it the value returned by `calculateTicketPrice(userAge)`.
   - Use `console.log` to display a message like: "Your ticket price is RM [ticketPrice]."

#### Example:

1. If the user enters `15` as their age, the output should be:

   ```
   Your ticket price is RM 20.
   ```

2. If the user enters `10` as their age, the output should be:
   ```
   Your ticket price is RM 10.
   ```

#### Extra Challenge:

Add a check to make sure the user enters a valid age (a positive number). If the age is not valid, show a message like: "Please enter a valid age."
