

//print to console
console.log("Hello World")

/*Usually var is used to define a varaible like say: var a=5. But in latest version (upcoming version, "let" is supported instead of var) There are some
differences in var and let. We have to choose what to use according to our needs:
Differences:
1. Using var we can re-delare a varaible anywhere in the script. let keyword won't allow the redeclaration.
*/
//Variable declaration
let a = 2
let b = 2
const flag = true

console.log(a + b)

//lets define a string
let str = "test string"

//check data type of variable
console.log(typeof (str))

//If else
let c = 5
if (c == 5) {
	console.log("C is 5")
} else {
	console.log("C is not 5")
}

//While loop
var d = 0
while (d <= 3) {
	//console.log(d)
	d++
}

//Do while loop
d = 0
do {
	//console.log(d)
	d++
} while (d < 3);

//For loop
for (let i = 0; i < 3; i++) {
	console.log(i)
}

//Arrays
var marks = Array(5)
new Array(10, 20, 30, 40, 50)

//OR simply
var marks = new Array(10, 20, 30, 40, 50)

//OR even more simple
var marks = [10, 20, 30, 40, 50]
console.log(marks[3])
console.log("length of array: " + marks.length)
//Add new element to array
marks.push(100)
console.log("Pushed element at the end of the array: " + marks)
marks.pop() //deletes last element from array
console.log("Deleted an element from the array: " + marks)
marks.unshift(0)
console.log("Added an element at the start of the array: " + marks)
console.log(marks.includes(50)) //checks if array includes/consits of a specified element and prints true/false result to screen
console.log("Slied array: " + marks.slice(2, 6)) //slices and array and prints results to console

//sum all elements of an array using for loop
var sum = 0
for (i = 0; i < marks.length; i++) {
	sum = sum + marks[i]
}
console.log("Sum of elements within the array: " + sum)

/* Reduce method is used to redude loop overheads. It can perform task of a for loop within a single line. Inside reduce(), first part is a unspecified/anonymous 
function (not explicitely defiend with a name), which accepts two inputs, first is accumulator, i.e. temp, which stores the temporary values, just like sum 
in above for loop, which keeps on storing the intermediate sum value during loop execution. The next "mark" variable is the current value of the array.
In the second part after =>, we are actually performing the login of addition operation, where in each internal loop iteration, we want to make a sum of 
teporary value/sum with the current element of the array. In the second part, the last 0 is the initial value of the temp variable.
In below example, instead of anonymous function, we can also provide a normal function as given below:

let sum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
});
console.log(sum); // 6

*/
console.log(marks.reduce((temp, mark) => temp + mark, 0))

/* Using filters, find the even numbers in the array. In below example, we have spcified stored_element to be used as a temporary variable which stores the single
value of the array during each iteration. In the next part after =>, we are performing core loging to calucate whether the nubmer is even by checking its moderator is 
0 or not.
*/
var numbers = [15, 85, 9, 45, 36, 98, 25, 65]
var filteredNumbers = numbers.filter(stored_element => stored_element % 2 == 0)

console.log("Filtered array: " + filteredNumbers)

