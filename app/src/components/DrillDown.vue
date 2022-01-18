<template>
    <div class="container">
        <table>
          <thead>
            <tr class="mainTopTh">
                <td>Tarefa</td>            
                <td>Vencido</td>                 
                <td>D0</td>
                <td>D1</td>
                <td>D2</td>
                <td>D3</td>
                <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr :key="index" v-for="(key,index) in data" :class="last(index)" >
                <td class="task" :class="last(index)">{{key.TAREFA}}</td>
                <td @click="showDrill(index, 'VENCIDO')" class="vencido" :class="last(index)">{{key.VENCIDO}}</td>
                <td @click="showDrill(index, 'D0')" class="d0" :class="last(index)">{{key.D0}}</td>
                <td @click="showDrill(index, 'D1')" class="d1" :class="last(index)">{{key.D1}}</td>
                <td @click="showDrill(index,'D2')" class="d2" :class="last(index)">{{key.D2}}</td>
                <td @click="showDrill(index,'D3')" class="d3" :class="last(index)">{{key.D3}}</td>
                <td class="total" :class="last(index)">{{key.TOTAL}}</td>
            </tr>

          </tbody>
        </table>

        <Modal v-show="modalVisible" :data="drillAttributes"  :handleShowModal="handleShowModal"/>
    </div>
</template>

<script>
import axios from 'axios'
import Modal from './Modal.vue'

export default {
    name: 'DrillDown',  
    
    data(){
        return {
            data: {},
            drillAttributes: [],  
            modalVisible: false,
        }
    },
    components: {
        Modal,
    },
    methods: {
        async getData(){
            await axios.get('https://ico-fullstack-test.herokuapp.com/v1/histograma')
                    .then(res => this.data = res.data)
        },

        showDrill(indice, key){
            if (this.last(indice) === ''){
              this.drillAttributes = this.data[indice].DRILLDOWN.filter(item => item.REGUA == key)
              this.handleShowModal()
            }
        },
        last(index){
            return index == this.data.length -1 ? 'last' : ''
        },
        handleShowModal(){
            this.modalVisible = !this.modalVisible
        }

    },
    beforeMount(){
        this.getData()
    },
}

</script>


<style lang="scss">
.container {
  width: 90%;
  position: relative;
  z-index: 0;

  table {
    border-collapse: collapse;
    width: 100%;
    background-color: var(--gray);
    tbody {
      td:hover {
        opacity: 0.9;
        transition: all 0.3s ease;
      }
    }
    tr {
      box-shadow: 0 0 1px gray;
      td {
        padding: 1rem;
        cursor: pointer;
      }
    }

    .mainTopTh {
      background: var(--blue-dark);
      color: #fff;

        
      td {
        cursor: unset !important;
      }
    }
    .d0 {
      background: var(--red);
    }
    .d1 {
      background: var(--red-light);
    }
    .d2 {
      background: #f9a385;
    }
    .d3 {
      background: #ffba53;
    }
    .vencido,
    .total {
      background: var(--cyan-light);
    }

    .last {
      background: var(--gray) !important;
      color: #fff !important;
      cursor: unset;
    }
    .task {
      background: linear-gradient(to right, var(--cyan-dark) 50%, #fff 50%);
      background-size: 200% 100%;
      background-position: right bottom;
    }

    .task:hover {
      background-position: left bottom;
      transition: all 1s ease;
      cursor: unset;
    }
  }

}
</style>
