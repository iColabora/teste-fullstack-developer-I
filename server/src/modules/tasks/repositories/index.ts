import { container } from 'tsyringe';

import ITasksRepository from './ITasksRepository';
import TasksRepository from '../infra/typeorm/repositories/TasksRepository';

container.registerSingleton<ITasksRepository>(
  'TasksRepository',
  TasksRepository
);
