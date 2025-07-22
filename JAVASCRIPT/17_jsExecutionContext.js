// javascript execution context:
// 1) global ec
// 2) function
// 3) eval
// for this keyword window object is global ec in browser
// there are two phases:
// 1) Memory creation phase
// 2) execution phase

let val1=10
let val2=30
function add(num1,num2){
    let total=num1+num2
    return total
}
let result1=add(val1,val2);
let result2=add(30,40)

// GEC
// Creation phase
// val1     → undefined  
// val2     → undefined  
// add      → function object  
// result1  → undefined  
// result2  → undefined  
// this     → global object (e.g., window in browser)

// Execution phase
// val1     → 10
// val2     → 30

//  2. Function Execution Context (FEC) for add(val1, val2) → add(10, 30)
// creation phase
// num1 → undefined  
// num2 → undefined  
// total → undefined

// execution phase
// num1 = 10  
// num2 = 30  
// total = num1 + num2 = 40  
// return total → 40

// back to global
// result1 = 40

// 3. Function Execution Context (FEC) for add(30, 40)
// creation phase
// num1 → undefined  
// num2 → undefined  
// total → undefined

// execution phase
// num1 = 30  
// num2 = 40  
// total = 70  
// return total → 70

// back to global
// result2 = 70

// Final Global Memory After Execution
// Variable	Value
// val1	10
// val2	30
// add	function
// result1	40
// result2	70

// call stack summary
// Step 1: GEC is created and pushed
// Step 2: add(10, 30) → FEC pushed → executed → popped
// Step 3: add(30, 40) → FEC pushed → executed → popped
// Step 4: GEC remains until script ends


