import { espacoTexto } from "../ferramentas/utils.js";

export function indicacaoPerguntaCinco(documento){
    // 5- Mamografia diagnostica
    const indicacaoMamaDireita = document.getElementById('indicacao-mama-direita');
    const indicacaoMamaEsquerda = document.getElementById('indicacao-mama-esquerda');
    const indicacaoMamaAmbas = document.getElementById('indicacao-ambas');
    const indicacaoAchadosExames = document.getElementById("achados-exame");

    // 5- Mamografia diagnostica
    if(indicacaoMamaEsquerda.checked){
        espacoTexto(documento, "X", 61, 20, 0);
    }
    if(indicacaoMamaDireita.checked){
        espacoTexto(documento, "X", 99, 20, 0);
    }
    if(indicacaoMamaAmbas.checked){
        espacoTexto(documento, "X", 133, 20, 0);
    }
    // 5a. Achados no exame clínico
    if (indicacaoAchadosExames.checked) {
        espacoTexto(documento, "X", 10.5, 27, 0);
    }
}

export function indicacaoMamaDireita(documento){
    // Lesao Papilar
    const lesaoPapilarDireita = document.getElementById("lesao-papilar");
    // Descarga papilar Cristalina e Heorragica
    const CRISTALINA = document.getElementById("cristalina");
    const HEMORRAGICA = document.getElementById("hemorragica");
    // Nodulo localização
    const QSL = document.getElementById("QSL");
    const QIL = document.getElementById("QIL");
    const QSM = document.getElementById("QSM");
    const QIM = document.getElementById("QIM");
    const UQlat = document.getElementById("UQlat");
    const UQsup = document.getElementById("UQsup");
    const UQmed = document.getElementById("UQmed");
    const UQinf = document.getElementById("UQinf");
    const RRA = document.getElementById("RRA");
    const PAA = document.getElementById("PA");
    // Espessamento Localização
    const QSLEspessamento = document.getElementById("QSL-espessamento");
    const QILEspessamento = document.getElementById("QIL-espessamento");
    const QSMEspessamento = document.getElementById("QSM-espessamento");
    const QIMEspessamento = document.getElementById("QIM-espessamento");
    const UQlatEspessamento = document.getElementById("UQlat-espessamento");
    const UQsupEspessamento = document.getElementById("UQsup-espessamento");
    const UQmedEspessamento = document.getElementById("UQmed-espessamento");
    const UQinfEspessamento = document.getElementById("UQinf-espessamento");
    const RRAEspessamento = document.getElementById("RRA-espessamento");
    const PAEspessamento = document.getElementById("PA-espessamento");
    // Linfodo palpavel
    const AXILIAR = document.getElementById("Axiliar");
    const SUPRACLAVICULAR = document.getElementById("supraclavicular");

    // Lesao Papilar
    if(lesaoPapilarDireita.checked){
        espacoTexto(documento, "X", 13, 38, 0)
    }
    // Descarga papilar Cristalina e Heorragica
    if(CRISTALINA.checked){
        espacoTexto(documento, "X", 82, 36.5, 0)
    }
    if(HEMORRAGICA.checked){
        espacoTexto(documento, "X", 82, 41, 0)
    }
    // Nodulo localização
    // Coluna direita (referente a tela)
    if(QSL.checked){
        espacoTexto(documento, "X", 12.5, 51, 0)
    }
    if(QIL.checked){
        espacoTexto(documento, "X", 31, 51, 0)
    }
    if(QSM.checked){
        espacoTexto(documento, "X", 50, 51, 0)
    }
    if(QIM.checked){
        espacoTexto(documento, "X", 71, 51, 0)
    }
    if(UQlat.checked){
        espacoTexto(documento, "X", 88.5, 51, 0)
    }
    // Coluna esquerda (referente a tela)
    if(UQsup.checked){
        espacoTexto(documento, "X", 12.5, 56, 0)
    }
    if(UQmed.checked){
        espacoTexto(documento, "X", 31, 56, 0)
    }
    if(UQinf.checked){
        espacoTexto(documento, "X", 50, 56, 0)
    }
    if(RRA.checked){
        espacoTexto(documento, "X", 71, 56, 0)
    }
    if(PAA.checked){
        espacoTexto(documento, "X", 88.5, 56, 0)
    }
    // Espessamento Localizacao
    // coluna direita (referente a tela)
    if(QSLEspessamento.checked){
        espacoTexto(documento, "X", 12.5, 68, 0)
    }
    if(QILEspessamento.checked){
        espacoTexto(documento, "X", 31, 68, 0)
    }
    if(QSMEspessamento.checked){
        espacoTexto(documento, "X", 50, 68, 0)
    }
    if(QIMEspessamento.checked){
        espacoTexto(documento, "X", 71, 68, 0)
    }
    if(UQlatEspessamento.checked){
        espacoTexto(documento, "X", 88.5, 68, 0)
    }
    // coluna esquerda (referente a tela)
    if(UQsupEspessamento.checked){
        espacoTexto(documento, "X", 12.5, 73, 0)
    }
    if(UQmedEspessamento.checked){
        espacoTexto(documento, "X", 31, 73, 0)
    }
    if(UQinfEspessamento.checked){
        espacoTexto(documento, "X", 50, 73, 0)
    }
    if(RRAEspessamento.checked){
        espacoTexto(documento, "X", 71, 73, 0)
    }
    if(PAEspessamento.checked){
        espacoTexto(documento, "X", 88.5, 73, 0)
    }
    // Linfodo palpavel
    if(AXILIAR.checked){
        espacoTexto(documento, "X", 38, 81, 0)
    }
    if(SUPRACLAVICULAR.checked){
        espacoTexto(documento, "X", 53.5, 81, 0)
    }
}

export function indicacaoMamaEsquerda(documento){
    // Lesao Papilar
    const lesaoPapilarDireitaEsqeurda = document.getElementById("lesao-papilar-esquerda");
    // Descarga papilar Cristalina e Heorragica
    const CRISTALINAEsqeurda = document.getElementById("cristalina-esquerda");
    const HEMORRAGICAEsqeurda = document.getElementById("hemorragica-esquerda");
    // Nodulo localização
    const QSLEsqeurda = document.getElementById("QSL-esquerda");
    const QILEsqeurda = document.getElementById("QIL-esquerda");
    const QSMEsqeurda = document.getElementById("QSM-esquerda");
    const QIMEsqeurda = document.getElementById("QIM-esquerda");
    const UQlatEsqeurda  = document.getElementById("UQlat-esquerda");
    const UQsupEsqeurda  = document.getElementById("UQsup-esquerda");
    const UQmedEsqeurda  = document.getElementById("UQmed-esquerda");
    const UQinfEsqeurda  = document.getElementById("UQinf-esquerda");
    const RRAEsqeurda  = document.getElementById("RRA-esquerda");
    const PAAEsqeurda  = document.getElementById("PA-esquerda");
    // Espessamento Localização
    const QSLEspessamentoEsqeurda  = document.getElementById("QSL-espessamento-esquerda");
    const QILEspessamentoEsqeurda  = document.getElementById("QIL-espessamento-esquerda");
    const QSMEspessamentoEsqeurda  = document.getElementById("QSM-espessamento-esquerda");
    const QIMEspessamentoEsqeurda  = document.getElementById("QIM-espessamento-esquerda");
    const UQlatEspessamentoEsqeurda  = document.getElementById("UQlat-espessamento-esquerda");
    const UQsupEspessamentoEsqeurda  = document.getElementById("UQsup-espessamento-esquerda");
    const UQmedEspessamentoEsqeurda  = document.getElementById("UQmed-espessamento-esquerda");
    const UQinfEspessamentoEsqeurda  = document.getElementById("UQinf-espessamento-esquerda");
    const RRAEspessamentoEsqeurda  = document.getElementById("RRA-espessamento-esquerda");
    const PAEspessamentoEsqeurda  = document.getElementById("PA-espessamento-esquerda");
    // Linfodo palpavel
    const AXILIAREsqeurda  = document.getElementById("Axiliar-esquerda");
    const SUPRACLAVICULAREsqeurda  = document.getElementById("supraclavicular-esquerda");

    // Lesao Papilar
    if(lesaoPapilarDireitaEsqeurda.checked){
        espacoTexto(documento, "X", 111, 38, 0)
    }
    // Descarga papilar Cristalina e Heorragica
    if(CRISTALINAEsqeurda.checked){
        espacoTexto(documento, "X", 180, 36.5, 0)
    }
    if(HEMORRAGICAEsqeurda.checked){
        espacoTexto(documento, "X", 180, 41, 0)
    }
    // Nodulo localização
    // Coluna direita (referente a tela)
    if(QSLEsqeurda.checked){
        espacoTexto(documento, "X", 110.5, 51, 0)
    }
    if(QILEsqeurda.checked){
        espacoTexto(documento, "X", 129, 51, 0)
    }
    if(QSMEsqeurda.checked){
        espacoTexto(documento, "X", 148, 51, 0)
    }
    if(QIMEsqeurda.checked){
        espacoTexto(documento, "X", 168.5, 51, 0)
    }
    if(UQlatEsqeurda.checked){
        espacoTexto(documento, "X", 186, 51, 0)
    }
    // Coluna esquerda (referente a tela)
    if(UQsupEsqeurda.checked){
        espacoTexto(documento, "X", 110.5, 56, 0)
    }
    if(UQmedEsqeurda.checked){
        espacoTexto(documento, "X", 129, 56, 0)
    }
    if(UQinfEsqeurda.checked){
        espacoTexto(documento, "X", 148, 56, 0)
    }
    if(RRAEsqeurda.checked){
        espacoTexto(documento, "X", 168.5, 56, 0)
    }
    if(PAAEsqeurda.checked){
        espacoTexto(documento, "X", 186, 56, 0)
    }
    // Espessamento Localizacao
    // coluna direita (referente a tela)
    if(QSLEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 110.5, 68, 0)
    }
    if(QILEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 129, 68, 0)
    }
    if(QSMEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 148, 68, 0)
    }
    if(QIMEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 168.5, 68, 0)
    }
    if(UQlatEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 186, 68, 0)
    }
    // coluna esquerda (referente a tela)
    if(UQsupEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 110.5, 73, 0)
    }
    if(UQmedEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 129, 73, 0)
    }
    if(UQinfEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 148, 73, 0)
    }
    if(RRAEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 168.5, 73, 0)
    }
    if(PAEspessamentoEsqeurda.checked){
        espacoTexto(documento, "X", 186, 73, 0)
    }
    // Linfodo palpavel
    if(AXILIAREsqeurda.checked){
        espacoTexto(documento, "X", 135.5, 81, 0)
    }
    if(SUPRACLAVICULAREsqeurda.checked){
        espacoTexto(documento, "X", 151, 81, 0)
    }
}

export function controleRadiologico(documento){
    // 5b. Controle radiológico
    const achadosExame = document.getElementById("achados-exame-radiologico");
    // Perguntas
    // Nodulo
    const noduloDireito = document.getElementById("nodulo-dir");
    const noduloEsquerdo = document.getElementById("nodulo-esq");
    // Microcalcificacao
    const microcalcificacaoDireita = document.getElementById("microcalcificacao-dir");
    const microcalcificacaoEsquerda = document.getElementById("microcalcificacao-esq");
    // Assimetria
    const assimetriaDireita = document.getElementById("assimetria-dir");
    const assimetriaEsquerda = document.getElementById("assimetria-esq");
    // Difusa
    const difusaDireita = document.getElementById("difusa-dir");
    const difusaEsquerda = document.getElementById("difusa-esq");
    // Area densa
    const densaDireita = document.getElementById("densa-dir");
    const densaEsquerda = document.getElementById("densa-esq");
    // Distrocao focal
    const distorcaoDireita = document.getElementById("distorcao-dir");
    const distrocaoEsquerda = document.getElementById("distorcao-esq");

    // 5b. Controle radiológico
    if (achadosExame.checked) {
        espacoTexto(documento, "X", 9, 90, 0);
    }
    // Nodulo
    if (noduloDireito.checked) {
        espacoTexto(documento, "X", 14.5, 97.5, 0);
    }
    if (noduloEsquerdo.checked) {
        espacoTexto(documento, "X", 52.5, 97.5, 0);
    }
    // Microcalcificacao
    if (microcalcificacaoDireita.checked) {
        espacoTexto(documento, "X", 14.5, 101.5, 0);
    }
    if (microcalcificacaoEsquerda.checked) {
        espacoTexto(documento, "X", 52.5, 101.5, 0);
    }
    // Assimetria
    if (assimetriaDireita.checked) {
        espacoTexto(documento, "X", 14.5, 105, 0);
    }
    if (assimetriaEsquerda.checked) {
        espacoTexto(documento, "X", 52.5, 105.5, 0);
    }
    // Difusa
    if (difusaDireita.checked) {
        espacoTexto(documento, "X", 14.5, 109, 0);
    }
    if (difusaEsquerda.checked) {
        espacoTexto(documento, "X", 52.5, 109.5, 0);
    }
    // Area densa
    if (densaDireita.checked) {
        espacoTexto(documento, "X", 14.5, 113, 0);
    }
    if (densaEsquerda.checked) {
        espacoTexto(documento, "X", 52.5, 113.5, 0);
    }
    // Distorcao focal
    if (distorcaoDireita.checked) {
        espacoTexto(documento, "X", 14.5, 117, 0);
    }
    if (distrocaoEsquerda.checked) {
        espacoTexto(documento, "X", 52.5, 117.5, 0);
    }
}

export function lesaoCancer(documento){
    // 5c. Lesao com diagnostico de cancer
    const achadosExameCancer = document.getElementById("achados-exame-cancer");
    // Perguntas
    // Nodulo
    const noduloDireitoCancer = document.getElementById("nodulo-dir-cancer");
    const noduloEsquerdoCancer = document.getElementById("nodulo-esq-cancer");
    // Microcalcificacao
    const microcalcificacaoDireitaCancer = document.getElementById("microcalcificacao-dir-cancer");
    const microcalcificacaoEsquerdaCancer = document.getElementById("microcalcificacao-esq-cancer");
    // Assimetria
    const assimetriaDireitaCancer = document.getElementById("assimetria-dir-cancer");
    const assimetriaEsquerdaCancer = document.getElementById("assimetria-esq-cancer");
    // Difusa
    const difusaDireitaCancer = document.getElementById("difusa-dir-cancer");
    const difusaEsquerdaCancer = document.getElementById("difusa-esq-cancer");
    // Area densa
    const densaDireitaCancer = document.getElementById("densa-dir-cancer");
    const densaEsquerdaCancer = document.getElementById("densa-esq-cancer");
    // Distrocao focal
    const distorcaoDireitaCancer = document.getElementById("distorcao-dir-cancer");
    const distrocaoEsquerdaCancer = document.getElementById("distorcao-esq-cancer");

    // 5b. Controle radiológico
    if (achadosExameCancer.checked) {
        espacoTexto(documento, "X", 77, 89.5, 0);
    }
    // Nodulo
    if (noduloDireitoCancer.checked) {
        espacoTexto(documento, "X", 83, 97.5, 0);
    }
    if (noduloEsquerdoCancer.checked) {
        espacoTexto(documento, "X", 120.5, 97.5, 0);
    }
    // Microcalcificacao
    if (microcalcificacaoDireitaCancer.checked) {
        espacoTexto(documento, "X", 83, 101.5, 0);
    }
    if (microcalcificacaoEsquerdaCancer.checked) {
        espacoTexto(documento, "X", 120.5, 101.5, 0);
    }
    // Assimetria
    if (assimetriaDireitaCancer.checked) {
        espacoTexto(documento, "X", 83, 105, 0);
    }
    if (assimetriaEsquerdaCancer.checked) {
        espacoTexto(documento, "X", 120.5, 105, 0);
    }
    // Difusa
    if (difusaDireitaCancer.checked) {
        espacoTexto(documento, "X", 83, 109, 0);
    }
    if (difusaEsquerdaCancer.checked) {
        espacoTexto(documento, "X", 120.5, 109, 0);
    }
    // Area densa
    if (densaDireitaCancer.checked) {
        espacoTexto(documento, "X", 83, 113, 0);
    }
    if (densaEsquerdaCancer.checked) {
        espacoTexto(documento, "X", 120.5, 113, 0);
    }
    // Distorcao focal
    if (distorcaoDireitaCancer.checked) {
        espacoTexto(documento, "X", 83, 117, 0);
    }
    if (distrocaoEsquerdaCancer.checked) {
        espacoTexto(documento, "X", 120.5, 117, 0);
    }
}

export function perguntaCincoSeis(documento){
    const avaliacaoResposta = document.getElementById("avaliacao-QT");
    const indicacaoRastreamento = document.getElementById("mamografia-rastreamento");

    if(avaliacaoResposta.checked){
        espacoTexto(documento, "X", 143.5, 90, 0);
    }
    if(indicacaoRastreamento.checked){
        espacoTexto(documento, "X", 13, 129, 0);
    }
}