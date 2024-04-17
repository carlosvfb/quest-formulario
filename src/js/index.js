const inputFormulario = document.querySelectorAll("[name='duvida']");
const camposNaoPreenchidos = document.querySelectorAll(".campo-obrigatorio");
const botaoEnviar = document.getElementsByClassName("btn-enviar");

inputFormulario.forEach(input => {
    input.addEventListener("change", () => {
        if (input.value !== "") {
            input.style.border = "1px solid #00C22B";
        } 
        else {
            input.style.border = "1px solid #F52E2E";
        }
    });
    botaoEnviar[0].addEventListener("click", () => {
        camposNaoPreenchidos.forEach(invalidou => {
        if (input.value === "") {
            input.style.border = "1px solid #F52E2E";
            invalidou.style.display = "block";
        } else {
            invalidou.style.display = "none";
        }
        });
    });
});