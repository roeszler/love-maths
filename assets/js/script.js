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
                alert('You clicked Submit!');
            } else {
                let gameType = this.getAttribute('data-type'); // if data type is something other than 'submit' (ie not === 'submit'); run ${gameType} alert
                alert(`You clicked ${gameType}`); // a template literal to return the field value of what has been clicked outside of "submit".
            } 
        });
    }
});
/*
Inside the code block 'this' refers to the button that was just clicked so if we click the addition button then 'this' is referring to that specific button just clicked.
If we click the submit button  then 'this' is referring to that specific button clicked.
*/
/**
 * Docstring: The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */
function runGame() {
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}