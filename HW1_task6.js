const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,  // Read from standard input (keyboard)
    output: process.stdout  // Write to standard output (console)
});

// Ask the user for a number
rl.question("Please enter a number: ", (input) => {
    let result = " is a prime number"
    for (let count = 2; count < input; count++) {
        let quotient = input % count;
        if (quotient == 0) {
            result = " is NOT a prime number";
        };
    };
    console.log(input + result);
    rl.close();  // Close the readline interface
});

