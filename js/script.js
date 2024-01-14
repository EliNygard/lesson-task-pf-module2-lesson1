var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toUpperCase() === suppliedName.toUpperCase()) {
    console.log("They are equal");
}




var username = "myusername";
var usernameLength = username.length;
var minimumCharacters = 4;
var maximumCharacters = 10;


if ((usernameLength >= minimumCharacters) && (usernameLength <= maximumCharacters)) {
    console.log("Acceptable username");
} else {
    if (usernameLength < minimumCharacters) { // kunne brukt tallene: < 4, uten å lage var --> hard code. var er fleksibel hvis en vil endre tallene
        console.log("Too few characters");
    }
    if (usernameLength > maximumCharacters) {
        console.log("Too many characters");
    }
}




var invoicePaid = true;
var productDispatched = true;
var customerHasSigned = false;

// the below is shorthand for
//if ((invoicePaid === true) && (productDispatched === true) && (customerHasSigned === true)) {
if (invoicePaid && productDispatched && customerHasSigned) {
    console.log("Order complete");
} else {
    if (!invoicePaid) {
        console.log("Invoice must be paid");
    }
    if (!productDispatched) {
        console.log("Products must be dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer must sign");
    }
}


if (!invoicePaid || !productDispatched || !customerHasSigned) {
    console.log("Order is not complete");

    if (!invoicePaid) {
        console.log("Invoice must be paid");
    }
    if (!productDispatched) {
        console.log("Products must be dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer must sign");
    }
}
else {
    console.log("Order complete");
}
