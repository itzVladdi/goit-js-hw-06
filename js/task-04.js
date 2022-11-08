let counterValue = 0;
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const output = document.querySelector("#value");
function decrementing() {
    counterValue -= 1;
    output.textContent = counterValue;
}
function incrementing() {
    counterValue += 1;
    output.textContent = counterValue;
}
decrementBtn.addEventListener("click", decrementing);
incrementBtn.addEventListener("click", incrementing);
