import { InjectionKey } from 'vue';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';

import { AppStateInterface } from './app/state';
import app from './app';
import { TasksStateInterface } from './tasks/state';
import tasks from './tasks';

export interface StateInterface {
  app: AppStateInterface;
  tasks: TasksStateInterface;
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol('vuex-key');

const store = createStore<StateInterface>({
  modules: {
    app,
    tasks,
  },

  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: !!process.env.DEBUGGING,
});

export function useStore() {
  return vuexUseStore(storeKey);
}

export default store;
