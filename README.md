# 🍲 CookApp

Um aplicativo móvel para descobrir e gerenciar receitas com base nos ingredientes que você possui.

## 📝 Descrição

O CookApp é um projeto desenvolvido em React Native e Expo que visa simplificar a busca por receitas. Com ele, você pode selecionar os ingredientes que tem à disposição e o aplicativo listará receitas possíveis, ajudando a aproveitar ao máximo o que está na sua cozinha.

## 🚀 Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

* **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
* **Expo**: Plataforma e conjunto de ferramentas para desenvolvimento de aplicativos React Native.
* **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, aumentando a robustez do código.
* **Supabase**: Backend-as-a-Service (BaaS) de código aberto, utilizado para o banco de dados e autenticação.
* **Expo Router**: Solução de roteamento para aplicativos Expo, simplificando a navegação.
* **React Native Reanimated**: Biblioteca para animações e interações fluidas.
* **@expo-google-fonts/poppins**: Para a gestão de fontes personalizadas.

## 📂 Estrutura de Pastas

**A estrutura do projeto está organizada da seguinte forma:**
```bash
├── src/
│   ├── app/                 # Telas principais do aplicativo e navegação
│   │   ├── _layout.tsx      # Layout principal do Expo Router
│   │   ├── index.tsx        # Tela inicial (seleção de ingredientes)
│   │   └── recipes/         # Tela de listagem de receitas
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── components/          # Componentes de UI reutilizáveis
│   │   ├── Button/
│   │   ├── Ingredient/
│   │   ├── Ingredients/
│   │   ├── Loading/
│   │   ├── Recipe/
│   │   ├── Selected/
│   │   └── Step/
│   ├── services/            # Integrações com serviços externos (ex: Supabase)
│   │   ├── ingredients.ts   # Serviço para buscar ingredientes
│   │   └── supabase.ts      # Configuração do cliente Supabase
│   ├── theme/               # Definições de tema (cores, fontes, bordas)
│   │   ├── borderRadius.ts
│   │   ├── colors.ts
│   │   ├── fonts.ts
│   │   └── index.tsx
│   └── types/               # Definições de tipos TypeScript
│       └── services.types.d.ts # Tipagem para respostas de serviços
├── assets/                  # Imagens e outros recursos estáticos
├── app.json                 # Configurações do Expo
├── package.json             # Dependências e scripts do projeto
├── tsconfig.json            # Configurações do TypeScript
└── README.md                # Este arquivo
```

## ⚙️ Configuração e Instalação

Siga os passos abaixo para configurar e rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd CookApp
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Configuração do Supabase:**
    * Crie um projeto no [Supabase](https://supabase.com/).
    * No arquivo `src/services/supabase.ts`, substitua `SUPABASE_URL` e `SUPABASE_ANON_KEY` pelas suas credenciais do projeto Supabase.
    * Garanta que você tenha uma tabela chamada `ingredients` com as colunas `id` (uuid ou int), `name` (text) e `image` (text) para que o serviço de ingredientes funcione corretamente.

4.  **Inicie o aplicativo:**
    ```bash
    npx expo start
    ```
    Isso iniciará o servidor de desenvolvimento do Expo. Você pode escanear o QR code com o aplicativo Expo Go no seu celular ou usar um emulador/simulador.

## 💡 Uso

Após iniciar o aplicativo:

* Na tela inicial, você verá uma lista de ingredientes.
* Toque nos ingredientes para selecioná-los.
* Um botão de "Encontrar" aparecerá na parte inferior da tela.
* Toque em "Encontrar" para ver as receitas que podem ser feitas com os ingredientes selecionados.

## ✨ Funcionalidades Principais (Atualmente Implementadas/Em Desenvolvimento)

* **Seleção de Ingredientes:** Permite ao usuário selecionar múltiplos ingredientes de uma lista.
* **Busca de Receitas:** Navegação para uma tela de receitas (funcionalidade de busca real em desenvolvimento).
* **Tema Customizável:** Definição de cores, fontes e bordas para uma experiência visual consistente.
* **Integração com Supabase:** Conexão com o Supabase para gerenciar dados de ingredientes.

## 🛠️ Desenvolvimento

Se você deseja contribuir ou entender melhor o código:

* **Tipagem com TypeScript:** O projeto utiliza TypeScript para garantir a segurança de tipo e facilitar a manutenção do código. Os tipos de dados para serviços são definidos em `src/types/services.types.d.ts`.
* **Estrutura de Componentes:** Componentes como `Ingredient`, `Selected` e `Recipe` são modularizados para reuso e clareza.
* **Animações:** Utiliza `react-native-reanimated` para algumas animações da interface.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` (se existir) para mais detalhes.

---

Espero que este `README.md` seja útil para o seu repositório temporário! Se precisar de algo mais, é só avisar!
