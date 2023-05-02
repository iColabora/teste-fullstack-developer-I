<<<<<<< HEAD
# TabelaICO (processo-icolabora)

Tabela requisitando API heroku

A funcionalidade principal do projeto é uma tabela que se comunica com um arquivo json (pseudo API), permitindo que o usuário visualize os dados de forma estilizada e de fácil entendimento, não só isso, a tabela também conta com drilldown que permite o usuário ver informações mais detalhadas sobre os dados em si. Esses dados são baixados junto com os arquivos do projeto.

O Quasar foi essencial para a criação da tabela, já que ele oferece componentes prontos para uso, como a tabela, que facilitam a criação de interfaces de usuário. Além disso, ele inclui recursos que permitem a comunicação com APIs, tornando mais fácil a integração com a pseudo API utilizada no projeto.

Caso houver um erro na hora de iniciar o ambiente dev (yarn quasar dev)
![image](https://user-images.githubusercontent.com/106493859/235708487-4f30aeca-c187-4dc6-b2ee-217315b81c46.png)

Basta apenas usar os comandos abaixo na CLI que irá resolver

No tipo Unix (Linux, macOS, Git bash, etc.): "export NODE_OPTIONS=--openssl-legacy-provider"

No prompt de comando do Windows: "set NODE_OPTIONS=--openssl-legacy-provider"

No PowerShell: "$env:NODE_OPTIONS = "--openssl-legacy-provider"

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
=======
# Teste I - Fullstack Development

## Um pouco sobre nós

Estamos procurando uma pessoa desenvolvedora que possa agregar em nosso time, principalmente quem gosta de propor soluções e inovações. Estamos montando nosso novo time de Produtos e pra isso precisamos de pessoas que conheçam:

- Front-end: Angular, React ou VueJS ♥️
- Backend: NodeJS 
- Banco de Dados: SQL / Um pouco de NoSQL
- GIT
- Ter trabalhado antes em equipes ágeis e multidisciplinares


Mas também será ótimo se você conhecer:

- Docker e Docker-compose
- Jenkins
- RabbitMQ

Acha que se enquadra no perfil? Temos um teste abaixo para entendermos mais seu conhecimento.


## Problema

Um cliente deseja ver um relatório de como estão os prazos de atendimento de sua operação. Pensando nisso, elaboramos um relatório em forma de mapa de calor que consiga demonstrar de forma visual. Além disso, os detalhes são cruciais para uma tomada de decisão, portanto ao clicar em cada célula deve vir os detalhes, exceto na linha totalizadora

As colunas se referem ao campo SLA dentro do atributo DRILLDOWN

![Histograma](https://uploaddeimagens.com.br/images/003/609/209/original/img001.png?1640888617)

Consultando a API abaixo, desenvolva no front-end um painel similar ao do protótipo. **Aceitamos inovação, então pode inovar sem problemas 😉**

Efeitos de CSS:

- Ao passar o mouse por cima da célula das Tarefas, preencher da esquerda para a direita com a cor: #3fc3a2
- Paleta de cores das colunas de D0 a D3: #f96585 #f98585 #f9a385
- Cursor pointer dentro das células que são possíveis clicar
- Efeito de opacidade dentro de uma célula quando o mouse passar por cima

API para ter os dados : GET https://ico-fullstack-test.herokuapp.com/v1/histograma

**Tecnologias que esperamos**:

**Front:**
- Algum framework JS (Angular, React, Vue ♥️)
- Pré-processador de estilo (SASS, Stylus, SCSS, etc)

**Back:**
- NodeJS para consultar a API

## Submissão
Para iniciar o teste, faça um fork deste repositório, crie uma branch com o seu nome completo e depois envie-nos o pull request. Se você apenas clonar o repositório não vai conseguir fazer push e depois vai ser mais complicado fazer o pull request. **Importante**: Após finalizar o teste, revisaremos e informaremos sua aprovação ou não. Se for aprovado, mandar um email para rh@icolabora.com com o seu currículo e pretensão 😄

## Acha que consegue ir mais além?

Temos mais um teste avançado e caso tenha interesse, mande para nós: https://github.com/iColabora/teste-fullstack-developer-II

Boa sorte! =D
>>>>>>> origin/Victor-Lima-Pinheiro
