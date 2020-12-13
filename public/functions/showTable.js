export function showTable() {
    if (JSON.parse(localStorage.getItem("BookList"))) {
        let listaLivro = JSON.parse(localStorage.getItem("BookList"));
        let lines = '';
        const sortedBook = (a, b) => a.title.localeCompare(b.title);
        let newArray2 = [...booksInstance].sort(sortBooks);
        console.log(`Array original: ${booksInstance}`);
        console.log(`Array ordenado R${newArray2}`);
        for (const books of newArray2) {
            lines += `
    <tr>
        <td>${books.title}</td>
        <td>${books.subtitle}</td>
        <td>${books.publishedAt}</td>
        <td>${books.author.name}</td>
        <td>${books.edition}</td>
        <td>${books.volume}</td>
    </tr>
    `;
        }
        table.innerHTML = `
<thead>
    <tr>
        <th>Titulo</th>
        <th>SubTitulo</th>
        <th>Ano_publicação</th>
        <th>Autor</th>
        <th>Edição</th>
        <th>Volume</th>
    </tr>
</thead>
<tbody>
    ${lines}
</tbody>
`;
    }
}
