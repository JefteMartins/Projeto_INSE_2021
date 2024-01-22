
# Projeto de Dados INSE 2021

Este é um projeto que utiliza SQL, .NET 6 e ReactJS para realização de um projeto que tem como objetivo criar uma API e mostrar os dados obtidos por meio do Indicador Socioeconomico de 2021.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (v16.x ou superior)
- [npm](https://www.npmjs.com/) (v6.x ou superior)
- [.NET SDK](https://dotnet.microsoft.com/download/dotnet/6.0) (v6.x ou superior)
- [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads)

## Configuração do Banco de Dados

1. Importar os dados INSE_2021_escolas_1.xlsx para seu banco SQL
2. [https://learn.microsoft.com/pt-br/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16](Instale o SQL Server Management Studio)

Você pode conferir como realizar iso por meio das ferramentas de importação seguindo este vídeo <br/>
[Como importar arquivo Excel para o SQL](https://www.youtube.com/watch?v=hNI82TvS7Nk)

## Configuração do Projeto .NET

1. Navegue até a pasta `Teste_Great_INSE2021/INSEWepApp/` e execute o arquivo `INSEWepApp.sln`.
2. Para adicionar a string connection ao seu projeto, abra seu SQL Server Management Studio e salve o Server name </br> ![image](https://github.com/JefteMartins/Teste_Great_INSE2021/assets/36806973/b7502e50-1657-4f11-914d-cd42eb87e517)
4. Ao executar o projeto escolhendo Visual Studio como IDE, a própria IDE lhe recomendará instalar as dependências.
5. Após aberto o visual Studio, navegue até `INSEWebApp/Models/INSE2021Context.cs` na linha `28` e cole sua string no local indicado </br> ![image](https://github.com/JefteMartins/Teste_Great_INSE2021/assets/36806973/ccde2076-b233-45b2-8453-33cbf0f72aa7)

6. Você poderá executar o projeto clicando no botão de executar o projeto com nome INSEWebApp </br> ![image](https://github.com/JefteMartins/Teste_Great_INSE2021/assets/36806973/917406a6-3bf5-4eb0-adf3-a90eae50c71b)
7. O swagger abrirá automaticamente em `https://localhost:7291/swagger/index.html`


## Configuração do Projeto ReactJS

1. Navegue até a pasta `Teste_Great_INSE2021/INSE_2021-front/` no terminal.
2. Execute o comando `npm install` para instalar as dependências.
3. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.

O frontend estará disponível em `http://127.0.0.1:5173/`.

## Notas Adicionais

- Certifique-se de que o servidor SQL esteja em execução antes de iniciar o backend.
- Certifique-se de que o backend esteja em execução antes de iniciar o frontend.

## Contribuições

Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Abra uma issue ou envie um pull request!
