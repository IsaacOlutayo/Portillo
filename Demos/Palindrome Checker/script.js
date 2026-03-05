// Select DOM elements
const checkBtn = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");

// Function to check if a string is a palindrome
function isPalindrome(text) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Compare cleaned text with its reversed version
    return cleanedText === cleanedText.split("").reverse().join("");
}

// Event listener for the button click
checkBtn.addEventListener("click", () => {
    const userInput = inputText.value.trim(); // Get the input text and trim whitespace

    // Step 1: Check if input is empty
    if (!userInput) {
        alert("Please input a value");
        return;
    }

    // Step 2: Check if the input is a palindrome
    const isPalindromeResult = isPalindrome(userInput);

    // Step 3: Update the result dynamically
    if (isPalindromeResult) {
        result.textContent = `${userInput} is a palindrome`;
        result.style.color = "green"; // Optional: Add some styling for valid palindrome
    } else {
        result.textContent = `${userInput} is not a palindrome`;
        result.style.color = "red"; // Optional: Add some styling for invalid palindrome
    }
});
