import { Gender } from "./entities/Person.js";
import Person from "./entities/Person.js";
//ligando espaços do formulário à variáveis
const Formulario = document.querySelector("#cadastroPessoa");
const Nome = document.querySelector("#Nome");
const Nascimento = document.querySelector("#Nascimento");
const Genero = document.querySelector("#Genero");
const Enviar = document.querySelector("#Enviar");
const p = document.querySelector("#retorno");
//array de Pessoas registradas
const Persons = [];
//função que limpa alterações
function limpar() {
    p.innerText = "";
    Nome.className = Nascimento.className = Genero.className = "";
}
//traz foco para primeiro form
Nome.focus();
// ao executar o botão:
Formulario.addEventListener('submit', (e) => {
    limpar();
    e.preventDefault();
    const nomeLimpo = Nome.value.trim();
    const regexNome = /\w+\s\w+/g;
    //validação para nome vazio
    if (!nomeLimpo) {
        p.innerText = 'O campo Nome é obrigatório!';
        Nome.focus();
        return;
    }
    //validação para sobrenome
    if (!regexNome.test(nomeLimpo)) {
        p.textContent += "O nome deve ser Completo";
        Nome.focus();
        return;
    }
    //validação de nascimento
    if (!Nascimento.value) {
        p.innerText = "Campo nascimento não preenchido";
        Nascimento.focus();
        return;
    }
    //validação gênero
    if (!Genero.value) {
        p.innerText = "Selecione o campo de Sexo";
        Genero.focus();
        return;
    }
    try {
        //instanciação de usuário
        let data = new Date(Nascimento.value); //TODO corrigir bugs de data
        let person = new Person(Nome.value, data, Genero.value === "f" ? Gender.female : Gender.male);
        Persons.push(person);
        p.innerText = "\n Pessoa adicionada com Sucesso!";
        console.log(Persons);
        //serialização
        localStorage.setItem("Persons", JSON.stringify(Persons));
        //showPerson()
    }
    catch (error) {
        console.error(error);
        p.innerText = "\n Aconteceu algum erro ao instanciar usuário";
    }
});
// function showPerson() {
//     const data = JSON.parse(localStorage.getItem('Usuarios')!)
//     //Persons.splice(0)
//     for (const item of data) {
//         Persons.push(new Person(
//         item.name,
//         item.birth,
//         item.gender,
//         ))
//       }
//       }
