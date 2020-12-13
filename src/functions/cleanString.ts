//parte 1 do trabalho 3
// export function cleanString (entrada: string) {
//     return entrada.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()).trim();
// }

export function cleanString(entrada:string) {
    let entradaArray: string[] = entrada.trim().toLowerCase().split(' ')
    let saidaNome: string[] = [];
    
    for(let i = 0; i <entradaArray.length; i++) {
        if (entradaArray[i].length > 3) {
            saidaNome.push(entradaArray[i].replace(/\b\w/g, c => c.toUpperCase()))
        } else{
            saidaNome.push(entradaArray[i])
        }
    }
    return saidaNome.join(' ')
    
}

export default cleanString
