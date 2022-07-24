<template>

<div id="app">


  <table>
      <tr class="header">
        <td class="tar">Tarefa</td>
        <td>Vencido</td>
        <td>D0</td>
        <td>D1</td>
        <td>D2</td>
        <td>D3</td>
        <td>Total</td>
      </tr>
            <tr v-for="(dados,index) in dadosapi" :key="index">
            <td class="tarefa">{{dados.TAREFA}}</td>
            <td class="vencido">{{dados.VENCIDO}}</td>
            <td class="d0">{{dados.D0}}</td>
            <td class="d1">{{dados.D1}}</td>
            <td class="d2">{{dados.D2}}</td>
            <td class="d3">{{dados.D3}}</td>
            <td class="total">{{dados.TOTAL}}</td>
        </tr>   
        
    </table>

</div> 


</template>

<script>

const axios = require('axios');

export default {

name: 'app',

data() {
  return {
    dadosapi:[]
  }
},

mounted() {
  this.getInfo();


},

methods: {
    
    async getInfo(){
      const res = await axios.get('https://ico-fullstack-test.herokuapp.com/v1/histograma');   
        this.dadosapi  = res.data;
        console.log(res.data)     
    },

      
  }
}

 
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



.header td{

  color: #EFEFEF;
  border: none;
  background-color: #2c3e50;
}


table{

  width: 98%;
  height: 300px;
  border-collapse:collapse;
  

}



.tarefa {
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: black;
  background: #EFEFEF;
}



.vencido{

  background: #ace4ea;
}
.d0{
  background: #f96585;
}

.d1{
  background: #f98585;
}

.d2{
  background: #f9a385;
}
.d3{
  background: #f9be85;
}
.total{
  background: #b2ebf2;
  
}

.header td:hover{
  opacity: 1;
  cursor: auto;
}

td:hover{

  opacity: 0.9;
  cursor: pointer;
}

tr:last-child:hover{
  opacity: 1 !important;
  cursor: auto !important;

}

.tarefa td:hover{

   opacity: 1 !important;
   cursor: auto !important;
}
.tar{
  
  text-align: initial;
}

td{

  border: 1px solid rgba(128, 128, 128,0.3);
  padding: 8px;
  height: 35px;
  z-index: 5;
}
</style>
