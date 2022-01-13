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
                            <td class="task-info">Fila - Aguardando tratativa</td>
                        </tr>
                        <tr>
                            <td class="task-info">Em tratativa</td>
                        </tr>
                        <tr>    
                            <td class="task-info">Aguardando área</td>
                        </tr>
                        <tr>
                            <td class="task-info">Aguardando FUP</td>
                        </tr>
                        <tr class="total">
                            <td>Total</td>
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
                this.data = res.data.bpi
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
