import { espacoTexto } from "./espaco.js";

const numeroCasa = document.getElementById('numero');
const codigoMunicipio = document.getElementById('codigo-municipio-res');
const cepParteUm = document.getElementById('cep-parte1');
const cepParteDois = document.getElementById('cep-parte2');
const ddd = document.getElementById('ddd');
const telefoneParteUm =document.getElementById('telefone-parte1');
const telefoneParteDois = document.getElementById('telefone-parte2');

numeroCasa.addEventListener("input", function () {
    const maxLength = 6;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});
codigoMunicipio.addEventListener("input", function () {
    const maxLength = 7;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});
cepParteUm.addEventListener("input", function () {
    const maxLength = 5;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});
cepParteDois.addEventListener("input", function () {
    const maxLength = 3;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});
ddd.addEventListener("input", function () {
    const maxLength = 2;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});
telefoneParteUm.addEventListener("input", function () {
    const maxLength = 4;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});
telefoneParteDois.addEventListener("input", function () {
    const maxLength = 4;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

export function residenciaisPrimeiroGrupo(documento){
    const LOGRADOURO = document.getElementById('logradouro').value.toLocaleUpperCase();
    const COMPLEMENTO = document.getElementById('complemento').value.toLocaleUpperCase();
    const NUMERO_CASA = document.getElementById('numero').value;
    const PONTO_REFERENCIA = document.getElementById('ponto-referencia').value.toLocaleUpperCase();

    espacoTexto(documento, LOGRADOURO, 12, 107, 5.6);
    espacoTexto(documento, NUMERO_CASA, 12.5, 115.5, 5.5);
    espacoTexto(documento, COMPLEMENTO, 57, 115.5, 5.5);
    espacoTexto(documento, PONTO_REFERENCIA, 12, 149.5, 5.6);
}

export function residenciaisSegundoGrupo(documento){
    const CODIGO_MUNICIPIO = document.getElementById('codigo-municipio-res').value;
    const MUNICIPIO_RESIDENCIA = document.getElementById('municipio-res').value.toLocaleUpperCase();
    const UF_RESIDENCIA = document.getElementById('uf-residencia').value.toLocaleUpperCase();
    const BAIRRO = document.getElementById('botafogo').value.toLocaleUpperCase();

    espacoTexto(documento, CODIGO_MUNICIPIO, 13, 132, 5.5);
    espacoTexto(documento, MUNICIPIO_RESIDENCIA, 56, 132, 5.5);
    espacoTexto(documento, UF_RESIDENCIA, 190, 123.5, 5.5);
    espacoTexto(documento, BAIRRO, 101, 123.5, 5.6);
}

export function residenciaisTerceiroGrupo(documento){
    const CEP_PARTE_UM = document.getElementById('cep-parte1').value;
    const CEP_PARTE_DOIS = document.getElementById('cep-parte2').value;
    const DDD = document.getElementById('ddd').value;
    const NUMERO_PARTE_UM = document.getElementById('telefone-parte1').value;
    const NUMERO_PARTE_DOIS = document.getElementById('telefone-parte2').value;

    espacoTexto(documento, CEP_PARTE_UM, 13, 140.5, 5.5);
    espacoTexto(documento, CEP_PARTE_DOIS, 46, 140.5, 5.5);
    espacoTexto(documento, DDD, 79, 140.5, 5.5);
    espacoTexto(documento, NUMERO_PARTE_UM, 101, 140.5, 5.5);
    espacoTexto(documento, NUMERO_PARTE_DOIS, 128.5, 140.5, 5.5);
}
export function escolaridade(documento){
    const analfabeto = document.getElementById('analfabeto');
    const ensinoFundamentalIncompleto = document.getElementById('fundamental-incompleto');
    const ensinoFundamentalCompleto = document.getElementById('fundamental-completo');
    const ensinoMedioCompleto = document.getElementById('medio-completo');
    const ensinoSuperior = document.getElementById('superior-completo');
    let escolaridade = null;

    if(analfabeto.checked){
        escolaridade = analfabeto.value;
    }else if(ensinoFundamentalIncompleto.checked){
        escolaridade = ensinoFundamentalIncompleto.value;
    }else if(ensinoFundamentalCompleto.checked){
        escolaridade = ensinoFundamentalCompleto.value;
    }else if(ensinoMedioCompleto.checked){
        escolaridade = ensinoMedioCompleto.value;
    }else if(ensinoSuperior.checked){
        escolaridade = ensinoSuperior.value;
    }

    if(escolaridade !== null){
        if(escolaridade === "analfabeto"){
            espacoTexto(documento, "X", 15.5, 160.5, 0);
        }else if(escolaridade === "fundamental-incompleto"){
            espacoTexto(documento, "X", 37.5, 160.5, 0);
        }else if(escolaridade === "fundamental-completo"){
            espacoTexto(documento, "X", 77.5, 160.5, 0);
        }else if(escolaridade === "medio-completo"){
            espacoTexto(documento, "X", 114.5, 160.5, 0);
        }else if(escolaridade === "superior-completo"){
            espacoTexto(documento, "X", 144.5, 160.5, 0);
        }
    }
}