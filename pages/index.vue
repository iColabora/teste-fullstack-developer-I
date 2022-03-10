<template>
  <div class="base">
    <!-- Mostra apenas se os dados da API estiverem carregados -->
    <div v-show="apiLoaded" class="base">
      <!-- Tabela Principal -->
      <TabelaPrincipal @loaded="apiLoaded=true" @instancias="instancias=$event"/>

      <!-- Tabela de detalhes -->
      <TabelaDetalhes :instancias="instancias"/>
    </div>

    <!-- Senão, indica que ainda está carregando -->
    <div v-show="!apiLoaded" class="base-waiting">
      Carregando...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      instancias: null,
      apiLoaded: false,
    }
  },
}
</script>

<!-- Fonte -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap');

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }

</style>

<!-- Estilos -->
<style lang="scss" scoped>
  .base {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    background: linear-gradient(180deg, rgba(33,80,89,1) 0%, rgba(28,43,71,1) 45%, rgba(4,2,29,1) 100%);
    height: 100vh;
  }

  .base-waiting {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 3rem;
    font-weight: 600;
  }
</style>