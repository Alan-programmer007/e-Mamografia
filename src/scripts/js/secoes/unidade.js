import { escreverEmCaixas, escreverEmLinha, configurarCampoNumerico} from "../ferramentas/utils.js";

const CODIGO = document.getElementById('codigo-municipio')

configurarCampoNumerico(CODIGO, 7)

// Referente a secao que trata da identificacao da unidade
export function unidadePrimeiraLinha(documento){
    const UF = document.getElementById('uf').value.toUpperCase();
    const CNES = document.getElementById('cnes').value.toUpperCase();
    const PROTOCOLO = document.getElementById('protocolo').value.toUpperCase();
    const UNIDADE = document.getElementById('unidade').value.toUpperCase();

    escreverEmCaixas(documento, UF, 11, 21.9, 21.5, 2)
    escreverEmCaixas(documento, CNES, 57.4, 96.3, 22.5, 7)
    escreverEmLinha(documento, PROTOCOLO, 143, 204.2, 20.5)
    escreverEmCaixas(documento, UNIDADE, 10.9, 204, 29.5, 35)
}
export function unidadeSegundaLinha(documento){
    const CODIGO = document.getElementById('codigo-municipio').value.toUpperCase();
    const MUNICIPIO = document.getElementById('municipio').value.toUpperCase();
    const PONTUARIO = document.getElementById('pontuario').value.toUpperCase();

    escreverEmCaixas(documento, CODIGO, 11.2, 49.5, 37.5, 7);
    escreverEmCaixas(documento, MUNICIPIO, 55.1, 137.7, 37.5, 15);
    escreverEmCaixas(documento, PONTUARIO, 143.5, 199.1, 37.5, 10);
}