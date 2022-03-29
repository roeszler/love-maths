// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button')
/*
The loop starts in position 0 (let i = 0)
The loop runs as long as i < buttons.length array
The loop automatically increments i for each run

for (let i = 0; i < buttons.length; i++)

The following for (let button of buttons) loop is a more modern way of writing the above. 
It goes through the above button's' array and returns each element in the array. 
This will be stored in that variables button_ on each iteration. 
*/
    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') { // if data type is the same value and type as 'submit'; run submit alert 
                // alert('You clicked Submit!'); // to test the submit listening function
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type'); // if data type is something other than 'submit' (ie not === 'submit'); run ${gameType} alert
                // alert(`You clicked ${gameType}`); // a template literal to test and return the field value of what has been clicked outside of "submit".
                runGame(gameType);
            } 
        });
    }
/*
Press 'Enter' to submit:
Get answer box element, add a keydown listner to, then send in an event object via a function(). 
Then check a property of the event, is the keydown event equal in valus and type to the 'Enter' key?
If it was, we are going to call our chackAnswer() function that is behind the submit process  
*/
    document.getElementById('answer-box').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    })

    runGame('addition');

})
/*
Inside the code block 'this' refers to the button that was just clicked so if we click the addition button then 'this' is referring to that specific button just clicked.
If we click the submit button  then 'this' is referring to that specific button clicked.
*/

/**
 * Docstring: The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */
function runGame(gameType) { // game type being passed into function

    document.getElementById('answer-box').value = ''; // sets the answer box to " " after each submission

    document.getElementById('answer-box').focus(); // returns the cursor to the ready box after each submission

    // creates two random numbers between 1 and 25 (including 25)
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'division') {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`; // The 'throw' keyword stops the game from running and logs error to console for debugging
    }
}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value); // .value because its an input we need to get value (not innerText) from it
    let calculatedAnswer = calculateCorrectAnswer(); // returns an array that is from the correct answer calculation 
    let isCorrect = userAnswer === calculatedAnswer[0]; // setting isCorrect variable that is either true or false comparing to the users inputed answer

    if (isCorrect) {// shorthand for if (isCorrect = true);
        alert('Hey! You got it right! :D'); // true
        incrementScore();
    } else {
        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`); // if false
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]); // to run another game of the same type after this one; however use the second element [1] from our calculated correct answer array.
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc)
 * directly from the DOM and returns the correct answer.
 */
function calculateCorrectAnswer() {
/*
parse - to analyse (a string or text) into logical syntatic components. to get the inner text,
the value of the element with the ID of  operand 1 from our HTML. This is basically 
a reverse of what we did before when we set the  values of operand 1, operand 2 and operator.

parseInt to change the 'string' (user entered) data from the DOM treat the value as a whole integer
so we can perform mathmatical operations on it (as a number, not a string)
*/
    let operand1 = parseInt(document.getElementById('operand1').innerText); // innerText retrieves or sets the text content of element operand1
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText; 

    if (operator === '+') {// determing game type by operator
        return [operand1 + operand2, 'addition']; // returns an Array
    } else if (operator === 'x') {
        return [operand1 * operand2, 'multiply']; // returns an Array
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract'];
    } else if (operator === '÷') {
        return [operand1 / operand2, 'division']; // keeping each value divisible by one another
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}
/**
 * Gets the cuurrent score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText); // could use innerContent also
    document.getElementById('score').innerText = ++oldScore;
     // could have used 'oldScore +1' 
    // document.getElementById('score').innerText = oldScore++; // 'writes it back to DOM' then 'adds one'...
    /*
    With oldScore++; JavaScript will get the ID of 'score', then set the inner text to the old score variable
    and then add one to old score. The result is that we never see the score being updated, because it's been written back to the DOM before it has had one added to it. 
    */
}

/**
 * Gets the cuurrent tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText); // could use innerContent also
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
// Js ternary if function: if operand 1 is bigger, return that. If operand 2 is bigger, return that:
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 * operand2; // make divison evenly divisable (ie: without decimals)
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '÷';
}