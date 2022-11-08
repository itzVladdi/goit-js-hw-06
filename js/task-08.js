const loginForm = document.querySelector(".login-form");

function loginProcessing(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("All fields must be filled!");
    }

    const user = {};
    user[email.getAttribute("name")] = email.value;
    user[password.getAttribute("name")] = password.value;
    console.log(user);
    currentTarget.reset();
}

loginForm.addEventListener("submit", loginProcessing);
