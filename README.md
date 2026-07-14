# 🩺 e-Mamografia

Uma aplicação **desktop** desenvolvida para otimizar e padronizar o preenchimento da **Anamnese de Requisição de Mamografia**, tornando o processo mais rápido, intuitivo e seguro para profissionais da saúde.

Desenvolvida como parte do projeto **PET-Saúde & Digital**, a aplicação foi criada inicialmente para atender às necessidades do **CEDIM (Centro de Diagnóstico e Imagem Prof. Alberto Cardoso)**, podendo ser adaptada para outras instituições de saúde com pequenas customizações.

---

# 📋 Sobre o Projeto

O **e-Mamografia** é uma aplicação desktop desenvolvida utilizando tecnologias web com **Electron**, permitindo sua execução como um software nativo para Windows.

Seu principal objetivo é substituir o preenchimento manual da anamnese de requisição de mamografia por um processo digital, reduzindo erros, agilizando o atendimento e melhorando a organização das informações.

Após o preenchimento dos dados obrigatórios, a aplicação gera automaticamente um **arquivo PDF** contendo a requisição pronta para impressão ou armazenamento digital.

A interface foi desenvolvida com foco na simplicidade, acessibilidade e produtividade, permitindo que qualquer profissional consiga utilizá-la sem necessidade de treinamento complexo.

---

# 🎯 Objetivos

- Digitalizar o preenchimento da requisição de mamografia.
- Reduzir erros durante o preenchimento.
- Agilizar o atendimento aos pacientes.
- Facilitar futuras integrações e adaptações para outras instituições.

---

# 🛠️ Tecnologias Utilizadas

**Aplicação Desktop**

- ☕ JavaScript
- 🌐 HTML5
- 🎨 CSS3
- 🖥️ Electron
- 📄 jsPDF
- 📦 Node.js
- 📦 NPM
- ⚙️ Electron Builder

---

# ✨ Funcionalidades

- ✅ Interface moderna e intuitiva
- ✅ Responsiva para diferentes resoluções de tela
- ✅ Preenchimento digital da anamnese
- ✅ Validação automática dos campos obrigatórios
- ✅ Botão de download bloqueado até que todas as informações obrigatórias sejam preenchidas
- ✅ Processo rápido e simples para o usuário
- ✅ Aplicação executada localmente, sem necessidade de conexão com a internet

---

# 📄 Geração de PDF

Após preencher todos os campos obrigatórios, o sistema habilita automaticamente o botão de download.

O usuário poderá escolher entre:

- 📄 Gerar somente a primeira página
- 📑 Gerar a requisição completa (duas páginas)

Toda a geração do documento é realizada utilizando a biblioteca **jsPDF**.

---

# 📱 Interface

A interface foi projetada priorizando:

- Simplicidade
- Facilidade de uso
- Rapidez no preenchimento
- Boa experiência do usuário

O layout adapta-se a diferentes resoluções de tela, garantindo boa usabilidade em diversos ambientes.

---

# 🏥 Projeto PET-Saúde & Digital

Este software foi desenvolvido como parte do projeto de extensão e pesquisa **PET-Saúde & Digital**.

A primeira implantação foi realizada para o:

**CEDIM — Centro de Diagnóstico e Imagem Prof. Alberto Cardoso**

Seu objetivo é contribuir para a modernização dos processos de atendimento relacionados às solicitações de exames de mamografia.

Embora tenha sido desenvolvido especificamente para o CEDIM, sua estrutura permite adaptação para outras clínicas, hospitais e centros de diagnóstico com pequenas alterações.

---

# 📂 Estrutura do Projeto

```text
e-Mamografia/
│
├── assets/                 # Imagens, ícones e recursos visuais
├── build/                  # Recursos utilizados na geração do instalador
├── css/
├── js/
├── index.html
├── main.js                 # Processo principal do Electron
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Instalação

## Pré-requisitos

Antes de iniciar, tenha instalado:

- Node.js
- NPM

---

## Clonar o repositório

```bash
git clone https://github.com/Alan-programmer007/e-Mamografia.git
```

Entre na pasta do projeto:

```bash
cd e-Mamografia
```

---

## Instalar as dependências

```bash
npm install
```

---

# ▶️ Executando em modo de desenvolvimento

Para iniciar a aplicação utilizando o Electron:

```bash
npm run dev
```

ou

```bash
npx electron .
```

---

# 📦 Gerando o Executável

Para gerar o instalador da aplicação:

```bash
npm run build
```

ou

```bash
npx electron-builder
```

Ao final do processo, o instalador será gerado automaticamente na pasta correspondente configurada pelo **Electron Builder**.

---

# 🔒 Validações

A aplicação possui diversas validações para garantir o correto preenchimento da requisição.

Entre elas:

- Campos obrigatórios
- Liberação do botão de download apenas após preenchimento completo
- Organização automática das informações no PDF
- Geração somente quando todos os dados estiverem válidos

---

# 🎓 Finalidade Acadêmica

Este projeto foi desenvolvido para fins de:

- Extensão Universitária
- Pesquisa
- Inovação em Saúde Digital
- Modernização de processos hospitalares

Além de representar uma solução prática para otimização do preenchimento de requisições de mamografia.

---

# 👨‍💻 Autor

Desenvolvido por **Alan Silva**

🔗 GitHub

https://github.com/Alan-programmer007

Projeto desenvolvido no âmbito do **PET-Saúde & Digital**.

---

# 📄 Licença

Este projeto possui **licença para fins de estudo e pesquisa**.

É permitido:

- Estudar o código-fonte;
- Utilizar como referência para aprendizado;
- Realizar adaptações para fins acadêmicos.

**Não é permitido:**

- Comercializar a aplicação;
- Revender o software;
- Distribuí-lo para fins comerciais;
- Utilizar o projeto comercialmente sem autorização prévia.

Para qualquer utilização comercial, institucional ou redistribuição, entre em contato com o autor para obter autorização.

---

## ⭐ Agradecimentos

Agradecimentos ao **PET-Saúde & Digital**, ao **CEDIM (Centro de Diagnóstico e Imagem Prof. Alberto Cardoso)**, aos preceptores, professores, pesquisadores e toda a equipe envolvida no desenvolvimento e validação da aplicação.

Este projeto demonstra como tecnologias web podem ser utilizadas para criar soluções desktop capazes de contribuir diretamente para a melhoria dos processos na área da saúde.
