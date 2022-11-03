let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];

const imageBlock = document.querySelector("#imageFruit");
const buttonBlock = document.querySelector("#fruits");
fruits.forEach(fruit => {
    const divElement = document.createElement("div");
    divElement.textContent = fruit.name;
    buttonBlock.appendChild(divElement);
    divElement.className = "boutonFruits";
    divElement.style.height = 100 / fruits.length + "vh";
    divElement.addEventListener("mouseover", (event) => {
        imageBlock.style.backgroundImage = "url(" + fruit.image + ")";
    })
    divElement.addEventListener("mouseout", (event) => {
        imageBlock.style.backgroundImage = "url(all-fruits.jpg)";
    })
    divElement.addEventListener("click", (event) => {
        const allDiv = document.querySelectorAll(".boutonFruits");
        allDiv.forEach(oneDiv => {
            oneDiv.style.backgroundColor = "";
        })
        divElement.style.backgroundColor = "red";
    })
})


