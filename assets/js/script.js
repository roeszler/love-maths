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
                alert('You clicked Submit!'); // to test the submit listening function
            } else {
                let gameType = this.getAttribute('data-type'); // if data type is something other than 'submit' (ie not === 'submit'); run ${gameType} alert
                // alert(`You clicked ${gameType}`); // a template literal to test and return the field value of what has been clicked outside of "submit".
                runGame(gameType);
            } 
        });
    }

    runGame('addition');

});
/*
Inside the code block 'this' refers to the button that was just clicked so if we click the addition button then 'this' is referring to that specific button just clicked.
If we click the submit button  then 'this' is referring to that specific button clicked.
*/

/**
 * Docstring: The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */
function runGame(gameType) { // game type being passed into function
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`; // The 'throw' keyword stops the game from running and logs error to console for debugging
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {
    // document.getElementById('operand1').textContent = operand1;
    // document.getElementById('operand2').textContent = operand2;
    // document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
    // document.getElementById('operand1').textContent = operand1;
    // document.getElementById('operand2').textContent = operand2;
    // document.getElementById('operator').textContent = 'x';
}

function displayDivideQuestion() {
    // document.getElementById('operand1').textContent = operand1;
    // document.getElementById('operand2').textContent = operand2;
    // document.getElementById('operator').textContent = '÷';
}