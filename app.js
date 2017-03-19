var emptyArray = [];
var allTheThings = ['cats', 'dogs', 42, ['foo', 'bar'], true, function() { console.log('hello')}];

var emptyArray = [];
var nonEmptyArray = [1, 'two'];

var allTheThings = ['cats', 'dogs', 42, ['foo', 'bar'], true, function() { console.log('hello')}];
console.log("The first thing is " + allTheThings[0]);

allTheThings[0] = 'bears';

var myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // => [1, 2, 3, 4]

var myArray = [1, 2, 3, 4];
console.log(myArray.length); // => 4

var myArray = ['one', 'two', 'three', 'four', 'five'];
console.log(myArray[myArray.length - 2]); // 'four'

//Array methods you should know
//Arrays have just under two dozen built in methods. There are use cases for all
// of them, but here we want to draw your attention to the most commonly used.

.pop()
//This method is used to remove the final item from an array. This method returns
// the discarded item:

  var myArray = [1, 2, 'three'];
  console.log(myArray.length); // => 3
  var lastItem = myArray.pop();
  console.log(lastItem); // => three
  console.log(myArray.length); // => 2

.shift()
//Like .pop(), but removes and returns the first element of a list:

  var myArray = [1, 2, 'three'];
  console.log(myArray.length); // => 3
  var firstItem = myArray.shift();
  console.log(firstItem); // => 1
  console.log(myArray.length); // => 2

.slice(begin, end)
//This method creates a new array from an existing one. If you call it with no
//arguments, the entirety of the original array will be copied. It can be
//called with begin and end to specify only part of the original array has
//been copied. Finally, you can use negative values for the begin parameter in
//order to select the last n numbers of an array.

  var myArray = [1, 2, 3, 4];

  myArray.slice(); // =>  [1, 2, 3, 4]

  copyArray = myArray.slice(0, 2)
  console.log(copyArray); // => [1, 2]

  myArray.slice(-2); // => [3, 4];

.sort()
//This method sorts an array in place. In place means that this method sorts
//the original array; it does not copy the array, sort it, and then return the
//sorted copy. If you pass no arguments to .sort(), it will alphabetically sort
//the list by default:

  var myArray = ['zebra', 'yodel', 'xylophone'];
  myArray.sort();
  console.log(myArray); // => ['xylophone', 'yodel', 'zebra']
//If you need to sort an array by some other criteria, you must pass in a
//compare function to .sort() that tells the computer the criteria for sorting
//any two items. This function must return a numeric value. If the returned
//value is less than 0, the first element comes before the second. If it's
//greater than 0, the second element comes first. And if it's exactly zero,
//the two elements have the same numeric value.

//The following example demonstrates how you can sort a list of numbers by
//their ordinal value:

  var myArray = [1, 2, 10, 20, 100, 200];
  myArray.sort();
  console.log(myArray); // => {1, 10, 100, 2, 20, 200}

  function sortNumbers(a, b) {
    return a - b;
  }
  myArray.sort(sortNumbers);

.map()
//This method is used to generate a new array of items by applying the same
//function to each item in the original array. Here we provide an example of
//using map to work with numbers:

  function double(num) {
    return 2 * num;
  }

  var myNumbers = [1, 2, 3, 4];
  var doubledNumbers = myNumbers.map(double);
  console.log(doubledNumbers); // => [2, 4, 6, 8];

//And here is an example of using map to produce a collection of HTML elements:

  var steps = [ 'wash', 'rinse', 'repeat'];

  var stepsElements = steps.map(function(step) {
    return '<li>' + step + '</li>';
  });

  console.log('<ul>\n\t' + stepsElements.join('\n\t') + '\n</ul>'); // <ul>
                   //   <li>wash</li>
                   //   <li>rinse</li>
                   //   <li>repeat</li>
                   // </ul>

.forEach()
//Like .map(), this method applies a function to each item in a collection,
//but it does not return an array of transformed elements.

  var directionsLibrary = [
    ['wash', 'rinse', 'repeat'],
    ['be born', 'live', 'die'],
              ['wake', 'work', 'sleep']
  ];

  function saveDirectionInDatabase(direction) {
    // save the direction in the database
    console.log('`saveDirectionInDatabase` called');
  }

  directionsLibrary.forEach(saveDirectionInDatabase);

.filter()
//This method is used to take one array of items, and make a new one that
//contains only items that a filtering function returns true for.

  function isEven(num) {
    return num % 2 === 0;
  }

  var myNumbers = [1, 2, 3, 4, 5, 6];

  var evens = myNumbers.filter(isEven);
  console.log(evens); // => [2, 4, 6]

.reduce()
//This is useful for aggregating array data. This method iterates over the
//array while maintaining an accumulation object. This object is returned
//inside the reduce function and is passed into the subsequent iteration.

  function sum(total, num) {
    return total + num;
  };

  var numbers = [1, 2, 3, 4];

  console.log(numbers.reduce(sum)); // => 10

.find()
//This method is used to find a single item in an array. Here's an example:

  function isEven(num) {
    return num % 2 === 0;
  }

  function getFirstEvenNumber(numbers) {
    return numbers.find(isEven);
  }

  var myNumbers = [1, 2, 3, 4, 5, 6];
  myNumbers.find(isEven) // => 2

  var myNumbers2 = [1, 3, 5, 7, 9];
  myNumbers2.find(isEven) // => undefined

//Like .filter, .find takes a function that each item in the array is run
//through (isEven, in the example above). If that function returns true for an
//element, then that element is returned. If that function returns false for
//all of the array items, then .find returns undefined.
