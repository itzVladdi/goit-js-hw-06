const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function resizing(event) {
    const { currentTarget } = event;
    text.style.fontSize = `${currentTarget.value}px`;
}

input.addEventListener("input", resizing);
