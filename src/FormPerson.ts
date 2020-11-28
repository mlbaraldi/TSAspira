import { Gender } from "./entities/Person.js"
import Person from "./entities/Person.js"

//ligando espaços do formulário à variáveis
const formulario = document.querySelector<HTMLFormElement>("#cadastroPessoa")!
const nome = document.querySelector<HTMLInputElement>("#Nome")!
const nascimento = document.querySelector<HTMLInputElement>("#Nascimento")!
const genero = document.querySelector<HTMLSelectElement>("#Genero")!
const enviar = document.querySelector<HTMLInputElement>("#Enviar")!
let p = document.querySelector<HTMLDivElement>("#retorno")!

//retorno no console para ver se está tudo certo
console.log(formulario, nome, nascimento, genero, enviar, p)

//traz foco para primeiro form
nome.focus()

formulario.addEventListener("submit", (event: Event) => event.preventDefault())


function validar() {
    console.log("Tentando a validação")
    const nomeLimpo = nome.value.trim()
    const regexNome = /\w+\s\w+/g
    
    //validação para nome
    if (!nomeLimpo) {
        console.log("Campo nome não preenchido")
        p.textContent += "Campo nome não preenchido"
        nome.focus()
    }
    if (!regexNome.test(nomeLimpo)) {
        p.textContent += "O nome deve ser Completo"
        
    }

    //validação de nascimento
    if (!nascimento.value) {
        p.innerText = "Campo Nascimento não preenchido"
    }
}


function limpar() {
    p.innerText = nome.value = nascimento.value = genero.value = ""
    nome.className = nascimento.className = genero.className = ""
}
window.onload = limpar()