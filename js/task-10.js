function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

boxes.style.padding = "10px";
boxes.style.display = "flex";
boxes.style.alignItems = "center";
boxes.style.flexDirection = "column";
boxes.style.gap = "5px";

function createBoxes(amount) {
    destroyBoxes();
    const elements = [];
    let size = 30;
    for (let i = 0; i < amount; i += 1) {
        const element = document.createElement("div");
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.backgroundColor = getRandomHexColor();
        element.style.border = "2px solid black";
        elements.push(element);
        size += 10;
    }
    boxes.append(...elements);
}

function destroyBoxes() {
    boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
    createBoxes(input.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
