import { espacoTexto, escreverEmCaixas, configurarCampoNumerico} from "../ferramentas/utils.js";

const numeroCasa = document.getElementById('numero');
const codigoMunicipio = document.getElementById('codigo-municipio-res');
const cepParteUm = document.getElementById('cep-parte1');
const cepParteDois = document.getElementById('cep-parte2');
const ddd = document.getElementById('ddd');
const telefoneParteUm =document.getElementById('telefone-parte1');
const telefoneParteDois = document.getElementById('telefone-parte2');

// Limita o quantidade de numeros que pode ser digitada em numero da casa
configurarCampoNumerico(numeroCasa, 6);
configurarCampoNumerico(codigoMunicipio, 7);
configurarCampoNumerico(cepParteUm, 5);
configurarCampoNumerico(cepParteDois, 3);
configurarCampoNumerico(ddd, 2)
configurarCampoNumerico(telefoneParteUm, 4);
configurarCampoNumerico(telefoneParteDois, 4);

export function residenciaisPrimeiroGrupo(documento){
    const LOGRADOURO = document.getElementById('logradouro').value.toLocaleUpperCase();
    const COMPLEMENTO = document.getElementById('complemento').value.toLocaleUpperCase();
    const NUMERO_CASA = document.getElementById('numero').value;
    const PONTO_REFERENCIA = document.getElementById('ponto-referencia').value.toLocaleUpperCase();

    escreverEmCaixas(documento, LOGRADOURO, 10.9, 204, 107, 35);
    escreverEmCaixas(documento, NUMERO_CASA, 11.4, 44.4, 115.5, 6);
    escreverEmCaixas(documento, COMPLEMENTO, 55.3, 204.4, 115.5, 27);
    escreverEmCaixas(documento, PONTO_REFERENCIA, 10.9, 204, 149.5, 35);
}

export function residenciaisSegundoGrupo(documento){
    const CODIGO_MUNICIPIO = document.getElementById('codigo-municipio-res').value;
    const MUNICIPIO_RESIDENCIA = document.getElementById('municipio-res').value.toLocaleUpperCase();
    const UF_RESIDENCIA = document.getElementById('uf-residencia').value.toLocaleUpperCase();
    const BAIRRO = document.getElementById('botafogo').value.toLocaleUpperCase();

    escreverEmCaixas(documento, CODIGO_MUNICIPIO, 10.9, 49.8, 132, 7);
    escreverEmCaixas(documento, MUNICIPIO_RESIDENCIA, 54.9, 137.7, 132, 15);
    escreverEmCaixas(documento, UF_RESIDENCIA, 188.4, 199.5, 123.5, 2);
    escreverEmCaixas(documento, BAIRRO, 100.7, 183, 123.5, 15);
}

export function residenciaisTerceiroGrupo(documento){
    const CEP_PARTE_UM = document.getElementById('cep-parte1').value;
    const CEP_PARTE_DOIS = document.getElementById('cep-parte2').value;
    const DDD = document.getElementById('ddd').value;
    const NUMERO_PARTE_UM = document.getElementById('telefone-parte1').value;
    const NUMERO_PARTE_DOIS = document.getElementById('telefone-parte2').value;

    escreverEmCaixas(documento, CEP_PARTE_UM, 10.9, 38.6, 140.5, 5);
    escreverEmCaixas(documento, CEP_PARTE_DOIS, 44, 60.7, 140.5, 3);
    escreverEmCaixas(documento, DDD, 77, 88.4, 140.5, 2);
    escreverEmCaixas(documento, NUMERO_PARTE_UM, 99.1, 121.4, 140.5, 4);
    escreverEmCaixas(documento, NUMERO_PARTE_DOIS, 126.7, 148.8, 140.5, 4);
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