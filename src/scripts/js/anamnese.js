import { espacoTexto } from "./espaco.js";


export function anamnesePerguntaUmDois(documento){
    // Pergunta 1
    // Tem nodulo ou caroço na mama: Sim Direita
    const checkSImNoduloDireito = document.getElementById('nodulo-direita');
    if(checkSImNoduloDireito.checked){
        espacoTexto(documento, "X", 14.5, 178.5, 0);
    }
    // Tem nodulo ou caroço na mama: Sim Esquerda
    const checkSimNoduloEsquerda = document.getElementById('nodulo-esquerda');
    if(checkSimNoduloEsquerda.checked){
        espacoTexto(documento, "X", 14.5, 182.5, 0);
    }
    // Nao
    const checkNaoNodulo = document.getElementById('nodulo-esquerda');
    if(checkNaoNodulo.checked){
        espacoTexto(documento, "X", 14.5, 187, 0);
    }

    // Pergunta 2
    // Apresenta risco elvado para cancer: Sim
    const checkRiscoElevadoSim = document.getElementById('risco-sim');
    if(checkRiscoElevadoSim.checked){
        espacoTexto(documento, "X", 14.5, 198, 0);
    }
    // Apresenta risco elvado para cancer: Nao
    const checkRiscoElevadoNao = document.getElementById('risco-nao');
    if(checkRiscoElevadoNao.checked){
        espacoTexto(documento, "X", 14.5, 202.5, 0);
    }
    // Apresenta risco elvado para cancer: Nao sabe
    const checkRiscoElevadoNaoSabe = document.getElementById('risco-nao-sabe');
    if(checkRiscoElevadoNaoSabe.checked){
        espacoTexto(documento, "X", 14.5, 207, 0);
    }
}

export function anamnesePerguntaTresQuatro(documento){
    // Pergunta 3
    // Antes desta consulta já teve suas mamas examinadas por um profissionall: Sim
    const mamasExaminadasSim = document.getElementById('exame-sim');
    if(mamasExaminadasSim.checked){
        espacoTexto(documento, "X", 14.5, 256, 0);
    }
    // Antes desta consulta já teve suas mamas examinadas por um profissionall: Nunca
    const mamasExaminadasNunca = document.getElementById('exame-nunca');
    if(mamasExaminadasNunca.checked){
        espacoTexto(documento, "X", 14.5, 260.5, 0);
    }
    // Antes desta consulta já teve suas mamas examinadas por um profissionall: Nao sabe
    const mamasExaminadasNaoSabe = document.getElementById('exame-nao-sabe');
    if(mamasExaminadasNaoSabe.checked){
        espacoTexto(documento, "X", 14.5, 265.5, 0);
    }

    // Pergunta 4
    // Fez mamografia alguma: Sim + ano
    const mamografiaSim = document.getElementById('mamografia-sim');
    if(mamografiaSim.checked){
        const anoMamografia = document.getElementById('mamografia-ano').value;
        espacoTexto(documento, "X", 14.5, 276.5, 0);
        espacoTexto(documento, anoMamografia, 68, 275.5, 5.5);
    }
    // Fez mamografia alguma: Nao
    const mamografiaNao = document.getElementById('mamografia-nao');
    if(mamografiaNao.checked){
        espacoTexto(documento, "X", 14.5, 281, 0);
    }
    // Fez mamografia alguma: Nao sabe
    const mamografiaNaoSabe = document.getElementById('mamografia-nao-sabe');
    if(mamografiaNaoSabe.checked){
        espacoTexto(documento, "X", 14.5, 285.5, 0);
    }
}

export function anamnesePerguntaCinco(documento){
    // Pergunta 5
    // Faz radioterapia na mama em que ano: Sim, direita + ano
    const checkSimMamaDireita = document.getElementById('radio-direita');
    if(checkSimMamaDireita.checked){
        const dataMamaDireita = document.getElementById('radio-direita-ano').value;
        espacoTexto(documento, "X", 119, 179, 0);
        espacoTexto(documento, dataMamaDireita, 148, 178.5, 5.5);
    }
    // Faz radioterapia na mama em que ano: Sim, esquerda + ano
    const checkSimMamaEsquerda = document.getElementById('radio-esquerda');
    if(checkSimMamaEsquerda.checked){
        const dataMamaDireita = document.getElementById('radio-esquerda-ano').value;
        espacoTexto(documento, "X", 119, 183.5, 0);
        espacoTexto(documento, dataMamaDireita, 148, 183.5, 5.5);
    }
    // Faz radioterapia na mama em que ano: Nao
    const checkNao = document.getElementById('radio-nao');
    if(checkNao.checked){
        espacoTexto(documento, "X", 119, 188, 0);
    }
    // Faz radioterapia na mama em que ano: Nao sabe
    const checkNaoSabe = document.getElementById('radio-nao-sabe');
    if(checkNaoSabe.checked){
        espacoTexto(documento, "X", 119, 193, 0);
    }
}