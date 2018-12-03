window.onload = () => {

    const simpleObjectButton = document.getElementById('simple-object-action');
    const functionObjectButton = document.getElementById('function-object-action');
    const customClassButton = document.getElementById('custom-class-action');

    simpleObjectButton.onclick = () => {
        const sObject = simpleObject.sayName();
        const simpleObjectDisplay = document.getElementById('simple-object-display');
        simpleObjectDisplay.textContent = sObject;
        
    };
    functionObjectButton.onclick = () => {
        const fObject = FunctionObject.sayName();
        const functionObjectDisplay = document.getElementById('function-object-display');
        functionObjectDisplay.textContent = fObject;
        
    };
    customClassButton.onclick = () => {
        const customClass = new CustomClass();
        const returnValue = customClass.sayName();
        console.log(returnValue);
        const customClassDisplay = document.getElementById('custom-class-display');
        customClassDisplay.textContent = returnValue;
        
    };
}

const simpleObject = {
    sayName: function () {
        const content = "Simple Object";
        console.log(content);
        return content;
    }
};

simpleObject.dynamicMethod = console.log("Dynamic Method");

function FunctionObject () {
    FunctionObject.prototype.sayName = () => {
        const content = 'FunctionObject.sayName';
        console.log(content);
        privateFunction ();
        return content;
    };
}

function privateFunction() {
    // private function
   console.log("Private Function");
}

class CustomClass {
    constructor() {
        console.log('Custom Class constructor called.');
    }

    sayName() {
        return "Custom Class";
    };
}

simpleObject.sayName();

var FunctionObject = new FunctionObject();
FunctionObject.sayName();

console.log(FunctionObject.constructor.toString());

const customClass = new CustomClass();
customClass.sayName();