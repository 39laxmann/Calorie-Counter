const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');



let isError = false;


// To match specific characters in a string, we can use Regular Expressions or "regex" for short.
// Regex in JavaScript is indicated by a pattern wrapped in forward slashes.
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");  //replaces any +,- or whitespaces with a empty string
}

console.log(cleanInputString("++- 21"));

function isInvalidInput(str){
    const regex =/\d+e\d+/i;
    return str.match(regex);   //


}
function addEntry(){
  //adding "#" at beginning kineki we have the access through and id
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);

}

console.log(entryDropdown.value);
