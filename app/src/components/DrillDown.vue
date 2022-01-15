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
            <tr>
                <td class="task">{{ data[0].TAREFA }}</td>
                <td class="vencido">{{ data[0].VENCIDO }}</td>
                <td class="d0">{{ data[0].D0 }}</td>
                <td class="d1">{{ data[0].D1 }}</td>
                <td class="d2">{{ data[0].D2 }}</td>
                <td class="d3">{{ data[0].D3 }}</td>
                <td class="total">{{ data[0].TOTAL }}</td>
                <td>{{ data[0].STT }}</td>
            </tr>
            <tr>
                <td class="task">{{ data[1].TAREFA }}</td>
                <td class="vencido">{{ data[1].VENCIDO }}</td>
                <td class="d0">{{ data[1].D0 }}</td>
                <td class="d1">{{ data[1].D1 }}</td>
                <td class="d2">{{ data[1].D2 }}</td>
                <td class="d3">{{ data[1].D3 }}</td>
                <td class="total">{{ data[1].TOTAL }}</td>
                <td>{{ data[1].STT }}</td>
            </tr>
            <tr>
                <td class="task">{{ data[2].TAREFA }}</td>
                <td class="vencido">{{ data[2].VENCIDO }}</td>
                <td class="d0">{{ data[2].D0 }}</td>
                <td class="d1">{{ data[2].D1 }}</td>
                <td class="d2">{{ data[2].D2 }}</td>
                <td class="d3">{{ data[2].D3 }}</td>
                <td class="total">{{ data[2].TOTAL }}</td>
                <td>{{ data[2].STT }}</td>
            </tr>
            <tr>
                <td class="task">{{ data[3].TAREFA }}</td>
                <td class="vencido">{{ data[3].VENCIDO }}</td>
                <td class="d0">{{ data[3].D0 }}</td>
                <td class="d1">{{ data[3].D1 }}</td>
                <td class="d2">{{ data[3].D2 }}</td>
                <td class="d3">{{ data[3].D3 }}</td>
                <td class="total">{{ data[3].TOTAL }}</td>
                <td>{{ data[3].STT }}</td>
            </tr>
            <tr class="finalTh">
                <td>{{ data[4].TAREFA }}</td>
                <td>{{ data[4].VENCIDO }}</td>
                <td>{{ data[4].D0 }}</td>
                <td>{{ data[4].D1 }}</td>
                <td>{{ data[4].D2 }}</td>
                <td>{{ data[4].D3 }}</td>
                <td>{{ data[4].TOTAL }}</td>
                <td>{{ data[4].STT }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'DrillDown',  
    
    data(){
        return {
            data: {}
        }
    },
    methods: {
        async getData(){
            await axios.get('https://ico-fullstack-test.herokuapp.com/v1/histograma')
                    .then(res => this.data = res.data)
        }
    },
    beforeMount(){
        this.getData()
        console.log(this.data)
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
.finalTh {
    background: #38332E;
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