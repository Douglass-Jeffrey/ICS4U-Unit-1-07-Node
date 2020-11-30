/*
* determines the height of a wood board required to make a board foot from 
* a piece of wood with variable width and length.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-11-30
* Class WoodCutter.
*/


// Imports prompt
// NOTE: you must have installed prompt-sync
const prompt = require('prompt-sync')({sigint: true});


/**
 * Function Calculates height from length and width inputs from main.
 */
function BoardFoot (length, width) {
  const volume = 144;
  // Process: calculates height from given values
  const height = (volume / (length * width));
  return height;
}


// Accepts user length input in str form
const lengthStr = prompt('Insert the length of the board (inches) : ');
// convert the string to a number
const length = Number(lengthStr);

// Accepts user width input in str form
const widthStr = prompt('Insert the width of the board (inches) : ');
// convert the string to a number
const width = Number(widthStr);

  // Checks for invalid characters in same way as try statement
if (isNaN(length) == true) {
  console.log('Invalid character inputted');
} else if (isNaN(width) == true){
  console.log('Invalid character inputted');
} else {
  // Calls BoardFoot function
  var heightVal = BoardFoot(length, width);
  // Output: prints calculated height
  console.log('Board height given inputted values: ' + heightVal + ' inches');
}
