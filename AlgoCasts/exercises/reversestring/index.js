// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
  let reversed = "";
  for (char of str) {
   reversed = char + reversed;
  }
  return reversed;
}

module.exports = reverse;









// function reverse(str) {
// return str.split('').reverse().join('');
// }

// function reverse(str) {
// let reversed = '';
// for (let character of str) {
//   reversed = character + reversed;
// }
// return reversed;
// }

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '')
// }

// for a more condensed version of the above
//
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }
