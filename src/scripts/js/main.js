const { jsPDF } = window.jspdf;
import { unidadePrimeiraLinha, unidadeSegundaLinha } from "./unidade.js";
import { sexo, corEtinia, pessoaisPrimeiroGrupo, pessoaisSegundoGrupo } from "./pessoais.js";
import { residenciaisPrimeiroGrupo, residenciaisSegundoGrupo, residenciaisTerceiroGrupo, escolaridade } from "./residenciais.js";
import { anamneseSextaGrupoUm, anamneseSextaGrupoDois, anamneseSextaGrupoTres } from "./sextaanamnese.js";
import { anamnesePerguntaUmDois, anamnesePerguntaTresQuatro, anamnesePerguntaCinco } from "./anamnese.js";

const bnt = document.querySelector('.bnt-salvar')
const bntLimpar = document.getElementById('bnt-limpar');
const inputs = document.querySelectorAll('input[required]');

// Chama a funcao nao fez cirugia
naoFezCirugia();

bnt.addEventListener('click', () => {
    const nome = document.getElementById('nome').value.toUpperCase();
    const nomePaciente = nome.split(" ")[0];
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

    // Referente a secao INFORMAÇÔES PESSOAIS
    sexo(documento);
    corEtinia(documento);
    pessoaisPrimeiroGrupo(documento);
    pessoaisSegundoGrupo(documento);

    // Referente a secao DADOS RESIDENCIAIS
    residenciaisPrimeiroGrupo(documento);
    residenciaisSegundoGrupo(documento);
    residenciaisTerceiroGrupo(documento);
    escolaridade(documento);

    // Referente a secao DADOS DA ANAMNESE (UNIDADE SOLICITANTE) apenas as perguntas 1,2,3,4 e 5
    anamnesePerguntaUmDois(documento);
    anamnesePerguntaTresQuatro(documento);
    anamnesePerguntaCinco(documento);

    // Referente a secao DADOS DA ANAMNESE (UNIDADE SOLICITANTE) apenas a pergunta 6
    anamneseSextaGrupoUm(documento);
    anamneseSextaGrupoDois(documento);
    anamneseSextaGrupoTres(documento);

    // Pegar os terceiro trio de numeros
    const cpf = document.getElementById('CPF').value
    const digitosCPF = cpf.slice(6, 9)

    // Salvar pdf
    documento.save(nomePaciente + "-" + digitosCPF +'.pdf');
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
    input.addEventListener('input', function () { 
        const maxLength = 4;
        if (this.value.length > maxLength) {
             this.value = this.value.slice(0, maxLength); 
        } 
    }); 
});

// Limpar o que já foi preenchido
bntLimpar.addEventListener('click', () => {
    // Seleciona todos os inputs dentro da classe limpar
    const inputs = document.querySelectorAll(".limpar input");
    // Cria um objeto para armazenar os valores
    const dados = {};
    // altera o valor de todos para vazio e false
    inputs.forEach(input => {
        // Vazio
        dados[input.name] = input.value = '';
        // False
        if(input.id != "nao-fez-cirurgia"){
            input.checked = false;
        }
        
    });
})