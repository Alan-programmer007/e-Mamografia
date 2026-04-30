import { espacoTexto } from "../ferramentas/utils.js";

export function anamneseSextaGrupoUm(documento){
    // Biopsa inciosional
    const mamaDireitaBiopsa = document.getElementById('cirurgia-biopsia-incisional-dir').value;
    const mamaEsquerdaBiopsa = document.getElementById('cirurgia-biopsia-incisional-esq').value;
    if(mamaDireitaBiopsa !== '' && mamaEsquerdaBiopsa !== ''){
        espacoTexto(documento, mamaDireitaBiopsa, 119, 208.5, 5.5);
        espacoTexto(documento, mamaEsquerdaBiopsa, 177.5, 208.5, 5.5);
    }else if(mamaDireitaBiopsa !== ''){
        espacoTexto(documento, mamaDireitaBiopsa, 119, 208.5, 5.5);
    }else if(mamaEsquerdaBiopsa !== ''){
        espacoTexto(documento, mamaEsquerdaBiopsa, 177.5, 208.5, 5.5);
    }

    // Biopsa Excisional
    const mamaDireitaExcisional = document.getElementById('cirurgia-biopsia-excisional-dir').value;
    const mamaEsquerdaExcisional = document.getElementById('cirurgia-biopsia-excisional-esq').value;
    if(mamaDireitaExcisional !== '' && mamaEsquerdaExcisional !== ''){
        espacoTexto(documento, mamaDireitaExcisional, 119, 214, 5.5);
        espacoTexto(documento, mamaEsquerdaExcisional, 177.5, 214, 5.5);
    }else if(mamaDireitaExcisional !== ''){
        espacoTexto(documento, mamaDireitaBiopsa, 119, 214, 5.5);
    }else if(mamaEsquerdaExcisional !== ''){
        espacoTexto(documento, mamaEsquerdaExcisional, 177.5, 214, 5.5);
    }

    // Centralectomia
    const mamaDireitaCentralectomia = document.getElementById('cirurgia-centralectomia-dir').value;
    const mamaEsquerdaCentralectomia = document.getElementById('cirurgia-centralectomia-esq').value;
    if(mamaDireitaCentralectomia !== '' && mamaEsquerdaCentralectomia !== ''){
        espacoTexto(documento, mamaDireitaCentralectomia, 119, 220, 5.5);
        espacoTexto(documento, mamaEsquerdaCentralectomia, 177.5, 220, 5.5);
    }else if(mamaDireitaCentralectomia !== ''){
        espacoTexto(documento, mamaDireitaCentralectomia, 119, 220, 5.5);
    }else if(mamaEsquerdaCentralectomia !== ''){
        espacoTexto(documento, mamaEsquerdaCentralectomia, 177.5, 220, 5.5);
    }

    // Segmentectomia
    const mamaDireitaSegmentectomia = document.getElementById('cirurgia-segmentectomia-dir').value;
    const mamaEsquerdaSegmentectomia = document.getElementById('cirurgia-segmentectomia-esq').value;
    if(mamaDireitaSegmentectomia !== '' && mamaEsquerdaSegmentectomia !== ''){
        espacoTexto(documento, mamaDireitaSegmentectomia, 119, 225.5, 5.5);
        espacoTexto(documento, mamaEsquerdaSegmentectomia, 177.5, 225.5, 5.5);
    }else if(mamaDireitaSegmentectomia !== ''){
        espacoTexto(documento, mamaDireitaSegmentectomia, 119, 225.5, 5.5);
    }else if(mamaEsquerdaSegmentectomia !== ''){
        espacoTexto(documento, mamaEsquerdaSegmentectomia, 177.5, 225.5, 5.5);
    }
    
    // Ductectomia
    const mamaDireitaDuctectomia = document.getElementById('cirurgia-dutectomia-dir').value;
    const mamaEsquerdaDuctectomia = document.getElementById('cirurgia-dutectomia-esq').value;
    if(mamaDireitaDuctectomia !== '' && mamaEsquerdaDuctectomia !== ''){
        espacoTexto(documento, mamaDireitaDuctectomia, 119, 231, 5.5);
        espacoTexto(documento, mamaEsquerdaDuctectomia, 177.5, 231, 5.5);
    }else if(mamaDireitaDuctectomia !== ''){
        espacoTexto(documento, mamaDireitaDuctectomia, 119, 231, 5.5);
    }else if(mamaEsquerdaDuctectomia !== ''){
        espacoTexto(documento, mamaEsquerdaDuctectomia, 177.5, 231, 5.5);
    }
}

export function anamneseSextaGrupoDois(documento){
    // Mastectomia
    const mamaDireitaMastectomia = document.getElementById('cirurgia-mastectomia-dir').value;
    const mamaEsquerdaMastectomia = document.getElementById('cirurgia-mastectomia-esq').value;
    if(mamaDireitaMastectomia !== '' && mamaEsquerdaMastectomia !== ''){
        espacoTexto(documento, mamaDireitaMastectomia, 119, 236.5, 5.5);
        espacoTexto(documento, mamaEsquerdaMastectomia, 177.5, 236.5, 5.5);
    }else if(mamaDireitaMastectomia !== ''){
        espacoTexto(documento, mamaDireitaMastectomia, 119, 236.5, 5.5);
    }else if(mamaEsquerdaMastectomia !== ''){
        espacoTexto(documento, mamaEsquerdaMastectomia, 177.5, 236.5, 5.5);
    }

    // Masectomia pele
    const mamaDireitaMastectomiaPele = document.getElementById('cirurgia-mastectomia-pele-dir').value;
    const mamaEsquerdaMastectomiaPele = document.getElementById('cirurgia-mastectomia-pele-esq').value;
    if(mamaDireitaMastectomiaPele !== '' && mamaEsquerdaMastectomiaPele !== ''){
        espacoTexto(documento, mamaDireitaMastectomiaPele, 119, 242, 5.5);
        espacoTexto(documento, mamaEsquerdaMastectomiaPele, 177.5, 242, 5.5);
    }else if(mamaDireitaMastectomiaPele !== ''){
        espacoTexto(documento, mamaDireitaMastectomiaPele, 119, 242, 5.5);
    }else if(mamaEsquerdaMastectomiaPele !== ''){
        espacoTexto(documento, mamaEsquerdaMastectomiaPele, 177.5, 242, 5.5);
    }

    // Masectomia areolo-papilar
    const mamaDireitaMastectomiaAreolo = document.getElementById('cirurgia-mastectomia-poupadora-dir').value;
    const mamaEsquerdaMastectomiaAreolo = document.getElementById('cirurgia-mastectomia-poupadora-esq').value;
    if(mamaDireitaMastectomiaAreolo !== '' && mamaEsquerdaMastectomiaAreolo !== ''){
        espacoTexto(documento, mamaDireitaMastectomiaAreolo, 119, 247.5, 5.5);
        espacoTexto(documento, mamaEsquerdaMastectomiaAreolo, 177.5, 247.5, 5.5);
    }else if(mamaDireitaMastectomiaAreolo !== ''){
        espacoTexto(documento, mamaDireitaMastectomiaAreolo, 119, 247.5, 5.5);
    }else if(mamaEsquerdaMastectomiaAreolo !== ''){
        espacoTexto(documento, mamaEsquerdaMastectomiaAreolo, 177.5, 247.5, 5.5);
    }

    // Linfadenectomia
    const mamaDireitaLinfadenectomia = document.getElementById('cirurgia-linfadenectomia-dir').value;
    const mamaEsquerdaLinfadenectomia = document.getElementById('cirurgia-linfadenectomia-esq').value;
    if(mamaDireitaLinfadenectomia !== '' && mamaEsquerdaLinfadenectomia !== ''){
        espacoTexto(documento, mamaDireitaLinfadenectomia, 119, 256, 5.5);
        espacoTexto(documento, mamaEsquerdaLinfadenectomia, 177.5, 256, 5.5);
    }else if(mamaDireitaLinfadenectomia !== ''){
        espacoTexto(documento, mamaDireitaLinfadenectomia, 119, 256, 5.5);
    }else if(mamaEsquerdaLinfadenectomia !== ''){
        espacoTexto(documento, mamaEsquerdaLinfadenectomia, 177.5, 256, 5.5);
    }
}

export function anamneseSextaGrupoTres(documento){
    // Biopsa linfonodo sentinela
    const mamaDireitaSentinela = document.getElementById('cirurgia-biopsia-linfonodo-dir').value;
    const mamaEsquerdaSentinela = document.getElementById('cirurgia-biopsia-linfonodo-esq').value;
    if(mamaDireitaSentinela !== '' && mamaEsquerdaSentinela !== ''){
        espacoTexto(documento, mamaDireitaSentinela, 119, 261.5, 5.5);
        espacoTexto(documento, mamaEsquerdaSentinela, 177.5, 261.5, 5.5);
    }else if(mamaDireitaSentinela !== ''){
        espacoTexto(documento, mamaDireitaSentinela, 119, 261.5, 5.5);
    }else if(mamaEsquerdaSentinela !== ''){
        espacoTexto(documento, mamaEsquerdaSentinela, 177.5, 261.5, 5.5);
    }

    // Recontrucao mamaria
    const mamaDireitaRecontrucao = document.getElementById('cirurgia-reconstrucao-dir').value;
    const mamaEsquerdaRecontrucao = document.getElementById('cirurgia-reconstrucao-esq').value;
    if(mamaDireitaRecontrucao !== '' && mamaEsquerdaRecontrucao !== ''){
        espacoTexto(documento, mamaDireitaRecontrucao, 119, 267, 5.5);
        espacoTexto(documento, mamaEsquerdaRecontrucao, 177.5, 267, 5.5);
    }else if(mamaDireitaRecontrucao !== ''){
        espacoTexto(documento, mamaDireitaRecontrucao, 119, 267, 5.5);
    }else if(mamaEsquerdaRecontrucao !== ''){
        espacoTexto(documento, mamaEsquerdaRecontrucao, 177.5, 267, 5.5);
    }

    // Mamoplatia
    const mamaDireitaMamoplatia = document.getElementById('cirurgia-mastoplastia-dir').value;
    const mamaEsquerdaMamoplatia = document.getElementById('cirurgia-mastoplastia-esq').value;
    if(mamaDireitaMamoplatia !== '' && mamaEsquerdaMamoplatia !== ''){
        espacoTexto(documento, mamaDireitaMamoplatia, 119, 272.5, 5.5);
        espacoTexto(documento, mamaEsquerdaMamoplatia, 177.5, 272.5, 5.5);
    }else if(mamaDireitaMamoplatia !== ''){
        espacoTexto(documento, mamaDireitaMamoplatia, 119, 272.5, 5.5);
    }else if(mamaEsquerdaMamoplatia !== ''){
        espacoTexto(documento, mamaEsquerdaMamoplatia, 177.5, 272.5, 5.5);
    }

    // Implantes
    const mamaDireitaDuctectomia = document.getElementById('cirurgia-implantes-dir').value;
    const mamaEsquerdaDuctectomia = document.getElementById('cirurgia-implantes-esq').value;
    if(mamaDireitaDuctectomia !== '' && mamaEsquerdaDuctectomia !== ''){
        espacoTexto(documento, mamaDireitaDuctectomia, 119, 278, 5.5);
        espacoTexto(documento, mamaEsquerdaDuctectomia, 177.5, 278, 5.5);
    }else if(mamaDireitaDuctectomia !== ''){
        espacoTexto(documento, mamaDireitaDuctectomia, 119, 278, 5.5);
    }else if(mamaEsquerdaDuctectomia !== ''){
        espacoTexto(documento, mamaEsquerdaDuctectomia, 177.5, 278, 5.5);
    }

    // Não fez cirugia
    const checkNaoFez = document.getElementById('nao-fez-cirurgia'); 
   
    if(checkNaoFez.checked){
        espacoTexto(documento, "X", 119, 285.5, 0);
    }
}

