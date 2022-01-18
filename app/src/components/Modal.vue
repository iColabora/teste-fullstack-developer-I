<template>
  <transition name="fade">
    <div class="modalContainer">
      <div class="title">
        <h1>Detalhes</h1>
        <p @click.prevent="handleShowModal">X</p>
      </div>
      <div class="table">
        <table>
          <thead>
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
          </thead>
          <tbody>
            <tr :key="index" v-for="(key, index) in data" class="">
              <td>
                <p>{{ key.INSTANCIA }}</p>
              </td>
              <td>
                <p>{{ key.STATUS }}</p>
              </td>
              <td>
                <p>{{ key.PROTOCOLO }}</p>
              </td>
              <td>
                <p>{{ key.REGUA }}</p>
              </td>
              <td>
                <p>{{ key.inicio }}</p>
              </td>
              <td>
                <p>{{ key.SLA }}</p>
              </td>
              <td>
                <p>{{ key.TIPO_SOLICITACAO }}</p>
              </td>
              <td>
                <p>{{ key.operador }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Modal",
  props: {
    data: {
      type: Array,
      required: true,
    },
    handleShowModal: {
      type: Function,
      required: true,
    },
  },
};
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
  transition: all 1s ease;
  .title {
    margin-bottom: var(--spacing-xxs);
    width: 100%;
    display: flex;
    h1 {
      color: #fff;
      margin: auto;
    }

    p {
      cursor: pointer;
      color: #fff;
    }
  }
  .table {
    height: 400px;
    overflow: auto;
    table {
      border-collapse: collapse;
      width: 100%;
      background: #fff;
      border-radius: var(--radius-md);

      tbody {
        tr:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
      thead {
        .mainLine {
          color: #fff;
          background: var(--gray-light);
          cursor: unset;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
