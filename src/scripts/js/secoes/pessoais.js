import { espacoTexto, escreverEmCaixas, escreverEmLinha, configurarCampoNumerico, filtrarTeclasNumericas, validarCPF, calcularIdade} from "../ferramentas/utils.js";

const CPF = document.getElementById("CPF")
const CARTAOSUS = document.getElementById('cartao-sus')
const idade = document.getElementById("idade")
const dataNascimento = document.getElementById("nascimento");

// Limita o quantidade de numeros que pode ser digitada em CPF e Idade
CPF.addEventListener("keydown", filtrarTeclasNumericas);

// Mascara do CPF
CPF.addEventListener("input", (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    
    // Aplica a máscara
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    event.target.value = value; 
});

// Verifica se o CPF adicionado e valido
CPF.addEventListener("change", () => {
    if (CPF.value.length > 0) {
        const ehValido = validarCPF(CPF.value);
        
        if (!ehValido) {
            CPF.classList.add("invalido");
        } else {
            CPF.classList.remove("invalido");
        }
    }
});

CARTAOSUS.addEventListener("keydown", filtrarTeclasNumericas);

CARTAOSUS.addEventListener("input", () => {
    let value = event.target.value.replace(/\D/g, ''); // só números

    // Aplica a máscara conforme o usuário digita
    if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d)/, "$1 $2");
    }
    if (value.length > 7) {
        value = value.replace(/^(\d{3}\s\d{4})(\d)/, "$1 $2");
    }
    if (value.length > 11) {
        value = value.replace(/^(\d{3}\s\d{4}\s\d{4})(\d)/, "$1 $2");
    }

    event.target.value = value;
});

// Calcula a idade automaticamente
dataNascimento.addEventListener("change", () => {
    const idadeCalculada = calcularIdade(dataNascimento.value);
    
    if (idadeCalculada >= 0) {
        idade.value = idadeCalculada
    }
});

export function sexo(documento){
    const feminino = document.getElementById('feminino'); 
    const masculino = document.getElementById('masculino');
    let sexoSelecionado = null; 

    if (feminino.checked){
        sexoSelecionado = feminino.value
    }else if (masculino.checked){
        sexoSelecionado = masculino.value
    }

    if(sexoSelecionado !== null){
        if(sexoSelecionado === "masculino"){
            espacoTexto(documento, "X", 102, 54.5, 5.5);
        }else{
            espacoTexto(documento, "X", 119, 54.5, 5.5);
        }
    }
}

export function corEtinia(documento){
    const branca = document.getElementById('branca');
    const preta = document.getElementById('preta');
    const parda = document.getElementById('parda');
    const amarela = document.getElementById('amarela');
    const indigena = document.getElementById('indigena')
    const etinia = document.getElementById('etnia-especificar')
    let etiniaCor = null; 

    if (branca.checked){
        etiniaCor = branca.value
    }else if (preta.checked){
        etiniaCor = preta.value
    }else if (parda.checked){
        etiniaCor = parda.value
    }else if (amarela.checked){
        etiniaCor = amarela.value
    }else if (indigena.checked){
        etiniaCor = indigena.value
    }else if (etinia.value !== ' '){
        etiniaCor = etinia.value.toUpperCase();
    }

    if(etiniaCor !== null){
        if(etiniaCor === "branca"){
            espacoTexto(documento, "X", 97, 95, 5.5);
        }else if(etiniaCor === "preta" ){
            espacoTexto(documento, "X", 113.5, 95, 5.5);
        }else if(etiniaCor === "parda" ){
            espacoTexto(documento, "X", 128, 95, 5.5);
        }else if(etiniaCor === "amarela" ){
            espacoTexto(documento, "X", 142, 95, 5.5);
        }else if(etiniaCor === "indigena" ){
            espacoTexto(documento, "X", 160.5, 95, 5.5);
        }else{
            escreverEmLinha(documento, etiniaCor, 183, 204, 94.5);
        }
    }
}

export function pessoaisPrimeiroGrupo(documento){
    const CARTAO = document.getElementById('cartao-sus').value.toUpperCase();
    const CARTAOSUS = CARTAO.replace(/\s/g, '');
    const NOME = document.getElementById('nome').value.toUpperCase();
    const APELIDO = document.getElementById('apelido').value.toUpperCase();
    const NACIONALIDADE = document.getElementById('nacionalidade').value.toUpperCase();
    const nomeMae = document.getElementById('mae').value.toUpperCase();

    escreverEmCaixas(documento, CARTAOSUS, 11.2, 92.3, 54, 15)
    escreverEmCaixas(documento, NOME, 11.4, 204.4, 61.5, 35)
    escreverEmCaixas(documento, nomeMae, 11.4, 204.4, 77, 35)
    escreverEmCaixas(documento, APELIDO, 99.3, 204.4, 69, 19)
    escreverEmLinha(documento, NACIONALIDADE, 96.5, 160.2, 86)
}

export function pessoaisSegundoGrupo(documento){
    const CPF = document.getElementById("CPF").value;
    const CPFVALIDADO = CPF.replace(/\D/g, '');
    const idade = document.getElementById("idade").value;
    const data = document.getElementById("nascimento").value

    const ano = data.slice(0, 4)
    const mes = data.slice(5, 7);
    const dia = data.slice(8, 10)

    escreverEmCaixas(documento, CPFVALIDADO, 11.6, 72.3, 86, 11);
    escreverEmCaixas(documento, idade, 71.6, 82.8, 94.5, 2);
    escreverEmCaixas(documento, dia, 10.9, 22.1, 94.5, 2);
    escreverEmCaixas(documento, mes, 27.4, 38.1, 94.5, 2);
    escreverEmCaixas(documento, ano, 43.7, 65.8, 94.5, 4);
}
