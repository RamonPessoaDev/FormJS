const form = document.getElementsByClassName("form-inputs");
const inputs = document.querySelectorAll(".item");
let botaoEnviar = document.querySelector(".btn-enviar");
const spansP = document.querySelectorAll(".escondido");

inputs.forEach(function (item, index) {
    item.addEventListener("input", function () {
        const inputPreenchido = item.value.trim();

        if (inputPreenchido !== "") {
            item.classList.remove("input-vazio");
            item.classList.add("input-preenchido");
            spansP[index].style.display = "none";
        } else {
            item.classList.remove("input-preenchido");
            item.classList.add("input-vazio");
            spansP[index].style.display = "block";
        }
    });
});

botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    let inputsVazios = false;
    inputs.forEach(function (item) {
        if (item.value.trim() === "") {
            item.classList.remove("borda");
            item.classList.add("input-vazio");
            inputsVazios = true;
        } else {
            item.classList.remove("borda");
            item.classList.remove("input-vazio");
            item.classList.add("input-preenchido");
        }
    });

    spansP.forEach(function (span) {
        span.style.display = "none";
    });

    if (inputsVazios) {
        inputs.forEach(function (item, index) {
            if (item.value.trim() === "") {
                spansP[index].style.display = "block";
            }
        });
    }
});




