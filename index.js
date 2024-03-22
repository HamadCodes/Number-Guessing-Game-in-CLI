#! /usr/bin/env node
import inquirer from "inquirer";
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * 100);
let attempts = 0;
let guess;
let running = true;
while (running) {
    guess = await inquirer.prompt([
        { message: "Guess a Number Between 1 and 100", type: "number", name: "num" }
    ]);
    if (isNaN(guess.num)) {
        console.log("Please Enter a Valid Number");
    }
    else if (guess.num < minNum || guess.num > maxNum) {
        console.log("Please Enter a Valid Number");
    }
    else {
        attempts++;
        if (guess.num < answer) {
            console.log("Too low! Try Again");
        }
        else if (guess.num > answer) {
            console.log("Too High! Try Again");
        }
        else {
            console.log(`Correct! The Answer was ${answer}. It Took you ${attempts} Attempts`);
            running = false;
        }
    }
}
