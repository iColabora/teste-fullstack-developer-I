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
                <td @click="showDrill(index, 'VENCIDO')">{{key.VENCIDO}}</td>
                <td @click="showDrill(index, 'D0')">{{key.D0}}</td>
                <td @click="showDrill(index, 'D1')">{{key.D1}}</td>
                <td @click="showDrill(index,'D2')">{{key.D2}}</td>
                <td @click="showDrill(index,'D3')">{{key.D3}}</td>
                <td>{{key.TOTAL}}</td>
                <td>{{key.STT}}</td>

            </tr>
            <!-- <tr class="finalTh">
                <td>{{ data[4].TAREFA }}</td>
                <td>{{ data[4].VENCIDO }}</td>
                <td>{{ data[4].D0 }}</td>
                <td>{{ data[4].D1 }}</td>
                <td>{{ data[4].D2 }}</td>
                <td>{{ data[4].D3 }}</td>
                <td>{{ data[4].TOTAL }}</td>
                <td>{{ data[4].STT }}</td>
            </tr> -->
        </table>
            {{ drillAttributes }}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'DrillDown',  
    
    data(){
        return {
            data: {},
            drillAttributes: [],
            counter: 0,
        }
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
    background: #22333B;
    color: #fff;
}
.last {
    background: #38332E !important;
    color: #fff  !important;
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

.task {
    /* background: #3fc3a2; */
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