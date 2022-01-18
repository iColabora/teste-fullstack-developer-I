<template>
    <div class="modalContainer">
        <div class="title">
            <h1>Detalhes</h1>
            <p @click.prevent="handleShowModal">X</p>
        </div>
        <div class="table">
            <table>
                <tr class="mainLine">
                    <td>Instância</td>   
                    <td>Status</td>     
                    <td>Protocolo</td>      
                    <td>Régua</td>  
                    <td>Início</td>
                    <td>SLA</td>
                    <td>Tipo Solicitação</td>
                    <td>Operador</td>
                </tr>
                <tr :key="index" v-for="(key, index) in data" class="">
                    <td>{{key.INSTANCIA}}</td>
                    <td>{{key.STATUS}}</td>
                    <td>{{key.PROTOCOLO}}</td>
                    <td>{{key.REGUA}}</td>
                    <td>{{key.inicio}}</td>
                    <td>{{key.SLA}}</td>
                    <td>{{key.TIPO_SOLICITACAO}}</td>
                    <td>{{key.operador}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    props:{
        data: {
            type: Array,
            required: true,
        },
        handleShowModal: {
            type: Function,
            required: true
        }
    },

}
</script>

<style lang="scss">
    .modalContainer {
        background: var(--gray);
        margin: auto;
        width: 70%;
        box-shadow: 0 0 1rem var(--gray);
        padding: var(--spacing-xxs);    
        border-radius: var(--radius-md);
        position: absolute;
        z-index: 3;
        top: 0;
        right: 10%;
        .title {
            margin-bottom: var(--spacing-xxs);
            width: 100%;
            display: flex;
            h1 {
                color: #fff;  
                margin: auto;
            }

            p{
                cursor: pointer;
                color: #fff;
            }
        }
        .table {
            height: 300px;
            overflow: auto;
            table {
                border-collapse: collapse;
                width: 100%;
                background: #fff;
                border-radius: var(--radius-md);
    
                .mainLine {
                    color: #fff;
                    background: var(--gray-light);
                }
    
                td {
                    padding: var(--spacing-xxxs);
                    
                }
            }

        }
    }

    
</style>
