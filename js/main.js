const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");
const controle = document.querySelectorAll (".controle-ajuste");

somar.addEventListener("click", () => {manipulaDados ("somar")});

subtrair.addEventListener("click", () => {manipuladador("subtrair")});

function manipulaDados (operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1
    }else if (operacao === "somar"){
        braco.value = parseInt(braco.value) + 1
    }
}
