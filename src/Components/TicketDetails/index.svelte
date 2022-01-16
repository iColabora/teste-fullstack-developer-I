<script>
    import { dataTicket, selectedTask } from "../../Store/index.js";

    const titles = [
        "Protocolo",
        "Status",
        "Instância",
        "Regua",
        "Tipo de Solicitação",
        "Início",
        "SLA",
        "Operador",
    ];
</script>

<div class="ticket_details">
    <div class="ticket_details__title">
        <h1>Detalhes dos chamados</h1>
        <span>Mostrando:</span><span class="sub_title">{$selectedTask}</span>
    </div>

    <div class="container">
        <div class="table">
            <div class="table-header">
                {#each titles as title}
                    <div class="header__item">
                        <span id="name" class="filter__link">
                            {title}
                        </span>
                    </div>
                {/each}
            </div>
            <div class="table-content">
                {#if $dataTicket}
                    {#each $dataTicket as item}
                        {#if $selectedTask === "Todos"}
                            {#each item.DRILLDOWN as item}
                                <div class="table-row">
                                    <div class="table-data">
                                        {item.PROTOCOLO}
                                    </div>
                                    <div class="table-data">{item.STATUS}</div>
                                    <div class="table-data">
                                        {item.INSTANCIA}
                                    </div>
                                    <div class="table-data">{item.REGUA}</div>
                                    <div class="table-data">
                                        {item.TIPO_SOLICITACAO}
                                    </div>
                                    <div class="table-data">{item.inicio}</div>
                                    <div class="table-data">{item.SLA}</div>
                                    <div class="table-data">
                                        {item.operador}
                                    </div>
                                </div>
                            {/each}
                        {:else if $selectedTask === item.TAREFA}
                            {#each item.DRILLDOWN as item}
                                <div class="table-row">
                                    <div class="table-data">
                                        {item.PROTOCOLO}
                                    </div>
                                    <div class="table-data">{item.STATUS}</div>
                                    <div class="table-data">
                                        {item.INSTANCIA}
                                    </div>
                                    <div class="table-data">{item.REGUA}</div>
                                    <div class="table-data">
                                        {item.TIPO_SOLICITACAO}
                                    </div>
                                    <div class="table-data">{item.inicio}</div>
                                    <div class="table-data">{item.SLA}</div>
                                    <div class="table-data">
                                        {item.operador}
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    {/each}
                {:else}
                    <div class="table-data">Carregando informações...</div>
                {/if}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "./_ticket-details.scss";
</style>
