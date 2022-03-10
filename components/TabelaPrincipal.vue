<template>
  <table class="main-table">
    <!-- Cabeçalho da tabela -->
    <thead class="align-center">
      <tr>
        <td class="align-left">Tarefa</td>
        <td>Vencido</td>
        <td>D0</td>
        <td>D1</td>
        <td>D2</td>
        <td>D3</td>
        <td>Total</td>
      </tr>
    </thead>
    <!-- Tarefas -->
    <tbody class="align-center">
      <tr v-for="(tarefa, index) in tabelaTarefas" :key="index">
        <td class="main-table-Btarefa align-left">{{ tarefa.TAREFA }}</td>
        <td @click="filtrarTarefas(tarefa.TAREFA, 'VENCIDO')" class="main-table-Bvencido hover-pointer">{{ tarefa.VENCIDO }}</td>
        <td @click="filtrarTarefas(tarefa.TAREFA, 'D0')" class="main-table-BD0 hover-pointer">{{ tarefa.D0 }}</td>
        <td @click="filtrarTarefas(tarefa.TAREFA, 'D1')" class="main-table-BD1 hover-pointer">{{ tarefa.D1 }}</td>
        <td @click="filtrarTarefas(tarefa.TAREFA, 'D2')" class="main-table-BD2 hover-pointer">{{ tarefa.D2 }}</td>
        <td @click="filtrarTarefas(tarefa.TAREFA, 'D3')" class="main-table-BD3 hover-pointer">{{ tarefa.D3 }}</td>
        <td @click="filtrarTarefas(tarefa.TAREFA, 'TOTAL')" class="main-table-Btotal hover-pointer">{{ tarefa.TOTAL }}</td>
      </tr>
    </tbody>
    <!-- Linha total -->
    <tfoot class="align-center">
      <tr v-if="tabelaFoot">
        <td class="align-left">{{ tabelaFoot.TAREFA }}</td>
        <td>{{ tabelaFoot.VENCIDO }}</td>
        <td>{{ tabelaFoot.D0 }}</td>
        <td>{{ tabelaFoot.D1 }}</td>
        <td>{{ tabelaFoot.D2 }}</td>
        <td>{{ tabelaFoot.D3 }}</td>
        <td>{{ tabelaFoot.TOTAL }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  data() {
    return {
      tabelaTarefas: null,
      tabelaFoot: null,
    }
  },

  async mounted() {
    try {
      var res = await this.$axios.get('https://ico-fullstack-test.herokuapp.com/v1/histograma');
    }
    catch (err) {
      console.log(err);
    }
    var apiData = res.data;
    this.tabelaTarefas = apiData.filter(tarefa => {
      return tarefa.STT == 'processo';
    });
    this.tabelaFoot = apiData.filter(tarefa => {
      return tarefa.STT == 'total';
    })[0];
    this.$emit('loaded');
  },

  methods: {
    filtrarTarefas(titulo, regua) {
      var instancias = [];
      //Retorna a tarefa correspondente ao título
      var tarefa = this.tabelaTarefas.filter(t => {
        return t.TAREFA == titulo;
      })[0];
      //Realiza a segunda filtragem para pegar as instância correspondentes à regua selecionada.
      if (regua != 'TOTAL') {
        instancias = tarefa.DRILLDOWN.filter(i => {
          return i.REGUA == regua;
        })
      }
      else {
        instancias = tarefa.DRILLDOWN;
      }
      this.$emit('instancias', instancias);
    }
  }
}
</script>

<style lang="scss" scoped>
  $BG-vencido: #d964a4;
  $BG-total: #9fe3c8;

  //Cores do mapa de calor
  $BG-heat-map: #f96585, #f98585, #f9a385, #f9c585;

  .main-table {
    font-size: 1.2rem;
    width: 70vw;
    min-height: 30vh;
    margin-top: 1.5em;
    color: white;
    border: none;
    border-spacing: 0;

    //Espaçamento para as células
    td {
      padding: 0.6em;
      padding-top: 0.7em;
      padding-bottom: 0.7em;
    }
    //Cabeçalho
    thead {
      background-color: #192a57;
    }
    //Corpo
    tbody {
      color: #333333;
      td {
        border-bottom: 1px solid rgba($color: #161616, $alpha: 0.1);
      }
      //Animação de preenchimento do título das tarefas
      tr:hover {
        filter: brightness(90%);
        .main-table-Btarefa {
          background-position: left;
        }
      }
    }
    //Rodapé
    tfoot {
      background-color: #4b4b4b;
    }
  }

  //Coluna Tarefa
  .main-table-Btarefa {
    background: linear-gradient(to right, #3fc3a2 50%, #f1f1f1 50%);
    background-size: 201% 100%;
    background-position: right;
    transition: all .1s ease-in;
  }
  
  //Coluna Vencido
  .main-table-Bvencido {
    background-color: $BG-vencido;
  }

  //BG color das celulas D$
  $i: 0;
  @each $color in $BG-heat-map {
    .main-table-BD#{$i} {
      background-color: $color;
    }
    $i: $i+1
  }

  .main-table-Btotal {
    background-color: $BG-total;
  }

  .align-left {
    text-align: left;
  }

  .align-center {
    text-align: center;
  }

  .hover-pointer:hover {
    cursor: pointer;
  }
</style>