//Simple function
function sum(a,b){
    return a+b
}

//Anonymous function i.e. function without name. It is just like a function expression
let summation = function(a,b){
    return a+b
}

//We can even make the sytanx for more simpler using fat pipe operator (=> operator is called as fat pipe)

let sumOfNumbers = (c,d)=> c+d
console.log(sumOfNumbers(5,6))

/*Difference between var and let
If variables defined using var at global and function level, then the scope of the function level variables will be limited to only that function. That variable 
inside of the function will not be visible outside. Global is accessible anywhere
In below example, as we initialized var to Morning at global level, but altered its value in the if statement, so when we print the var, its value is displayed as 
Afternoon. Var defined within function is not available outside */
var test = "Morning"

if (1 == 1){
    var test = "Afternoon"
}

function tasty() {
    var test = "Evening"
}

console.log(test)

/* Let keywoard as scope limited to block. So if we define a variable using let within say if block, then its scope will limit to that block, and value for 
global, block, and function variable will be different. Example below */
let test1 = "Morning"

if (1 == 1){
   let test1 = "Afternoon"
}

function tasty() {
    let test1 = "Evening"
}

console.log(test1)
