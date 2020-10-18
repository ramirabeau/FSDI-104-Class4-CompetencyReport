var num1 = Number(prompt("Enter your first number."));
var num2 = Number(prompt("Enter your second number."));

console.log(num1, num2);


function myAddition(num1, num2) {
    var result = num1 + num2;
    document.write("The answer to " + num1 + " added to " + num2 + " is: " + result + ".<br><br>");

}

function mySubtraction(num1, num2) {
    var result = num1 - num2;
    document.write("The answer to " + num1 + " subtracted from " + num2 + " is: " + result + ".<br><br>");

}

function myMultiplication(num1, num2) {
    var result = num1 * num2;
    document.write("The answer to " + num1 + " multiplied by " + num2 + " is: " + result + ".<br><br>");

}

function myDivision(num1, num2) {
    if (num2 === 0) {
        document.write("Can not divide " + num1 + " by zero." + "<br><br>");
    } else {
        var result = num1 / num2;
        document.write("The answer to " + num1 + " divided by " + num2 + " is: " + result + ".<br><br>");
    }

}

myAddition(num1, num2);
mySubtraction(num1, num2);
myMultiplication(num1, num2);
myDivision(num1, num2);