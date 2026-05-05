import { espacoTexto, configurarCampoNumerico} from "../ferramentas/utils.js";

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

    espacoTexto(documento, EXAMINADOR, 45, 285, 2.5);
    espacoTexto(documento, dataModelo, 45, 290, 2.5);
    espacoTexto(documento, EXAME, 45, 295, 2.5);
}

export function dataExaminador(documento){
    const dataSolicitacao = document.getElementById("solicitcao").value;
    const EXAMINADOR = document.getElementById("Examinador").value.toUpperCase();
    const EXAME = document.getElementById("num-exame").value;

    const ano = dataSolicitacao.slice(0, 4);
    const mes = dataSolicitacao.slice(5, 7);
    const dia = dataSolicitacao.slice(8, 10);

    espacoTexto(documento, EXAMINADOR, 69.5, 140, 5.5);
    espacoTexto(documento, dia, 9, 140, 5.5);
    espacoTexto(documento, mes, 25, 140, 5.5);
    espacoTexto(documento, ano, 42, 140, 5.5);
    espacoTexto(documento, EXAME, 34.5, 147.5, 5.5);
}