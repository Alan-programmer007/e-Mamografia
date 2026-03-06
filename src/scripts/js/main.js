const { jsPDF } = window.jspdf;
import { unidadePrimeiraLinha, unidadeSegundaLinha } from "./unidade.js";
import { sexo, corEtinia, pessoaisPrimeiroGrupo, pessoaisSegundoGrupo } from "./pessoais.js";
import { residenciaisPrimeiroGrupo, residenciaisSegundoGrupo, residenciaisTerceiroGrupo, escolaridade } from "./residenciais.js";
import { anamneseSextaGrupoUm, anamneseSextaGrupoDois, anamneseSextaGrupoTres } from "./sextaanamnese.js";
import { anamnesePerguntaUmDois, anamnesePerguntaTresQuatro, anamnesePerguntaCinco } from "./anamnese.js";

const bnt = document.querySelector('.bnt-salvar')
const inputs = document.querySelectorAll('input[required]');

naoFezCirugia();

bnt.addEventListener('click', () => {
    const nomePaciente = document.getElementById('nome').value.toUpperCase();
    const documento = new jsPDF();

    // Tamanho da tela pdf
    const pageWidth = documento.internal.pageSize.getWidth();
    const pageHeight = documento.internal.pageSize.getHeight();

    // Imagem de fundo
    const img = document.getElementById('background-anamnese');
    documento.addImage(img, 'JPEG', 0, 0, pageWidth, pageHeight);

    // CONFIGURAÇÕES DO TEXTO
    documento.setFont('helvetica', 'bold'); // Fonte do texto
    documento.setFontSize(9);           // Tamanho do texto
    documento.setTextColor(0, 0, 0);   // Cor do texto

    // Referente a secao que trata da identificacao da unidade
    unidadePrimeiraLinha(documento);
    unidadeSegundaLinha(documento);

    sexo(documento);
    corEtinia(documento);
    pessoaisPrimeiroGrupo(documento);
    pessoaisSegundoGrupo(documento);

    residenciaisPrimeiroGrupo(documento);
    residenciaisSegundoGrupo(documento);
    residenciaisTerceiroGrupo(documento);
    escolaridade(documento);

    anamneseSextaGrupoUm(documento);
    anamneseSextaGrupoDois(documento);
    anamneseSextaGrupoTres(documento);

    anamnesePerguntaUmDois(documento);
    anamnesePerguntaTresQuatro(documento);
    anamnesePerguntaCinco(documento);

    // Salvar pdf
    documento.save(nomePaciente+'.pdf');
})

// Checagem dos capos obrigatorios
function verificarCampos() {
    const todosPreenchidos = Array.from(inputs).every(input => input.value.trim() !== '');
    bnt.disabled = !todosPreenchidos;
}
// Adiciona o evento em cada input
inputs.forEach(input => {
    input.addEventListener('input', verificarCampos);
});

// Não fez a cirugia desabilita os outros campos
function naoFezCirugia() { 
    const checkNaoFez = document.getElementById('nao-fez-cirurgia'); 
    const naoFez = document.querySelectorAll('.nao-fez'); 
    checkNaoFez.addEventListener('change', () => { 
        naoFez.forEach(input => { 
            if (checkNaoFez.checked) { 
                // desativa 
                input.disabled = true; 
                // limpa valor 
                input.value = ''; 
                // adiciona classe para borda diferente 
                input.classList.add('desativado'); 
            } else { 
                // reativa 
                input.disabled = false; 
                // remove classe 
                input.classList.remove('desativado'); 
            }
        }); 
    }); 
}

// Limitar a 4 números as datas
const datas = document.querySelectorAll('.dataAcao'); 
datas.forEach(input => { 
    input.addEventListener("input", function () { 
        const maxLength = 4; if (this.value.length > maxLength) {
             this.value = this.value.slice(0, maxLength); 
        } 
    }); 
});