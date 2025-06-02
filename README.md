---
# 🍲 CookApp
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/versão-0.1.0-blue)
![Plataformas](https://img.shields.io/badge/plataformas-iOS%20%7C%20Android-green)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178c6)
![Expo](https://img.shields.io/badge/framework-Expo-lightgrey)

> Aplicativo mobile para descobrir receitas a partir dos ingredientes que você já tem em casa.

---

## 📝 Descrição

O **CookApp** é um aplicativo desenvolvido com **React Native** e **Expo**, pensado para simplificar o preparo de refeições. Basta selecionar os ingredientes disponíveis na sua cozinha e o app exibirá receitas compatíveis, promovendo praticidade e evitando desperdícios.

---

## 🚀 Tecnologias Utilizadas

- **React Native** — Framework para desenvolvimento de apps mobile multiplataforma.
- **Expo** — Ferramentas e serviços que aceleram o desenvolvimento com React Native.
- **TypeScript** — Tipagem estática para maior robustez e escalabilidade do código.
- **Supabase** (v1.35.6) — Backend-as-a-Service usado para banco de dados e autenticação.
- **Expo Router** — Sistema de rotas nativo para projetos Expo.
- **React Native Reanimated** — Biblioteca de animações fluidas e performáticas.
- **@expo-google-fonts/poppins** — Gerenciamento de fontes personalizadas.

---

## 📁 Estrutura de Pastas

```bash
├── src/
│   ├── app/                 # Telas e navegação principal
│   │   ├── _layout.tsx      # Layout raiz do Expo Router
│   │   ├── index.tsx        # Tela inicial (seleção de ingredientes)
│   │   └── recipes/         # Tela de listagem de receitas
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── components/          # Componentes reutilizáveis de UI
│   │   ├── Button/
│   │   ├── Ingredient/
│   │   ├── Ingredients/
│   │   ├── Loading/
│   │   ├── Recipe/
│   │   ├── Selected/
│   │   └── Step/
│   ├── services/            # Integrações com APIs e Supabase
│   │   ├── ingredients.ts
│   │   ├── supabase.ts
│   │   └── index.ts         # Configuração de caminhos e utilitários
│   ├── theme/               # Estilos globais (cores, fontes, bordas)
│   │   ├── borderRadius.ts
│   │   ├── colors.ts
│   │   ├── fonts.ts
│   │   └── index.tsx
│   └── types/               # Tipagens TypeScript
│       └── services.types.d.ts
├── assets/                  # Imagens e recursos estáticos
├── app.json                 # Configurações do Expo
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configurações do TypeScript
└── README.md                # Este arquivo
```

---

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/DaivisSantos/AppDeCozinha.git
cd CookApp
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure o Supabase

- Crie um projeto no [Supabase](https://supabase.com).
- No arquivo `src/services/supabase.ts`, insira suas `SUPABASE_URL` e `SUPABASE_ANON_KEY`.
- Crie a tabela `ingredients` com as colunas:

  - `id` (UUID ou INTEGER)
  - `name` (TEXT)
  - `image` (TEXT – nome do arquivo da imagem, ex: `onion.png`)

### 4. Configure o Supabase Storage

- Acesse a aba **Storage** no painel do Supabase.
- Crie (ou utilize) um bucket chamado `ingredients`.
- Envie as imagens dos ingredientes (ex: `onion.png`, `bacon.png`).
- Configure a política de leitura do bucket para **público** (acesso anônimo).

### 5. Inicie o aplicativo

```bash
npx expo start
```

Abra o app no celular com o **Expo Go** ou use um emulador/simulador.

---

## 💡 Como Usar

1. Na tela inicial, uma lista de ingredientes será exibida.
2. Toque para selecionar os ingredientes que você possui.
3. Um botão **"Encontrar"** aparecerá na parte inferior da tela.
4. Toque nele para visualizar as receitas possíveis com os ingredientes escolhidos.

---

## ✨ Funcionalidades

### ✅ Já implementadas

- **Seleção de Ingredientes**
  Interface intuitiva para seleção múltipla.

- **Tela de Receitas**
  Visualização das receitas disponíveis com base nos ingredientes selecionados.

- **Tema Personalizado**
  Definições centralizadas de cores, fontes e bordas.

- **Integração com Supabase**
  Busca de dados e imagens diretamente via Supabase e Supabase Storage.

- **Carregamento Dinâmico de Imagens**
  As imagens dos ingredientes são carregadas automaticamente do bucket do Supabase.

### 🚧 Em desenvolvimento

- **Busca real por receitas**
  Atualmente a tela estática será substituída por uma lógica baseada nos ingredientes selecionados.

---

## 🛠️ Para Desenvolvedores

- **TypeScript**
  Tipagem de dados para maior segurança. Ver `src/types/services.types.d.ts`.

- **Componentização**
  Estrutura modular com componentes como `Ingredient`, `Selected`, `Recipe`.

- **Animações**
  Uso da biblioteca `react-native-reanimated` para efeitos visuais.

- **URLs centralizadas**
  A URL base do bucket de imagens está em `src/services/index.ts`, facilitando manutenção e escalabilidade.

---
