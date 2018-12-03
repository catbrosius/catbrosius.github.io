function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}
var person = {
    firstName: "Cat",
    lastName: "Brosius",

    fullName: function () {
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
}
divider('Name');
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

var calculator = {
    operand01: -1,
    operand02: -1,

    addNumLetters: function () {
        'use strict';
        return this.operand01 + this.operand02;
    },

    subtractNumLetters: function () {
        return this.operand01 - this.operand02;
    }
}

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

calculator.multiply = function () {
    return calculator.operand01 * calculator.operand02;
};

divider('Calculator');

console.log('Number of letters in first name: ' + calculator.operand01);
console.log('Number of letters in last name: ' + calculator.operand02);

console.log('Add: ' + calculator.addNumLetters());
console.log('Subtract: ' + calculator.subtractNumLetters());
console.log('Multiply: ' + calculator.multiply);


