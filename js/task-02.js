const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const listEl = document.querySelector("#ingredients");

const elements = [];
ingredients.forEach((el) => {
    const element = document.createElement("li");
    element.textContent = `${el}`;
    element.classList.add("item");
    elements.push(element);
});
listEl.append(...elements);
