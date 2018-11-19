function loader() {
    const getNamesButton = document.getElementById('getNames');
    const functionButton = document.getElementById('getFunctionObject');

    getNamesButton.onclick = function () {
        const name = myObject.getName();
        const getNameDisplay = document.getElementById('getNameDisplay');
        getNameDisplay.textContent = name;

        const fullName = myObject.getFullName();
        const getFullNameDisplay = document.getElementById('getFullNameDisplay');
        getFullNameDisplay.textContent = fullName;
    }
    const functionObject = new FunctionObject();
    console.log(functionObject.getFullName());
    //console.log(functionObject.getName());
    functionButton.onclick = FunctionObject.prototype.showFullName;
}

window.onload = loader;

//Key value pairs
//Comma separates list of key value pairs.
const myObject = {
    firstName: 'fred',
    lastName: 'smith',
    getName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

function FunctionObject() {
    const firstName = 'Cat';
    const lastName = 'Brosius';
    
    FunctionObject.prototype.getFullName = () => {
        return firstName + ' ' + lastName;
    }
    FunctionObject.prototype.showFullName = () => {
        console.log(firstName + ' ' + lastName);
    }
}

myObject.middleName = 'barfoo';

myObject.getFullName = function () {
    return this.firstName + 
        ' ' + this.middleName + 
        ' ' + this.lastName;
}

console.log(myObject.firstName);
console.log(myObject['firstName']);
console.log(myObject.getName());
console.log(myObject.middleName);