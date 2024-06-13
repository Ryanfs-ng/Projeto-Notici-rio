const button = document.querySelector ("button")
const modal = document.querySelector("dialog")

button.onclick = function() {
    modal.showModal()
}

const active = document.getElementById("active");
const unactive = document.getElementById("unactive");
const container = document.getElementById("container");

active.addEventListener("click", () => {
    container.classList.add("active");
})

unactive.addEventListener("click", () => {
    container.classList.remove("active");
})


