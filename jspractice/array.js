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
var filteredArray = numbers.filter(stored_element => stored_element % 2 == 0)

console.log("Filtered array: " + filteredArray)

//Map array function
var mappedArray = filteredArray.map(stored_value=>stored_value*3)

console.log("Mapped array: " + mappedArray)

console.log("Summed final array: " + mappedArray.reduce((accumulator,current)=> accumulator+current,0))


//All of above array calculation in one single line
var finalArray = numbers.filter(stored_data=>stored_data%2==0).map(stored_data=>stored_data*3).reduce((accumulator,current)=>accumulator+current,+0)
console.log("Final Result: " + finalArray)

//String Array sort
var fruits = ["Peach", "Ratal", "Banana","Mango","Jackfruit","Strawberry"]
fruits.sort()
console.log("Sorted array: " + fruits)

//Integer Arry sort


/*with named function
nums.sort(function(a,b){
    return a-b
})
*/

//with anonymous function
//console.log(nums.sort((a,b)=>a-b))
//var nums = [8,3,6,5,-5,-9,96,15,365,-999]
var nums = [1,2,4,5,6,7,8,3]
console.log("\n\nOriginal array: " + nums)
console.log("Sorted Array: " + bubblesort(nums))

function bubblesort(arr) {
    var flag = false
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {			
            //swap array elements
			temp = arr[i];			
			arr[i] = arr[i + 1]			
			arr[i + 1] = temp			

            //set flag so that logic can determine whether to re-iterate
            flag = true
		}
	}
    if (flag){
	bubblesort(arr)    
    }
    return arr
}
