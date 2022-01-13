const MainPage = {
    template: `
    <div class="container">
        <div class="container">
            <h3>Relatório</h3>
        </div>
        <section v-if="errored">
            <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>
        </section>

        <section v-else>
            <div v-if="loading">Carregando...</div>

            <div v-else class="container-fluid">
                <table class="report-table">
                    <thead>
                        <tr class="title-line">
                            <th>Tarefas</th>
                            <th class="txt-center">Vencido</th>
                            <th class="txt-center">D0</th>
                            <th class="txt-center">D1</th>
                            <th class="txt-center">D2</th>
                            <th class="txt-center">D3</th>
                            <th class="txt-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="index in data" class="table-back">
                            <td class="task-info fill" v-bind:class="index.TAREFA == 'Total' && 'total'">{{ index.TAREFA }}</td>
                            <td class="vencido task-info" v-bind:class="index.VENCIDO == '116' && 'total'">{{ index.VENCIDO }}</td>
                            <td class="d0 task-info" v-bind:class="index.D0 == '29' && 'total'">{{ index.D0 }}</td>
                            <td class="d1 task-info" v-bind:class="index.D1 == '26' && 'total'">{{ index.D1 }}</td>
                            <td class="d2 task-info" v-bind:class="index.D2 == '27' && 'total'">{{ index.D2 }}</td>
                            <td class="d3 task-info" v-bind:class="index.D3 == '43' && 'total'">{{ index.D3 }}</td>
                            <td class="vencido task-info" v-bind:class="index.TOTAL == '241' && 'total'">{{ index.TOTAL }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
    `,
    data: function () {
        return {
            data: null,
            loading: true,
            errored: false
        }
    },
    mounted: function () {
        axios
            .get('https://ico-fullstack-test.herokuapp.com/v1/histograma')
            .then((res) => {
                this.data = res.data
                console.log(res.data)
            })
            .catch((err) => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
}

Vue.component("main-page", MainPage)
