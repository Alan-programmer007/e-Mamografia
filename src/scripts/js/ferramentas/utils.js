// Escreve o texto dentro das quadriculas do formulario, uma letra por caixa e
// centralizada nela. As caixas vao de ini a fim (mm), medidos na imagem de
// fundo, de modo que o passo sai exato e a letra nao deriva para cima do traco.
// Se o texto tiver mais letras que caixas, passa a escrever corrido.
export function escreverEmCaixas(documento, texto, ini, fim, y, celulas) {
    if (!texto) return;

    // Mais letras que caixas: escreve corrido, com uma folga nas bordas para
    // o texto nao encostar nos tracos das extremidades.
    if (texto.length > celulas) {
        escreverEmLinha(documento, texto, ini + 1, fim - 1, y);
        return;
    }

    const passo = (fim - ini) / celulas;
    for (let i = 0; i < texto.length; i++) {
        const centro = ini + (i + 0.5) * passo;
        documento.text(texto[i], centro - documento.getTextWidth(texto[i]) / 2, y);
    }
}

// Escreve corrido, com o espacamento natural da fonte, entre ini e fim (mm).
// Se ainda assim nao couber, aperta o espacamento entre as letras ate caber,
// em vez de deixar o texto invadir o campo vizinho.
export function escreverEmLinha(documento, texto, ini, fim, y) {
    if (!texto) return;

    const largura = fim - ini;
    const natural = documento.getTextWidth(texto);

    if (natural <= largura || texto.length < 2) {
        documento.text(texto, ini, y);
        return;
    }

    documento.text(texto, ini, y, { charSpace: (largura - natural) / (texto.length - 1) });
}

// Marcacoes "X" e campos curtos de formato fixo, com passo constante.
export function espacoTexto(documento, texto, startX, startY, espaco) {
    let x = startX;

    for (let i = 0; i < texto.length; i++) {
        documento.text(texto[i], x, startY);
        x += espaco;
    }
}

export function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    const cpfArray = cpf.split('').map(el => +el);
    const calc = (count) => (cpfArray.slice(0, count - 12).reduce((soma, el, i) => soma + el * (count - i), 0) * 10) % 11 % 10;
    return calc(10) === cpfArray[9] && calc(11) === cpfArray[10];
}

export function filtrarTeclasNumericas(event) {
    const restrictKeys = ['e', 'E', '-', '+', '.', ','];
    if (restrictKeys.includes(event.key)) event.preventDefault();
}

export function limitarTamanho(inputElement, maxValue) {
    if (inputElement.value.length > maxValue) {
        inputElement.value = inputElement.value.slice(0, maxValue);
    }
}

export function configurarCampoNumerico(elemento, maximo) {
    elemento.addEventListener("keydown", filtrarTeclasNumericas);
    elemento.addEventListener("input", () => limitarTamanho(elemento, maximo));
}

export function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}