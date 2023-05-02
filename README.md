# TabelaICO (processo-icolabora)

Tabela requisitando API heroku

A funcionalidade principal do projeto é uma tabela que se comunica com uma API, permitindo que o usuário visualize os dados de forma estilizada e de fácil entendimento, não só isso, a tabela também conta com drilldown que permite o usuário ver informações mais detalhadas sobre os dados em si. Esses dados são baixados junto com os arquivos do projeto.

O Quasar foi essencial para a criação da tabela, já que ele oferece componentes prontos para uso, como a tabela, que facilitam a criação de interfaces de usuário. Além disso, ele inclui recursos que permitem a comunicação com APIs, tornando mais fácil a integração com a API utilizada no projeto.

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
