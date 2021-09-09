var userInput;
var userName;
userInput = 5;
userInput = 'Daniel';
if (typeof userInput === 'string') {
    userName = userInput; // type unknown not assignable to type string
    // have to type check for type unknowns
    // use unknown if you don't know what you want to store in it
    // kind of like any, but forces type checks
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured:', 500);
