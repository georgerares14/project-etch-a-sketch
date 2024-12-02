const container = document.querySelector(".container");

const createGrid = () => {    
    for (let i = 0; i < 256; i++){
        const box = document.createElement("div")
        box.classList.add("square")
        container.appendChild(box);
    }
    const div = document.querySelectorAll(".square");
    div.forEach((el) => {
        el.addEventListener("mouseover", (e) => e.target.classList.add("black"))
    })
}
