import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { TasksStateInterface } from './state';

const getters: GetterTree<TasksStateInterface, StateInterface> = {
  list: state => state.list,
};

export default getters;
