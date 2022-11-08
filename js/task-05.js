const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
function greet(event) {
    let userName = event.currentTarget.value;
    userName ? (output.textContent = userName) : (output.textContent = "Anonymous");
}
input.addEventListener("input", greet);
