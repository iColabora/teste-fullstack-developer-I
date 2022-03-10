<script>
export default {
  props: {
    show: Boolean,
    taskInfo: Object,
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2>{{ taskInfo.taskName }}</h2>
            <h3>{{ taskInfo.taskScale }}</h3>
          </div>

          <div class="modal-body">
            <div v-if="taskInfo.taskOperations.length > 0">
              <div
                class="detail"
                v-for="task in taskInfo.taskOperations"
                :key="task.INSTANCIA"
              >
                <p>
                  Instância: <span class="info">{{ task.INSTANCIA }}</span>
                </p>
                <p>
                  Status: <span class="info">{{ task.STATUS }}</span>
                </p>
                <p>
                  Área: <span class="info">{{ task.AREA }}</span>
                </p>
                <p>
                  Protocolo: <span class="info">{{ task.PROTOCOLO }}</span>
                </p>
                <p>
                  Régua: <span class="info">{{ task.REGUA }}</span>
                </p>
                <p>
                  Início: <span class="info">{{ task.inicio }}</span>
                </p>
                <p>
                  SLA: <span class="info">{{ task.SLA }}</span>
                </p>
                <p>
                  Tipo de Solicitação:
                  <span class="info">{{ task.TIPO_SOLICITACAO }}</span>
                </p>
                <p>
                  Operador: <span class="info">{{ task.operador }}</span>
                </p>
              </div>
            </div>
            <div v-else>Não há operações a serem detalhadas.</div>
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="$emit('close')">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.detail {
  margin: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
}

.info {
  font-weight: 400;
}

.modal {
  &-mask {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }

  &-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30vh;
  }

  &-container {
    width: 40vw;
    height: 50vh;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  &-header {
    height: 15%;
  }

  &-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  &-body {
    margin: 10px 0;
    height: 70%;
    overflow: scroll;
  }

  &-footer {
    margin: 20px 0;
    height: 10%;
    width: 100%;
  }

  &-default-button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &-enter-from {
    opacity: 0;
  }

  &-leave-to {
    opacity: 0;
  }

  &-enter-from &-container,
  &-leave-to &-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
