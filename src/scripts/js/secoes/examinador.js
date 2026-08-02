import { escreverEmCaixas, escreverEmLinha, configurarCampoNumerico} from "../ferramentas/utils.js";

const numeroExame = document.getElementById("num-exame");

configurarCampoNumerico(numeroExame, 15)

export function dataExaminadorPaginaUm(documento){
    const dataSolicitacao = document.getElementById("solicitcao").value;
    const EXAMINADOR = document.getElementById("Examinador").value.toUpperCase();
    const EXAME = document.getElementById("num-exame").value;

    const ano = dataSolicitacao.slice(0, 4);
    const mes = dataSolicitacao.slice(5, 7);
    const dia = dataSolicitacao.slice(8, 10);

    const dataModelo = dia + " / " + mes + " / " + ano;

    // Area livre do rodape: para antes do "X" de "nao fez cirurgia", em x=119
    escreverEmLinha(documento, EXAMINADOR, 45, 115, 285);
    escreverEmLinha(documento, dataModelo, 45, 115, 290);
    escreverEmLinha(documento, EXAME, 45, 115, 295);
}

export function dataExaminador(documento){
    const dataSolicitacao = document.getElementById("solicitcao").value;
    const EXAMINADOR = document.getElementById("Examinador").value.toUpperCase();
    const EXAME = document.getElementById("num-exame").value;

    const ano = dataSolicitacao.slice(0, 4);
    const mes = dataSolicitacao.slice(5, 7);
    const dia = dataSolicitacao.slice(8, 10);

    escreverEmCaixas(documento, EXAMINADOR, 67.6, 200.3, 140, 24);
    escreverEmCaixas(documento, dia, 6.7, 17.8, 140, 2);
    escreverEmCaixas(documento, mes, 23.1, 33.9, 140, 2);
    escreverEmCaixas(documento, ano, 39.5, 61.6, 140, 4);
    escreverEmCaixas(documento, EXAME, 32.1, 115.1, 147.5, 15);
}