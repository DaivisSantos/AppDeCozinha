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
- **Supabase** — Backend-as-a-Service usado para banco de dados, autenticação e armazenamento de imagens.
- **Expo Router** — Sistema de rotas nativo para projetos Expo.
- **React Native Reanimated** — Biblioteca para animações performáticas.
- **@expo-google-fonts/poppins** — Integração de fontes personalizadas.

---

## 📁 Estrutura de Pastas

```bash
├── src/
│   ├── app/                     # Telas e navegação principal
│   │   ├── _layout.tsx          # Layout raiz do Expo Router
│   │   ├── index.tsx            # Tela de seleção de ingredientes
│   │   ├── recipes/             # Tela de listagem de receitas
│   │   │   ├── [ingredientsIds].tsx
│   │   │   └── styles.ts
│   │   └── recipe/              # Tela de detalhes da receita
│   │       ├── [id].tsx
│   │       └── styles.ts
│   ├── components/              # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Ingredient/
│   │   ├── Ingredients/
│   │   ├── Loading/
│   │   ├── Recipe/
│   │   ├── Selected/
│   │   └── Step/
│   ├── services/                # Integração com APIs/Supabase
│   │   ├── ingredientsService.ts
│   │   ├── preparationsService.ts
│   │   ├── recipesService.ts
│   │   ├── supabase.ts
│   │   └── index.ts
│   ├── theme/                   # Estilos globais
│   │   ├── borderRadius.ts
│   │   ├── colors.ts
│   │   ├── fonts.ts
│   │   └── index.tsx
│   └── services.types.d.ts      # Tipagens dos serviços
├── assets/                      # Imagens e recursos estáticos
├── app.json                     # Configurações do Expo
├── package.json                 # Dependências e scripts
├── tsconfig.json                # Configurações do TypeScript
└── README.md                    # Este arquivo
```

---

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/DaivisSantos/AppDeCozinha.git
cd AppDeCozinha
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
- Crie as tabelas `ingredients`, `recipes` e `preparations`.

### 4. Configure o Supabase Storage

- Acesse a aba **Storage** no painel do Supabase.
- Crie (ou utilize) um bucket chamado `ingredients`.
- Envie as imagens dos ingredientes (ex: `onion.png`, `bacon.png`).
- Defina a política de leitura do bucket como **pública**.

### 5. Inicie o aplicativo

```bash
npx expo start
```

Abra o app com o **Expo Go** no celular ou por um emulador/simulador.

---

## ✨ Funcionalidades

- **Seleção de Ingredientes**: Tela inicial com todos os ingredientes disponíveis para seleção múltipla.
- **Busca Inteligente de Receitas**: O app busca receitas que combinam com os ingredientes selecionados.
- **Listagem de Receitas**: Tela com visualização em grade das receitas compatíveis, incluindo nome, imagem e tempo de preparo.
- **Detalhes da Receita**:

  - Imagem da receita
  - Nome e tempo de preparo
  - Lista de ingredientes
  - Modo de preparo em etapas

- **Interface Reativa com Animações**: Transições suaves com `react-native-reanimated`, como o painel deslizante de seleção.
- **Tema Customizado**: Paleta de cores, fontes e bordas centralizadas para consistência visual.

---

## 💡 Como Usar

1. Abra o app e veja a lista de ingredientes.
2. Toque nos itens que você tem em casa.
3. Um painel inferior surgirá com o botão **"Encontrar"**.
4. Toque para ver receitas compatíveis.
5. Escolha uma receita para visualizar os detalhes e modo de preparo.

---

## 🙏 Agradecimentos

Gostaria de deixar um agradecimento especial ao **Rodrigo Gonçalves**, do canal do YouTube, que disponibilizou o projeto original que serviu como base para meus estudos. O conteúdo dele foi fundamental para me ajudar a entender várias mecânicas importantes do React Native e impulsionar meu aprendizado. Recomendo fortemente o canal para quem está começando e quer evoluir na área!
