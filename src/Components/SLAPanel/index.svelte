<script>
    import { dataTicket, selectedTask } from "../../Store/index.js";

    const titles = ["Tarefa", "Vencido", "D0", "D1", "D2", "D3", "Total"];

    function setSelectedTask(task) {
        if ($selectedTask === task) {
            $selectedTask = "Todos";
        } else {
            $selectedTask = task;
        }
    }
</script>

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
                {#each $dataTicket as item, index}
                    {#if index !== 4}
                        <div
                            class="table-row"
                            class:active={$selectedTask === item.TAREFA}
                            on:click={() => setSelectedTask(item.TAREFA)}
                        >
                            <div class="table-data">{item.TAREFA}</div>
                            <div class="table-data">{item.VENCIDO}</div>
                            <div class="table-data">{item.D0}</div>
                            <div class="table-data">{item.D1}</div>
                            <div class="table-data">{item.D2}</div>
                            <div class="table-data">{item.D3}</div>
                            <div class="table-data">{item.TOTAL}</div>
                        </div>
                    {/if}
                {/each}
            {:else}
                <div class="table-data">Carregando informações...</div>
            {/if}
        </div>
        <div class="table-bottom">
            {#if $dataTicket}
                {#each $dataTicket as item (item.TAREFA)}
                    {#if item.TAREFA === "Total"}
                        <span>{item.TAREFA}</span>
                        <span>{item.VENCIDO}</span>
                        <span>{item.D0}</span>
                        <span>{item.D1}</span>
                        <span>{item.D2}</span>
                        <span>{item.D3}</span>
                        <span>{item.TOTAL}</span>
                    {/if}
                {/each}
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    @import "./_sla-panel.scss";
</style>
