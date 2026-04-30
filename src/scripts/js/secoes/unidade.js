import { espacoTexto, configurarCampoNumerico} from "../ferramentas/utils.js";

const CODIGO = document.getElementById('codigo-municipio')

configurarCampoNumerico(CODIGO, 7)

// Referente a secao que trata da identificacao da unidade
export function unidadePrimeiraLinha(documento){
    const UF = document.getElementById('uf').value.toUpperCase();
    const CNES = document.getElementById('cnes').value.toUpperCase();
    const PROTOCOLO = document.getElementById('protocolo').value.toUpperCase();
    const UNIDADE = document.getElementById('unidade').value.toUpperCase();

    espacoTexto(documento, UF, 12, 21.5, 5.5)
    espacoTexto(documento, CNES, 59, 22.5, 5.5)
    espacoTexto(documento, PROTOCOLO, 145, 20.5, 5.5)
    espacoTexto(documento, UNIDADE,  12, 29.5, 5.6)
}
export function unidadeSegundaLinha(documento){
    const CODIGO = document.getElementById('codigo-municipio').value.toUpperCase();
    const MUNICIPIO = document.getElementById('municipio').value.toUpperCase();
    const PONTUARIO = document.getElementById('pontuario').value.toUpperCase();

    espacoTexto(documento, CODIGO, 12, 37.5, 5.6);
    espacoTexto(documento, MUNICIPIO, 56, 37.5, 5.5);
    espacoTexto(documento, PONTUARIO, 145, 37.5, 5.5);
}