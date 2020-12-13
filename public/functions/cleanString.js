//parte 1 do trabalho 3
// export function cleanString (entrada: string) {
//     return entrada.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()).trim();
// }
export function cleanString(entrada) {
    let entradaArray = entrada.trim().toLowerCase().split(' ');
    let saidaNome = [];
    for (let i = 0; i < entradaArray.length; i++) {
        if (entradaArray[i].length > 3) {
            saidaNome.push(entradaArray[i].replace(/\b\w/g, c => c.toUpperCase()));
        }
        else {
            saidaNome.push(entradaArray[i]);
        }
    }
    return saidaNome.join(' ');
}
export const sorting = (a, b) => a.title.localeCompare(b.title);
export const sortingPerson = (a, b) => a.name.localeCompare(b.name);
export default cleanString;
