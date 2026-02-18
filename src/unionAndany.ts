//union types allow a variable to hold more than one type of value. You can define a union type using the pipe (|) symbol.
let mixedType:string|number;
    mixedType="hello";  
    mixedType=42; // No error, 'mixedType' can be either 'string' or 'number'
    // mixedType=true; // Error: Type 'boolean' is not assignable to type 'string | number'. 

    let apiRequest:'pending'|'success'|'error'='pending';
    //apiRequest='correct'; // Error: Type '"correct"' is not assignable to type '"pending" | "success" | "error"'.
    apiRequest='pending'; // No error, 'apiRequest' can be 'pending', 'success', or 'error'
let airlineSeat:'window'|'aisle'|'middle'='window';
//airlineSeat='front'; // Error: Type '"front"' is not assignable to type '"window" | "aisle" | "middle"'.
airlineSeat='aisle'; // No error, 'airlineSeat' can be 'window', 'aisle', or 'middle'

 //any type allows a variable to hold any type of value without type checking. It essentially turns off type safety for that variable.   
const order=['12','34','56'];
//let currentorder;//currentorder is of type 'any' by default, which means it can hold any type of value without type checking. In this case, it is initially undefined until a value is assigned to it.
let currentorder:String|undefined;//currentorder is explicitly declared as a string type, which means it can only hold string values. If you try to assign a value of a different type (like a number), it will result in a type error.   
for(let orders of order){
    if(orders==='34'){
        currentorder=orders;//any data type is assigned to currentorder, so it can hold any type of value without type checking. In this case, it holds a string value '34'.
        break
    }
    currentorder='12';

}
//currentorder=56; // No error, 'currentorder' can hold any type of value, including a number like 56.
console.log(currentorder); // Output:  (the last assigned value, which is a number 56)
   