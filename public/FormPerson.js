//ligando espaços do formulário à variáveis
const formulario = document.querySelector("#cadastroPessoa");
const nome = document.querySelector("#Nome");
const nascimento = document.querySelector("#Nascimento");
const genero = document.querySelector("#Genero");
const enviar = document.querySelector("#Enviar");
let p = document.querySelector("#retorno");
//retorno no console para ver se está tudo certo
console.log(formulario, nome, nascimento, genero, enviar, p);
//traz foco para primeiro form
nome.focus();
formulario.addEventListener("submit", (event) => event.preventDefault());
function validar() {
    console.log("Tentando a validação");
    const nomeLimpo = nome.value.trim();
    const regexNome = /\w+\s\w+/g;
    //validação para nome
    if (!nomeLimpo) {
        console.log("Campo nome não preenchido");
        p.textContent += "Campo nome não preenchido";
        nome.focus();
    }
    if (!regexNome.test(nomeLimpo)) {
        p.textContent += "O nome deve ser Completo";
    }
    //validação de nascimento
    if (!nascimento.value) {
        p.innerText = "Campo Nascimento não preenchido";
    }
}
function limpar() {
    p.innerText = nome.value = nascimento.value = genero.value = "";
    nome.className = nascimento.className = genero.className = "";
}
window.onload = limpar();
export {};
