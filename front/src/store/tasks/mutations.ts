import { MutationTree } from 'vuex';
import { TasksStateInterface, ITask } from './state';

const mutation: MutationTree<TasksStateInterface> = {
  set(state, payload: ITask[]) {
    state.list = payload;
  },
};

export default mutation;
