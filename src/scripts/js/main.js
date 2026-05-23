const { jsPDF } = window.jspdf;
import { unidadePrimeiraLinha, unidadeSegundaLinha } from "./secoes/unidade.js";
import { sexo, corEtinia, pessoaisPrimeiroGrupo, pessoaisSegundoGrupo } from "./secoes/pessoais.js";
import { residenciaisPrimeiroGrupo, residenciaisSegundoGrupo, residenciaisTerceiroGrupo, escolaridade } from "./secoes/residenciais.js";
import { naoFezCirugia } from "./ferramentas/funcionalidades.js";
import { dataExaminador, dataExaminadorPaginaUm } from "./secoes/examinador.js";
import { anamneseSextaGrupoUm, anamneseSextaGrupoDois, anamneseSextaGrupoTres } from "./anamnese/sextaanamnese.js";
import { anamnesePerguntaUmDois, anamnesePerguntaTresQuatro, anamnesePerguntaCinco } from "./anamnese/anamnese.js";
import { indicacaoPerguntaCinco, indicacaoMamaDireita, indicacaoMamaEsquerda, controleRadiologico, lesaoCancer, perguntaCincoSeis } from "./indicacao/inidicacaoClinica.js";

const bnt = document.getElementById("bntsalvar-UMA");
const bntDois = document.getElementById("bntsalvar-DUAS");
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

    // Data e Examinador
    dataExaminadorPaginaUm(documento);

    // Pegar os terceiro trio de numeros
    const cpf = document.getElementById('CPF').value
    const digitosCPF = cpf.slice(4, 7)

    // Salvar pdf
    documento.save(nomePaciente + "-" + digitosCPF +'.pdf');
})

bntDois.addEventListener('click', () => {
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

    // Segunda página
    documento.addPage();
    const imgVerso = document.getElementById('background-anamnese-verso');
    documento.addImage(imgVerso, 'JPEG', 0, 0, pageWidth, pageHeight);

    // Segunda pagina - Referente a secao INDICACAO CLINICA
    dataExaminador(documento);
    indicacaoPerguntaCinco(documento);
    indicacaoMamaDireita(documento);
    indicacaoMamaEsquerda(documento);
    controleRadiologico(documento);
    lesaoCancer(documento);
    perguntaCincoSeis(documento);

    // Pegar os terceiro trio de numeros
    const cpf = document.getElementById('CPF').value
    const digitosCPF = cpf.slice(4, 7)

    // Salvar pdf
    documento.save(nomePaciente + "-" + digitosCPF +'.pdf');
})

// Checagem dos capos obrigatorios
function verificarCampos() {
    // Verifica se todos os campos obrigatórios (exceto radios) estão preenchidos
    const todosPreenchidos = Array.from(inputs).filter(input => input.type !== 'radio').every(input => input.value.trim() !== '');

    // Verifica se pelo menos um radio de cada grupo obrigatório está selecionado
    const radiosObrigatorios = Array.from(inputs).filter(input => input.type === 'radio');
    let radiosOk = true;
    if (radiosObrigatorios.length > 0) {
        const grupos = [...new Set(radiosObrigatorios.map(r => r.name))];
        radiosOk = grupos.every(grupo => radiosObrigatorios.some(r => r.name === grupo && r.checked));
    }

    //bntDois.disabled = !(todosPreenchidos && radiosOk);
    bnt.disabled = !(todosPreenchidos && radiosOk);
    bntDois.disabled = !(todosPreenchidos && radiosOk);
}

// Adiciona o evento em cada input
inputs.forEach(input => {
    const evento = input.type === 'radio' ? 'change' : 'input';
    input.addEventListener(evento, verificarCampos);
});

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
        // Desmarca as opcoes radio
        dados[input.name] = input.checked = false;
        // Remove a classe de desativado
        input.classList.remove('desativado');
        // Reativa os campos desativados
        input.disabled = false;
    });
        // Desabilita novamente o botao salvar
        bnt.disabled = true;
        bntDois.disabled = true;
})