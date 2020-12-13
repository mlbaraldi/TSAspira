import Document from "./entities/Document.js"
import Periodical from "./entities/Periodical.js"
import Book from "./entities/Book.js"
import clear from "./entities/clear.js"
import cleanString, { sorting } from "./functions/cleanString.js"

console.log("running formBook script")

//ligando espaços do formulário à variáveis
const form = document.querySelector("#form")!
const tipo = document.querySelector<HTMLFormElement>("#tipo")!
const title = document.querySelector<HTMLInputElement>("#title")!
const subtitle = document.querySelector<HTMLInputElement>("#subtitle")!
const author = document.querySelector<HTMLInputElement>("#author")!
const edition = document.querySelector<HTMLInputElement>("#edition")!
const volume = document.querySelector<HTMLInputElement>("#volume")!
const isbn = document.querySelector<HTMLInputElement>("#isbn")!
const issue = document.querySelector<HTMLInputElement>("#issue")!
const issn = document.querySelector<HTMLInputElement>("#issn")!
const published = document.querySelector<HTMLInputElement>("#published")!
const divPeriodical = document.querySelector<HTMLDivElement>("#divPeriodical")!
const divBook = document.querySelector<HTMLDivElement>("#divBook")!
const p = document.querySelector<HTMLDivElement>("#retorno")!
const divForm = document.querySelector<HTMLDivElement>("#divForm")!
const table = document.querySelector('table')!

//instanciação da lista de livros e periódicos
const bookList: Book[] = []
const periodicalList: Periodical[] = []


//preencher Author Select com Persons de LocalStorage
const localPersons = JSON.parse(localStorage.getItem("Persons")!)
for (let i = 0; i < localPersons.length; i++){
    let option = document.createElement("option")
    option.innerText += (localPersons[i].name)
    option.setAttribute("value", i.toString())
    author.appendChild(option)
}
//handler de mudança de Book e Periodical
tipo.addEventListener("change", (e: Event) => {
    divForm.hidden = false
    table.innerHTML = ''
    if (tipo.value == "b") {
        divBook.hidden = false
        divPeriodical.hidden = true
        showBooks();
    } else if (tipo.value == "p") {
        divBook.hidden = true
        divPeriodical.hidden = false
        showPeriodical();
    } else {
        divForm.hidden = true
    }
})

//traz foco para escolha de tipo, limpa retorno e form
tipo.focus()
clear(p)
form.reset()


//Evento de enviar formulário
form.addEventListener("submit", (e: Event) => {
    clear(p)
    e.preventDefault()
    var data = new Date(published.value) //TODO corrigir bugs de data

    // validação dos itens em comum
    for(let i = 1; i < 6; i++) {
        if (!form.elements[i].value) {
            p.innerText = "Preencha corretamente o campo " + form.elements[i].placeholder
            return
        }
    }
    //validação caso seja Livro
    if(tipo.value == "b") {
            if (!edition.value) {
                p.innerText = "Preencha corretamente o campo Edição"
                return
            } else if (!isbn.value) {
                p.innerText = "Preencha corretamente o campo ISBN"
            }
            try {
                //instanciação de periódico com valores do form
                let book = new Book(parseInt(isbn.value), parseInt(edition.value), parseInt(volume.value), cleanString(title.value), cleanString(subtitle.value), localPersons[author.value], data)
                //inserção objeto no array
                bookList.push(book)
                p.innerText = "Registrado o livro do Autor " + book.author.name
                //Envio periódico ao localStorage
                localStorage.setItem("BookList", JSON.stringify(bookList))
            } catch (error: any) {
                console.error(error)
                p.innerText = "\n Aconteceu algum erro ao instanciar Book"
        }
    }else {
                //validação caso seja Periódico
                if (!issn.value) {
                    p.innerText = "Preencha corretamente o campo ISSN"
                    return
                } else if (!issue.value) {
                    p.innerText = "Preencha corretamente o campo Número"
                    return
                }
                try {
                    //instanciação de periódico com valores do form
                    let periodical = new Periodical(parseInt(issn.value), parseInt(volume.value), parseInt(issue.value), cleanString(title.value), cleanString(subtitle.value), localPersons[author.value], data)
                    //inserção objeto no array
                    periodicalList.push(periodical)
                    p.innerText = "Registrado o Periódico do Autor " + periodical.author.name
                    //Envio periódico ao localStorage
                    localStorage.setItem("PeriodicalList", JSON.stringify(periodicalList))
                } catch (error: any) {
                    console.error(error)
                    p.innerText = "\n Aconteceu algum erro ao instanciar Periodico"
        }  
        }
})



////////////////////////////////////////

function showBooks() {
    if (JSON.parse(localStorage.getItem("BookList")!)) {
    let data = ''
    const localBooks = JSON.parse(localStorage.getItem("BookList")!)
    const orderedLocalBooks = [...localBooks].sort(sorting)

    console.log(orderedLocalBooks)
 
    for (let i = 0; i < orderedLocalBooks.length; i++){
        data += `
        <tr>
            <td>${ orderedLocalBooks[i].title }</td>
            <td>${ orderedLocalBooks[i].subtitle }</td>
            <td>${ orderedLocalBooks[i].publishedAt.substring(0,4) }</td>
            <td>${ orderedLocalBooks[i].author.name }</td>
            <td>${ orderedLocalBooks[i].edition }</td>
            <td>${ orderedLocalBooks[i].volume }</td>
        </tr>
        `
    }

    table.innerHTML = `
    <thead>
        <tr>
            <th>Titulo</th>
            <th>Subtítulo</th>
            <th>Ano de Publicação</th>
            <th>Autor</th>
            <th>Edição</th>
            <th>Volume</th>
        </tr>
    </thead>
    <tbody>
        ${data}
    </tbody>
    `
}
}

function showPeriodical() {
    if (JSON.parse(localStorage.getItem("PeriodicalList")!)) {
        let data = ''
        const localPeriodical = JSON.parse(localStorage.getItem("PeriodicalList")!)
        const orderedLocalPeriodical = [...localPeriodical].sort(sorting)

    for (let i = 0; i < orderedLocalPeriodical.length; i++){
        data += `
        <tr>
            <td>${ orderedLocalPeriodical[i].title }</td>
            <td>${ orderedLocalPeriodical[i].subtitle }</td>
            <td>${ orderedLocalPeriodical[i].publishedAt.substring(0,4) }</td>
            <td>${ orderedLocalPeriodical[i].author.name }</td>
        </tr>
        `
    }

    table.innerHTML = `
    <thead>
        <tr>
            <th>Titulo</th>
            <th>Subtítulo</th>
            <th>Ano de Publicação</th>
            <th>Autor</th>
        </tr>
    </thead>
    <tbody>
        ${data}
    </tbody>
    `
}

}