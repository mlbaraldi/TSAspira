import { Gender } from "./entities/Person.js";
import Person from "./entities/Person.js";
import clear from "./entities/clear.js";
import cleanString, { sortingPerson } from "./functions/cleanString.js";
//ligando espaços do formulário à variáveis
const Formulario = document.querySelector("#cadastroPessoa");
const Nome = document.querySelector("#Nome");
const Nascimento = document.querySelector("#Nascimento");
const Genero = document.querySelector("#Genero");
const p = document.querySelector("#retorno");
const table = document.querySelector("table");
//array de Pessoas registradas
const Persons = [];
//traz foco para primeiro form
showPersons();
Nome.focus();
clear(p);
// ao executar o botão:
Formulario.addEventListener('submit', (e) => {
    clear(p);
    e.preventDefault();
    //retificação de nome completo para ficar sem espaços e com capitalização
    const nomeCompleto = cleanString(Nome.value);
    console.log(nomeCompleto);
    const regexNome = /\w+\s\w+/g;
    //validação para nome vazio
    if (!nomeCompleto) {
        p.innerText = 'O campo Nome é obrigatório!';
        Nome.focus();
        return;
    }
    //validação para sobrenome
    if (!regexNome.test(nomeCompleto)) {
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
        let person = new Person(nomeCompleto, data, Genero.value === "f" ? Gender.female : Gender.male);
        Persons.push(person);
        p.innerText = "\n Pessoa adicionada com Sucesso!";
        console.log(Persons);
        //serialização
        localStorage.setItem("Persons", JSON.stringify(Persons));
        showPersons();
    }
    catch (error) {
        console.error(error);
        p.innerText = "\n Aconteceu algum erro ao instanciar usuário";
    }
});
/////////////////////////////////////
function showPersons() {
    if (JSON.parse(localStorage.getItem("Persons"))) {
        let data = '';
        const localPersons = JSON.parse(localStorage.getItem("Persons"));
        const orderedLocalPersons = [...localPersons].sort(sortingPerson);
        console.log(orderedLocalPersons);
        for (let i = 0; i < orderedLocalPersons.length; i++) {
            let genero;
            if (orderedLocalPersons[i].gender == 'm') {
                genero = "Homem";
            }
            else {
                genero = "Mulher";
            }
            data += `
            <tr>
                <td>${orderedLocalPersons[i].name}</td>
                <td>${orderedLocalPersons[i].birth.substring(0, 10)}</td>
                <td>${genero}</td>
            </tr>
            `;
        }
        table.innerHTML = `
    <thead>
        <tr>
            <th>Nome</th>
            <th>Nascimento</th>
            <th>Gênero</th>
        </tr>
    </thead>
    <tbody>
        ${data}
    </tbody>
    `;
    }
}
