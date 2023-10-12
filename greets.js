// Get user input for their name
var userName = prompt("What is your name?");

// Check if the user entered a name
if (userName !== null && userName !== "") {
    // Display a personalized greeting
    alert("Hello, " + userName + "! Welcome to the JavaScript world.");
} else {
    // Handle the case where the user didn't enter a name
    alert("Hello there! Welcome to the JavaScript world.");
}
