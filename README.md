# 🧪 Suíte de Testes Automatizados E2E - Swag Labs (SauceDemo)

Este repositório contém a suíte de testes automatizados End-to-End (E2E) desenvolvida com **CodeceptJS** e **Playwright**, cobrindo os principais fluxos de usuários na aplicação e-commerce **[Swag Labs (SauceDemo)](https://www.saucedemo.com)**.

---

## 🛠️ Tecnologias Utilizadas

- **[CodeceptJS](https://codecept.io/)**: Framework de automação de testes com sintaxe intuitiva orientada a cenários de usuário.
- **[Playwright](https://playwright.dev/)**: Driver/Engine de automação utilizado para interação rápida e resiliente com o navegador Chromium.
- **Node.js**: Ambiente de execução JavaScript.
- **CodeceptJS UI**: Interface gráfica interativa para execução e depuração de testes.
- **htmlReporter Plugin**: Gerador automático de relatórios em HTML para acompanhamento dos resultados.

---

## 📁 Estrutura do Projeto

```text
trabalho-codecept/
├── e2e/                 # Diretório contendo as suítes de teste E2E
│   ├── carrinho_test.js     # Cenários de teste do Carrinho de Compras (CT-13 a CT-18)
│   ├── checkout_test.js     # Cenários de teste do Fluxo de Pagamento/Checkout (CT-19 a CT-23)
│   ├── inventario_test.js   # Cenários de teste do Catálogo e Filtros de Produtos (CT-07 a CT-12)
│   └── login_test.js        # Cenários de teste de Autenticação e Segurança (CT-01 a CT-06)
├── codecept.conf.js     # Arquivo principal de configuração do CodeceptJS e Playwright
├── steps_file.js        # Definição de passos customizados e extensão do objeto I (Actor)
├── steps.d.ts           # Definições de tipos TypeScript para auto-complete da API do CodeceptJS
├── jsconfig.json        # Configurações do ambiente JavaScript / IntelliSense
├── output/              # Diretório onde são salvos os relatórios HTML e evidências
├── package.json         # Dependências do projeto e scripts de execução
└── README.md            # Documentação do projeto
```

---

## 📋 Cobertura dos Testes (23 Casos de Teste)

A suíte está organizada em **4 Features** principais:

### 1. Autenticação e Segurança Básica (`login_test.js`)
- **CT-01**: Login com credenciais válidas (`standard_user`).
- **CT-02**: Tentativa de login com senha incorreta.
- **CT-03**: Tentativa de login com usuário inexistente.
- **CT-04**: Validação de campo usuário em branco.
- **CT-05**: Validação de campo senha em branco.
- **CT-06**: Tentativa de login com usuário bloqueado (`locked_out_user`).

### 2. Catálogo e Filtros (`inventario_test.js`)
- **CT-07**: Ordenação de produtos por Nome (A a Z).
- **CT-08**: Ordenação de produtos por Nome (Z a A).
- **CT-09**: Ordenação de produtos por Preço (Menor para Maior).
- **CT-10**: Ordenação de produtos por Preço (Maior para Menor).
- **CT-11 e CT-12**: Visualização dos detalhes do produto e navegação de retorno à lista.

### 3. Carrinho de Compras (`carrinho_test.js`)
- **CT-13, CT-14 e CT-15**: Adicionar e remover produtos diretamente na página inicial (validação do badge numérico).
- **CT-16, CT-17 e CT-18**: Navegação para o carrinho, remoção de itens na tela de carrinho e ação de "Continue Shopping".

### 4. Fluxo de Pagamento / Checkout (`checkout_test.js`)
- **CT-19**: Fluxo completo de checkout com dados válidos até a confirmação do pedido (`Thank you for your order!`).
- **CT-20**: Validação de erro ao omitir o Primeiro Nome.
- **CT-21**: Validação de erro ao omitir o Sobrenome.
- **CT-22**: Validação de erro ao omitir o CEP/Postal Code.
- **CT-23**: Cancelamento do fluxo de checkout e retorno ao carrinho.

---

## 🚀 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 16.x ou superior recomendada)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes incluso no Node.js)

---

## 🔧 Instalação

1. Clone ou baixe o repositório para sua máquina local.
2. Abra o terminal no diretório do projeto:
   ```bash
   cd trabalho-codecept
   ```
3. Instale as dependências listadas no `package.json`:
   ```bash
   npm install
   ```

---

## 🧪 Executando os Testes

O projeto possui scripts pré-configurados no `package.json` para facilitar a execução:

### 1. Modo Gráfico (Headed) com exibição dos passos no terminal
Executa os testes abrindo a janela do navegador Chromium:
```bash
npm run codeceptjs
```

### 2. Modo Headless (Sem interface de navegador)
Executa todos os testes em segundo plano (útil para integração contínua/CI):
```bash
npm run codeceptjs:headless
```

### 3. Interface Interativa (CodeceptJS UI)
Abre a interface gráfica do CodeceptJS para selecionar e rodar testes individualmente em tempo real:
```bash
npm run codeceptjs:ui
```

### 4. Executar um arquivo de teste específico
Caso deseje rodar apenas uma suíte específica, utilize a CLI do CodeceptJS:
```bash
npx codeceptjs run e2e/login_test.js --steps
npx codeceptjs run e2e/inventario_test.js --steps
npx codeceptjs run e2e/carrinho_test.js --steps
npx codeceptjs run e2e/checkout_test.js --steps
```

---

## 📊 Relatórios de Teste

O projeto está configurado com o plugin `htmlReporter`. 

Após a execução dos testes, os relatórios e eventuais screenshots de erros serão gerados automaticamente na pasta:
```text
./output/
```

Basta abrir o arquivo HTML gerado na pasta `output` em seu navegador para visualizar o detalhamento da execução de cada cenário.
