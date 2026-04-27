export function validarNumero(event){
    const restrictKeys = ['e', 'E', '-', '+']

    if(restrictKeys.includes(event.key)){
        event.preventDefault()
        return false;
    }
}