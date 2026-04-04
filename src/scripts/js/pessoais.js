import { espacoTexto } from "./espaco.js";

const CPF = document.getElementById("CPF")
const idade = document.getElementById("idade")

// Limita o quantidade de numeros que pode ser digitada em CPF e Idade
CPF.addEventListener("input", function () {
    const maxLength = 11;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});
idade.addEventListener("input", function () {
    const min = parseInt(this.min);
    const max = parseInt(this.max);
    let valor = parseInt(this.value);

    if (isNaN(valor)) return; // ignora se não for número

    if (valor < min) this.value = min;
    if (valor > max) this.value = max;
});


export function sexo(documento){
    const feminino = document.getElementById('feminino'); 
    const masculino = document.getElementById('masculino');
    let sexoSelecionado = null; 

    if (feminino.checked){
        sexoSelecionado = feminino.value
    }else if (masculino.checked){
        sexoSelecionado = masculino.value
    }

    if(sexoSelecionado !== null){
        if(sexoSelecionado === "masculino"){
            espacoTexto(documento, "X", 102, 54.5, 5.5);
        }else{
            espacoTexto(documento, "X", 119, 54.5, 5.5);
        }
    }
}

export function corEtinia(documento){
    const branca = document.getElementById('branca');
    const preta = document.getElementById('preta');
    const parda = document.getElementById('parda');
    const amarela = document.getElementById('amarela');
    const indigena = document.getElementById('indigena')
    const etinia = document.getElementById('etnia-especificar')
    let etiniaCor = null; 

    if (branca.checked){
        etiniaCor = branca.value
    }else if (preta.checked){
        etiniaCor = preta.value
    }else if (parda.checked){
        etiniaCor = parda.value
    }else if (amarela.checked){
        etiniaCor = amarela.value
    }else if (indigena.checked){
        etiniaCor = indigena.value
    }else if (etinia.value !== ' '){
        etiniaCor = etinia.value.toUpperCase();
    }

    if(etiniaCor !== null){
        if(etiniaCor === "branca"){
            espacoTexto(documento, "X", 97, 95, 5.5);
        }else if(etiniaCor === "preta" ){
            espacoTexto(documento, "X", 113.5, 95, 5.5);
        }else if(etiniaCor === "parda" ){
            espacoTexto(documento, "X", 128, 95, 5.5);
        }else if(etiniaCor === "amarela" ){
            espacoTexto(documento, "X", 142, 95, 5.5);
        }else if(etiniaCor === "indigena" ){
            espacoTexto(documento, "X", 160.5, 95, 5.5);
        }else{
            espacoTexto(documento, etiniaCor, 183.5, 94.5, 2.5);
        }
    }
}

export function pessoaisPrimeiroGrupo(documento){
    const CARTAO = document.getElementById('cartao-sus').value.toUpperCase();
    const NOME = document.getElementById('nome').value.toUpperCase();
    const APELIDO = document.getElementById('apelido').value.toUpperCase();
    const NACIONALIDADE = document.getElementById('nacionalidade').value.toUpperCase();
    const nomeMae = document.getElementById('mae').value.toUpperCase();

    espacoTexto(documento, CARTAO, 12, 54, 5.5)
    espacoTexto(documento, NOME, 12.5, 61.5, 5.6)
    espacoTexto(documento, nomeMae,  12.5, 77, 5.6)
    espacoTexto(documento, APELIDO, 6100, 69, 5.)
    espacoTexto(documento, NACIONALIDADE,  97, 86, 3)
}

export function pessoaisSegundoGrupo(documento){
    const CPF = document.getElementById("CPF").value;
    const idade = document.getElementById("idade").value;
    const data = document.getElementById("nascimento").value

    const ano = data.slice(0, 4)
    const mes = data.slice(5, 7);
    const dia = data.slice(8, 10)

    espacoTexto(documento, CPF, 12.5, 86, 5.6);
    espacoTexto(documento, idade, 73.5, 94.5, 5.5);
    espacoTexto(documento, dia, 12.5, 94.5, 5.5);
    espacoTexto(documento, mes, 29, 94.5, 5.5);
    espacoTexto(documento, ano, 45, 94.5, 5.5);
}
