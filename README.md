# Medicine-Reminder-App

## Descrição

O Medicine-Reminder-App é um aplicativo mobile desenvolvido em React Native para auxiliar usuários a gerenciar seus horários de medicação. Ele permite criar lembretes personalizados para cada medicamento, garantindo que você nunca se esqueça de tomar seus remédios no horário certo.

O aplicativo oferece:

*   **Página de Login:** Autenticação segura de usuários.
*   **Página Home:** Visão geral dos próximos lembretes e medicamentos.
*   **Página de Medicamentos:** Lista completa dos seus medicamentos cadastrados.
*   **Página de Novo Lembrete:** Formulário intuitivo para criar novos lembretes de medicação.

## Tecnologias Utilizadas

*   **React Native:** Framework para desenvolvimento de aplicativos mobile multiplataforma.
*   **Styled-Components:** Biblioteca para estilização de componentes React com CSS-in-JS.
*   **Lucide:** Biblioteca de ícones vetoriais para uma interface visual atraente.
*   **Supabase:** Plataforma Backend como Serviço (BaaS) para autenticação de usuários e armazenamento de dados.
*   **Expo:** Ferramenta para facilitar o desenvolvimento, build e deploy de aplicativos React Native.

## Demonstração

Video demonstrativo da aplicação funcionando: [Link no Youtube](https://youtube.com/shorts/4i8NqUIFr0E?feature=share)

Design Original: [Figma](https://www.figma.com/design/KNIf3bqedCdHQ2msIuoowA/Lembrete-de-Rem%C3%A9dio-(Community)?node-id=3-376&p=f&t=gtpLFJF8oOIhemIR-0)


## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

*   [Node.js](https://nodejs.org/) (versão LTS recomendada)
*   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
*   [Expo CLI](https://docs.expo.dev/get-started/installation/)
*   [Android Studio](https://developer.android.com/studio) (e um emulador Android configurado)

## Passo a Passo para Executar o Aplicativo

1.  **Clone o Repositório:**

    ```bash
    git clone https://github.com/RaoniDCunha/Medicine-Reminder-App.git
    ```

2.  **Navegue até o Diretório do Projeto:**

    ```bash
    cd Medicine-Reminder-App
    ```

3.  **Instale as Dependências:**

    ```bash
    npm install
    ```

4.  **Execute o Aplicativo no Emulador Android:**

    ```bash
    npm run android
    ```

    **Observação:** Certifique-se de que um emulador do Android Studio esteja em execução antes de executar este comando. O Expo tentará abrir o aplicativo no emulador automaticamente.

## Configuração do Supabase

1.  **Crie um Projeto no Supabase:**

    *   Acesse o site do [Supabase](https://supabase.com/) e crie uma conta.
    *   Crie um novo projeto.

2.  **Configure a Autenticação:**

    *   No painel do seu projeto Supabase, vá para a seção "Authentication".
    *   Configure os métodos de autenticação desejados (por exemplo, e-mail/senha).

3.  **Crie a Tabela de Medicamentos (Opcional):**

    *   Se você precisar de uma tabela específica para armazenar informações sobre os medicamentos, crie-a na seção "Table Editor" do Supabase.
    *   Defina as colunas apropriadas (por exemplo, nome, dosagem, etc.).

4.  **Atualize as Variáveis de Ambiente:**

    *   No seu projeto React Native, crie um arquivo `.env` na raiz.
    *   Adicione as seguintes variáveis com as suas informações do Supabase:

        ```
        SUPABASE_URL=YOUR_SUPABASE_URL
        SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
        ```

    *   Substitua `YOUR_SUPABASE_URL` e `YOUR_SUPABASE_ANON_KEY` pelos valores encontrados no painel do seu projeto Supabase (Settings -> API).

