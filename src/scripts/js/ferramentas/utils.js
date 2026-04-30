export function validarNumero(event){
    const restrictKeys = ['e', 'E', '-', '+']

    if(restrictKeys.includes(event.key)){
        event.preventDefault()
        return false;
    }
}

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