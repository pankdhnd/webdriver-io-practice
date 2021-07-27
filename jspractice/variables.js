//print to console
console.log("Hello World")

/*Usually var is used to define a varaible like say: var a=5. But in latest version (upcoming version, "let" is supported instead of var) There are some
differences in var and let. We have to choose what to use according to our needs:
Differences:
1. Using var we can re-delare a varaible anywhere in the script. let keyword won't allow the redeclaration.
2. Scope for let is limited to the block, wherewas var is available globally
*/
//Variable declaration
let a = 2
let b = 2
const flag = true //const cannot be reinitialized

console.log(a + b)

//lets define a string
let str = "test string"

//check data type of variable
console.log(typeof (str))