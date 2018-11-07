window.onload = () => {

    const functionCalls = document.getElementById("function-calls");
    const callUserInput = document.getElementById("call-user-input");

    functionCalls.onclick = () => {
        simpleFunction();
        functionParameters(a);
        functionReturn();
        const returnValue = functionReturn();
        console.log(returnValue);

        const functionReturnParagraph = document.getElementById("function-return");
        functionReturnParagraph.textContent = returnValue;
    }

    callUserInput.onclick = () => {
        const userInputParagraph = document.getElementById("show-user-input");
        const userInput = document.getElementById("user-input");
        userInputParagraph.textContent = userInput.value;
    }
}
function simpleFunction() {
    const displayText = "functions should consist of statements designed to perform a single task";
    const simpleFunctionParagraph = document.getElementById("simple-function");
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;
}
function functionParameters(a) {
    console.log(a);
    const functionParametersParagraph = document.getElementById("function-parameters");
    functionParametersParagraph.textContent = a;
}
function functionReturn() {
    return "Many functions return values.";

}
var a = "Many functions take parameters.";
//simpleFunction();
