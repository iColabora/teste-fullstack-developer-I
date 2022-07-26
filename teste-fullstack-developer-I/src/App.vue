<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th class="titulo">Tarefa</th>
          <th>Vencido</th>
          <th>D0</th>
          <th>D1</th>
          <th>D2</th>
          <th>D3</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in infos" :key="info.TAREFA">
          <td class="tarefa"><button class="btn-modal" v-if="openModal != true">{{info.TAREFA}}</button></td>
          <td class="vencido">{{info.VENCIDO}}</td>
          <td class="D0">{{info.D0}}</td>
          <td class="D1">{{info.D1}}</td>
          <td class="D2">{{info.D2}}</td>
          <td class="D3">{{info.D3}}</td>
          <td class="totalFinal">{{info.TOTAL}}</td>
        </tr>
      </tbody>
      <tfoot class="footer">
        <tr>
          <td class="total">Total</td>
          <td>{{footerInfo.VENCIDO}}</td>
          <td>{{footerInfo.D0}}</td>
          <td>{{footerInfo.D1}}</td>
          <td>{{footerInfo.D2}}</td>
          <td>{{footerInfo.D3}}</td>
          <td>{{footerInfo.TOTAL}}</td>
          </tr>
      </tfoot>
    </table>
  </div>
    <!-- <div class="home">
    <Modal @close="toggleModal" :modalActive="modalActive">
      <div class="modal-content">
        <h1>This is a Modal Header</h1>
        <p>This is a modal message</p>
      </div>
    </Modal>
    <button @click="toggleModal" type="button">Open Modal</button>
  </div> -->
</template>

<script>
import { ref } from 'vue';
import ModalVue from './components/Modal.vue';

export default {
  name: 'Home',
  components: {
    ModalVue
  },

  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return { modalActive, toggleModal };
  },

  data() {
    return {
      info:[],
      footerInfo:{},
    };
  },
  methods:{
    async dados(){
      let res = await fetch("https://ico-fullstack-test.herokuapp.com/v1/histograma")
      .then(response => response.json())
      this.footerInfo = res.pop(res.length - 1)
      this.infos = res
    },
  },
  mounted(){
    this.dados()
  }
}
</script>

<style scoped lang="scss">
  table{
    border: 0%;
    width: 100%;



    .titulo{
      text-align: left;
    }
    .footer{
      background-color: #222222;
      color: white;
    }

    .total{
      text-align: left;
    }

   .tarefa{
      text-align: left;
      width: 30%;
      background-color: #F4F4F4;
    }

    .tarefa:hover{
      background-color: #3DC2A2;
    }

    .vencido{
      background-color: #B1EAF1;
    }

    .D0{
      background-color: #F06280;
    }

    .D1{
      background-color: #F08080;
    }

    .D2{
      background-color: #F8A285;
    }

    .D3{
      background-color: #F8BD85;
    }

    .totalFinal{
      background-color: #ABE3E9;
    }

    border-collapse: collapse;

    td{
      text-align: center;
      padding: 20px;
    }

    thead > tr > th{
      background-color: #0F2837;
      color: white;
      border: 0px;
      padding: 20px;
    }

  }

  .home {
  background-color: rgba(0, 176, 234, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    display: flex;
    flex-direction: column;

    h1,
    p {
      margin-bottom: 16px;
    }

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
  }
}
  </style>
