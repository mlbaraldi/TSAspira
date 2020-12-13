export function nomeLimpo(entrada) {
    return entrada.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()).trim();
}
export default nomeLimpo;
