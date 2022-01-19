<template>
  <div class="main">
    <table :class="['tasks', isDetailsBoxOpen && 'disabled']">
      <thead>
        <tr>
          <th class="text-left">{{ t(`columns.task`) }}</th>
          <th class="text-left">{{ t(`columns.defeated`) }}</th>
          <th class="text-left">D0</th>
          <th class="text-left">D1</th>
          <th class="text-left">D2</th>
          <th class="text-left">D3</th>
          <th class="text-left">Total</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item, index) in tasks"
          :key="item.id"
          :class="`${item.stt}`"
        >
          <td class="tasks">{{ item.task }}</td>
          <td
            class="finished"
            :class="{ selected: scaleSelected === `finished-${index}` }"
            @click="showDetails(item, 'finished', index)"
          >
            {{ item.finished }}
          </td>
          <td
            class="d0"
            :class="{ selected: scaleSelected === `d0-${index}` }"
            @click="showDetails(item, 'd0', index)"
          >
            {{ item.d0 }}
          </td>
          <td
            class="d1"
            :class="{ selected: scaleSelected === `d1-${index}` }"
            @click="showDetails(item, 'd1', index)"
          >
            {{ item.d1 }}
          </td>
          <td
            class="d2"
            :class="{ selected: scaleSelected === `d2-${index}` }"
            @click="showDetails(item, 'd2', index)"
          >
            {{ item.d2 }}
          </td>
          <td
            class="d3"
            :class="{ selected: scaleSelected === `d3-${index}` }"
            @click="showDetails(item, 'd3', index)"
          >
            {{ item.d3 }}
          </td>
          <td class="total">{{ item.total }}</td>
        </tr>
      </tbody>
    </table>

    <div :class="['box-details', isDetailsBoxOpen && 'open']">
      <div class="close" @click="hideDetails">
        <img class="img" :src="require(`@/assets/close.png`)" />
      </div>

      <div class="details">
        <div v-if="!drilldowns.length" class="no-data">
          {{ t('noDataResults') }}
        </div>
        <table v-if="drilldowns.length" class="drilldowns">
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">{{ t(`columns.instance`) }}</th>
              <th class="text-left">{{ t(`columns.protocol`) }}</th>
              <th class="text-left">{{ t(`columns.start`) }}</th>
              <th class="text-left">{{ t(`columns.sla`) }}</th>
              <th class="text-left">{{ t(`columns.request_type`) }}</th>
              <th class="text-left">{{ t(`columns.operator`) }}</th>
            </tr>
          </thead>
        </table>

        <div class="scrollable">
          <table v-if="drilldowns.length" class="drilldowns">
            <tbody>
              <tr v-for="(dd, index) in drilldowns" :key="dd.id">
                <td class="index">{{ index }}</td>
                <td>{{ dd.instance }}</td>
                <td>{{ dd.protocol }}</td>
                <td>{{ dd.start }}</td>
                <td>{{ dd.sla }}</td>
                <td>{{ dd.request_type }}</td>
                <td>{{ dd.operator }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { useStore } from 'vuex';

import { IDrilldown, ITask } from '@/store/tasks/state';

type Scale = 'finished' | 'd0' | 'd1' | 'd2' | 'd3';

export default defineComponent({
  name: 'PageHome',

  setup() {
    const { t } = useI18n({ useScope: 'global' });
    const { state, dispatch } = useStore();

    const tasks = computed(() => state.tasks.list);
    const scaleSelected = ref('');
    const drilldowns = ref<IDrilldown[]>([]);

    const isDetailsBoxOpen = ref(false);

    onMounted(() => {
      dispatch('tasks/index');
    });

    const showDetails = (item: ITask, scale: Scale, index: number) => {
      console.log(index);
      scaleSelected.value = `${scale}-${index}`;
      isDetailsBoxOpen.value = true;
      drilldowns.value = item.drilldowns.filter(dd => dd.scale === scale);
    };

    const hideDetails = () => {
      scaleSelected.value = '';
      isDetailsBoxOpen.value = false;
    };

    return {
      t,
      tasks,
      scaleSelected,
      drilldowns,
      isDetailsBoxOpen,
      showDetails,
      hideDetails,
    };
  },
});
</script>

<style lang="scss" scoped>
@keyframes pulse {
  0% {
    background: #f5f5f5;
  }
  10% {
    background-image: linear-gradient(to right, #3fc3a2 -100%, #f5f5f5);
  }
  20% {
    background-image: linear-gradient(to right, #3fc3a2 -75%, #f5f5f5);
  }
  30% {
    background-image: linear-gradient(to right, #3fc3a2 -50%, #f5f5f5);
  }
  40% {
    background-image: linear-gradient(to right, #3fc3a2 -25%, #f5f5f5);
  }
  50% {
    background-image: linear-gradient(to right, #3fc3a2, #f5f5f5);
  }
  60% {
    background-image: linear-gradient(to right, #3fc3a2 25%, #f5f5f5);
  }
  70% {
    background-image: linear-gradient(to right, #3fc3a2 50%, #f5f5f5);
  }
  80% {
    background-image: linear-gradient(to right, #3fc3a2 75%, #f5f5f5);
  }
  90% {
    background-image: linear-gradient(to right, #3fc3a2 100%, #f5f5f5);
  }
  100% {
    background: #3fc3a2;
  }
}

.main {
  table.tasks {
    border: 1px solid #ddd;
    border-collapse: collapse;
    width: 100%;
    background: #f5f5f5;
    pointer-events: all;

    // &.disabled {
    //   opacity: 0.7;
    //   pointer-events: none;
    // }

    thead {
      color: #fff;
      background: #102938;
    }

    tr {
      &:not(.total) {
        td {
          &:not(.tasks):hover {
            opacity: 0.8;
            cursor: pointer;
          }

          &.tasks {
            font-weight: 600;
            background: #f5f5f5;
            transition: all 0.4s ease;

            &:hover {
              animation: pulse 0.4s forwards;
            }
          }
          &.d0 {
            background: #f96585;
          }
          &.d1 {
            background: #f98585;
          }
          &.d2 {
            background: #f9a385;
          }
          &.d3 {
            background: #f9be85;
          }
          &.finished,
          &.total {
            background: #b2ebf2;
          }

          &.selected {
            outline: 1px solid #000;
            outline-offset: -1px;
          }
        }
      }

      th,
      td {
        text-align: left;
        padding: 15px;
        opacity: 1;
        will-change: opacity;
        animation: all 0.1s;
      }
    }

    tr.total {
      color: #fff;
      background: #424242;
    }
  }

  .box-details {
    position: fixed;
    top: 100vh;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: top 0.2s, opacity 0.065s;
    transition-property: top, opacity;
    border-left: 1px solid rgba(#000000, 0.1);
    pointer-events: none;

    &.open {
      pointer-events: all;
      opacity: 1;
      top: 320px;
    }

    .close {
      text-align: center;
      width: 100%;
      height: 40px;
      margin: 4px auto;
      padding: 6px;
      background: #ffffff;
      cursor: pointer;

      &:hover {
        box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2),
          0 1px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 4px 0 rgba(0, 0, 0, 0.12);
      }

      img {
        height: 35px;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px;
      background: #ffffff;

      .scrollable {
        width: 100%;
        height: calc(100vh - 350px);
        overflow-y: auto;
      }

      table.drilldowns {
        width: 100%;
        border-collapse: collapse;

        thead {
          th {
            height: 32px;
            text-align: left;
            padding: 15px;
            border-bottom: 1px solid #f0f0f0;
          }
        }

        tbody {
          tr {
            height: 40px;

            &:hover {
              background: rgba(#000000, 0.1);
            }

            td {
              border-top: 1px solid #f0f0f0;
              border-bottom: 1px solid #f0f0f0;
              text-align: left;
              padding: 15px;

              &.index {
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
}
</style>
