const input = document.querySelector("#validation-input");

function inputValidation(event) {
    const { currentTarget } = event;
    const message = currentTarget.value;
    if (message.length === Number(currentTarget.dataset.length)) {
        console.log(message.length);
        console.log(currentTarget.dataset.length);
        currentTarget.classList.add("valid");
        currentTarget.classList.remove("invalid");
    } else {
        currentTarget.classList.add("invalid");
        currentTarget.classList.remove("valid");
    }
    if (message.length === 0) {
        currentTarget.classList.remove("valid");
        currentTarget.classList.remove("invalid");
    }
}

input.addEventListener("blur", inputValidation);
