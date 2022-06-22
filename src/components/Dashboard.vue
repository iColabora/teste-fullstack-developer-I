<template>
    <div>
        <table width="100%">
            <thead>
                <tr>
                    <th>Tarefa</th>
                    <th>Vencido</th>
                    <th>D0</th>
                    <th>D1</th>
                    <th>D2</th>
                    <th>D3</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="clicavel" @click="number=0, showModal=true">Fila - Aguardando tratativa</td>
                    <td>{{report[0].VENCIDO}}</td>
                    <td class="d0">{{report[0].D0}}</td>
                    <td class="d1">{{report[0].D1}}</td>
                    <td class="d2">{{report[0].D2}}</td>
                    <td class="d3">{{report[0].D3}}</td>
                    <td>{{report[0].TOTAL}}</td>
                </tr>
                <tr>
                    <td class="clicavel" @click="number=1, showModal=true">Em tratativa</td>
                    <td>{{report[1].VENCIDO}}</td>
                    <td class="d0">{{report[1].D0}}</td>
                    <td class="d1">{{report[1].D1}}</td>
                    <td class="d2">{{report[1].D2}}</td>
                    <td class="d3">{{report[1].D3}}</td>
                    <td>{{report[1].TOTAL}}</td>
                </tr>
                <tr>
                    <td class="clicavel" @click="number=2, showModal=true">Aguardando área</td>
                    <td>{{report[2].VENCIDO}}</td>
                    <td class="d0">{{report[2].D0}}</td>
                    <td class="d1">{{report[2].D1}}</td>
                    <td class="d2">{{report[2].D2}}</td>
                    <td class="d3">{{report[2].D3}}</td>
                    <td>{{report[2].TOTAL}}</td>
                </tr>
                <tr>
                    <td class="clicavel" @click="number=3, showModal=true">Aguardando FUP</td>
                    <td>{{report[3].VENCIDO}}</td>
                    <td class="d0">{{report[3].D0}}</td>
                    <td class="d1">{{report[3].D1}}</td>
                    <td class="d2">{{report[3].D2}}</td>
                    <td class="d3">{{report[3].D3}}</td>
                    <td>{{report[3].TOTAL}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{{report[4].VENCIDO}}</td>
                    <td>{{report[4].D0}}</td>
                    <td>{{report[4].D1}}</td>
                    <td>{{report[4].D2}}</td>
                    <td>{{report[4].D3}}</td>
                    <td>{{report[4].TOTAL}}</td>
                </tr>
            </tfoot>
        </table>
        
        <div v-if="showModal" class="detailReport">
            <div class="detailTableHeader">
                <h3>Tabela detalhada</h3>
                <button @click="showModal = false" color="red">Fechar tabela</button>
            </div>
            <table class="report-table" width="100%">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Instância</th>
                        <th>Protocolo</th>
                        <th>Régua</th>
                        <th>Início</th>
                        <th>SLA</th>
                        <th>Tipo solicitação</th>
                        <th>Operador</th>
                    </tr>
                </thead>
                <tr v-for="data in report[number].DRILLDOWN" v-bind:key="data.id">
                    <td>{{data.STATUS}}</td>
                    <td>{{data.INSTANCIA}}</td>
                    <td>{{data.PROTOCOLO}}</td>
                    <td>{{data.REGUA}}</td>
                    <td>{{data.inicio}}</td>
                    <td>{{data.SLA}}</td>
                    <td>{{data.TIPO_SOLICITACAO}}</td>
                    <td>{{data.operador}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
        name: "DashboardVue",
        data() {
            return {
                number:0,
                showModal: false,
                report: {},
            };
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
            axios
                .get("https://ico-fullstack-test.herokuapp.com/v1/histograma")
                .then((res) => {
                    this.report = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
        },
    };
</script>
<style scoped>
table {
    font-weight: bold;
    border-collapse: collapse;
    color: #666666;
}
td {
    background-color: #b2ebf2;
}
thead {
    background-color: rgb(16, 41, 56);
    color: white;
    
}
tr, th, td  {
    padding: 20px;
}
tfoot td {
    background-color: rgb(66, 66, 66);
    color: white;
}
tfoot td:hover {
    opacity: 1;
}
td:hover {
    opacity: .5;
}
.d0 {
    background-color: #f96585;
}
.d1 {
    background-color: #f98585;
}
.d2 {
    background-color: #f9a385;
}
.d3 {
    background-color: #f9bd85;
}
.clicavel {
    cursor: pointer;
    background-color: white;
    background: linear-gradient(to left, white 50%, #3fc3a2 50%) right;
    background-size: 200%;
    transition: .5s ease-out;
}
.clicavel:hover {
    background-position: left;
    opacity: 1;
    
}
.detailReport {
    margin-top: 20px;
}
.detailTableHeader {
    float: inline-start;
}
h3 {
    float: left;
    padding: 10px;
}
button {
    background-color: red;
    color: white;
    font-weight: bold;
    border: none;
    float: right;
    padding: 10px;
    cursor: pointer;
}
</style>