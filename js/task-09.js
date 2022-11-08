function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const changeColorBtn = document.querySelector(".change-color");

const onChangeColorBtn = () => {
    body.style.backgroundColor = getRandomHexColor();
    changeColorBtn.previousElementSibling.firstElementChild.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener("click", onChangeColorBtn);
