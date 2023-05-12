# SearchDevs

SearchDevs é um projeto de pesquisa de perfis no GitHub, que utiliza a API de busca de usuário do próprio GitHub. Foi desenvolvido utilizando a linguagem TypeScript e as bibliotecas React, Sass, Material-UI, react-router-dom e Axios.

## Descrição

O SearchDevs é uma aplicação web que permite aos usuários pesquisar perfis de desenvolvedores no GitHub com base em critérios de busca, como nome de usuário, localização, tecnologias de interesse, entre outros. A aplicação utiliza a API de busca de usuário do GitHub para obter os resultados da pesquisa.

## Funcionalidades

- Pesquisa de perfis de desenvolvedores no GitHub com base em critérios de busca.
- Exibição dos principais detalhes do perfil do desenvolvedor, como nome, foto, bio, localização, número de seguidores entre outros.
- Visualização dos repositórios mais populares do desenvolvedor.
- Navegação entre os perfis dos desenvolvedores pesquisados.

## Pré-requisitos

- Node.js (versão 18.0.0 ou mais recente)

## Instalação

- Clone o repositório:

$ git clone https://github.com/luizrxg/searchevs.git

- Navegue até o diretório do projeto: cd searchdevs
- Instale as dependências: npm i --legacy-peer-deps
- Inicie a aplicação: npm start
- A aplicação estará disponível em http://localhost:3000.

## Uso

Acesse a página inicial da aplicação em http://localhost:3000.
Digite o nome do usuário no campo correspondente.
Clique no botão "Search" para obter os resultados da busca.
Navegue pelos perfis dos desenvolvedores encontrados e visualize suas informações e repositórios.

## Estrutura do projeto

Foi utilizada a estrutura padrão do React (public, src), adicionada do modelo de pastas similar ao de MVVM, com a pasta commons para componentes e tipos de Typescript,
a pasta services para implementeção da API através do axios, a pasta utils para utilidades genéricas, a pasta pages para os componentes das páginas, a pasta contexts para
os contextos do React e a pasta svgs para componentes SVG.

## Bibliotecas utilizadas

- GitHub por fornecer a API de busca de usuário do GitHub.
- Material-UI por fornecer componentes de interface amigáveis.
- Axios por simplificar as requisições HTTP.
- react-router-dom por ser a biblioteca de navegação mais compatível com React e por sua praticidade
- sass por oferecer uma maior organização de arquivos css

## Autores

Luiz Ricardo
