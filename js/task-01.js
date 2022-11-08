const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((li) => {
    console.log(
        `Category: ${li.querySelector("h2").textContent}
Elements: ${li.querySelectorAll("ul li").length}`
    );
});
