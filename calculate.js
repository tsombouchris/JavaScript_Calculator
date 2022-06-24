console.log("Select an operation to perform: ");
console.log("1. ADD");
console.log("1. SUBSTRACT");
console.log("1. MULTIPLY");
console.log("1. DIVIDE");

let operation = window.prompt("Choose an operation: 1 for addition, 2 for substraction, 3 for multiplication, and 4 for division: ");

if (operation === "1"){
   var n1 = Number(window.prompt("Enter the first number: "));
   var n2 = Number(window.prompt("Enter the second number: "));
   var s = n1 + n2;
    console.log('the sum is ' + s);

} else if(operation === "2"){

    var n1 = Number(window.prompt("Enter the first number: "));
    var n2 = Number(window.prompt("Enter the second number: "));
    var d = n1 - n2;
     console.log('the difference is ' + d);
} else if(operation === "3"){

    var n1 = Number(window.prompt("Enter the first number: "));
    var n2 = Number(window.prompt("Enter the second number: "));
    var p = n1*n2;
     console.log('the product is ' + p);
} else if(operation === "4"){
    var n1 = Number(window.prompt("Enter the first number: "));
    var n2 = Number(window.prompt("Enter the second number: "));
    var q = n1/n2;
     console.log('the quotient is ' + q );

}
else{
console.log("your operation should be 1, 2, 3 or 4; please start again")
}