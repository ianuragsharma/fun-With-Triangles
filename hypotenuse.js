const baseValue = document.querySelector("#base-value");
const heightValue = document.querySelector("#height-value");
const hypotenuseMessage = document.querySelector("#hypotenuse-message");
const hypotenuseForm = document.querySelector("#hypotenuse-form");

function calculateSumOfSquares (a, b) {
    const sumOfSquares = (a*a) + (b*b);
    return sumOfSquares;
}

function calculateHypotenuse (event) {
    event.preventDefault();
    const hypotenuse =  calculateSumOfSquares(Number(baseValue.value), Number(heightValue.value));
    const lengthOfHypotenuse = Math.sqrt(hypotenuse);
    hypotenuseMessage.innerText = "The length of hypotenuse is " + lengthOfHypotenuse.toFixed(4);
}

hypotenuseForm.addEventListener("submit", calculateHypotenuse);