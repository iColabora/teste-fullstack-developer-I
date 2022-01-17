# Teste I - Fullstack Development
Este teste foi realizado com o framework **Svelte**

## Alguns pontos
- Ao invés de RGB foi utilizado sistema HSL, facilitando a manutenção de cores
- Foi informado as paletas de cores das colunas de D0 a D3: #f96585 #f98585 #f9a385, porém faltou uma. Então ficou:
   - *D0*: #F96585 -> hsl(347, 93%, 69%) 
   - *D1*: #F98585 -> hsl(0, 91%, 75%) 
   - *D2*: #f9a385 -> hsl(16, 91%, 75%) 
   - *D3*: #F9BE85 -> hsl(29, 91%, 75%)
- CSS -> Mobile First
- Para solicitar as informações do endpoint foi utilizado um Fetch basico
<br>

**Tecnologias utilizadas**:
- Svelte
- NPM / Yarn
- SCSS
- Docker
- Rollup

## Rodando o projeto

####Local

```
npm install
npm run dev
```

####Docker
```
npm run docker:build
npm run docker:start
```

##Demo

Entre no link abaixo para uma pré-visualização:
https://teste-fullstack-developer-i-git-zaghetto-jrzaghetto.vercel.app/