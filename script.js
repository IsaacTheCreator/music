// JavaScript for Palindrome Checker

/**
 * Function to check if a string is a palindrome.
 */
function checkPalindrome() {
    // Get the input string
    let inputString = document.getElementById("inputString").value.toLowerCase().replace(/\s/g, '');

    // Reverse the input string
    let reversedString = inputString.split('').reverse().join('');

    // Check if the input string is equal to its reverse
    if (inputString === reversedString) {
        document.getElementById("result").textContent = "Yes, '" + inputString + "' is a palindrome!";
    } else {
        document.getElementById("result").textContent = "No, '" + inputString + "' is not a palindrome.";
    }
}
