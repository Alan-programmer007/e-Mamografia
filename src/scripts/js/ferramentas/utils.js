// Ajusta o espacamento entre as letras
export function espacoTexto(documento, texto, startX, startY, espaco) {
    let x = startX;

    for (let i = 0; i < texto.length; i++) {
        documento.text(texto[i], x, startY);
        if(i >= 17){
            x += 5.4
        }else{
            x += espaco;
        }
    }
}

export function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    const cpfArray = cpf.split('').map(el => +el);
    const calc = (count) => (cpfArray.slice(0, count - 12).reduce((soma, el, i) => soma + el * (count - i), 0) * 10) % 11 % 10;
    return calc(10) === cpfArray[9] && calc(11) === cpfArray[10];
}

export function filtrarTeclasNumericas(event) {
    const restrictKeys = ['e', 'E', '-', '+', '.', ','];
    if (restrictKeys.includes(event.key)) event.preventDefault();
}

export function limitarTamanho(inputElement, maxValue) {
    if (inputElement.value.length > maxValue) {
        inputElement.value = inputElement.value.slice(0, maxValue);
    }
}

export function configurarCampoNumerico(elemento, maximo) {
    elemento.addEventListener("keydown", filtrarTeclasNumericas);
    elemento.addEventListener("input", () => limitarTamanho(elemento, maximo));
}