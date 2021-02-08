let boton1 = document.getElementById("boton1");
let inicio = document.getElementById("inicio");
let item = document.querySelectorAll(".item")

boton1.addEventListener("click", sidebar)
function sidebar() {
    inicio.classList.toggle("active");
    item.forEach(function (item, index) {
        item.classList.toggle("actived")
    })
}



