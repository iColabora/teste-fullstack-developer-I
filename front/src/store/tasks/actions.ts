import { ActionTree } from 'vuex';

import { retry } from '@/services/axios';

import { StateInterface } from '../index';
import { TasksStateInterface, ITask } from './state';

const actions: ActionTree<TasksStateInterface, StateInterface> = {
  async index({ commit }) {
    const tasks = await retry<ITask[]>({
      url: '/tasks',
    });

    commit('tasks/set', tasks.data, { root: true });
    return tasks.data;
  },
};

export default actions;
