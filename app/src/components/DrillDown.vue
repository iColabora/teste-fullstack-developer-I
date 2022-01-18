<template>
    <div class="container">
        <table>
            <tr class="mainTopTh">
                <td>Tarefa</td>            
                <td>Vencido</td>                 
                <td>D0</td>
                <td>D1</td>
                <td>D2</td>
                <td>D3</td>
                <td>Total</td>
                <td>STT</td>
            </tr>
            <tr :key="index" v-for="(key,index) in data" :class="last(index)" >
                <td class="task" :class="last(index)">{{key.TAREFA}}</td>
                <td @click="showDrill(index, 'VENCIDO')" class="vencido" :class="last(index)">{{key.VENCIDO}}</td>
                <td @click="showDrill(index, 'D0')" class="d0" :class="last(index)">{{key.D0}}</td>
                <td @click="showDrill(index, 'D1')" class="d1" :class="last(index)">{{key.D1}}</td>
                <td @click="showDrill(index,'D2')" class="d2" :class="last(index)">{{key.D2}}</td>
                <td @click="showDrill(index,'D3')" class="d3" :class="last(index)">{{key.D3}}</td>
                <td class="total" :class="last(index)">{{key.TOTAL}}</td>
                <td>{{key.STT}}</td>
            </tr>
        </table>

        <Modal :modalVisible="modalVisible" :data="drillAttributes" />
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
            counter: 0,
            modalVisible: true,
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
            this.drillAttributes = this.data[indice].DRILLDOWN.filter(item => item.REGUA == key)
        },
        last(index){
            console.log(this.data.lenght)
            return index == this.data.length -1 ? 'last' : ''
        },
        handleShowModal(){
            this.modalVisible = !this.modalVisible
        }

    },
    beforeMount(){
        this.getData()
    },

    computed: {
        
    }
}

</script>

<style scoped>
.container {
    width: 90%;
    position: relative;
    z-index: 0;
}

table {
    border-collapse: collapse;
    width: 100%;
}
tr {
    box-shadow: 0 0 1px gray;
}
td {
    padding: 1rem;
}
.mainTopTh {
    background: var(--blue-dark);
    color: #fff;
}
.d0 {
    background: #f96585;
}
.d1 {
    background: #f98585;
}
.d2 {
    background: #f9a385;
}
.d3 {
    background: #FFBA53;
}
.vencido, .total {
    background: #41B7C1;
}

.last {
    background: var(--gray) !important;
    color: #fff  !important;
}
.task {
    background: linear-gradient(to right, #3fc3a2  50%, #fff 50%);
    background-size: 200% 100%;
    background-position:right bottom;
}

.task:hover {
    background-position: left bottom;
    transition: all 1.5s ease;
    cursor: unset;
}

td {
    cursor: pointer;
}
</style>