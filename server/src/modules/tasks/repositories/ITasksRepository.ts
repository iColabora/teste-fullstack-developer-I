import Task from '../infra/typeorm/entities/Task';

import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO';

export default interface ITasksRepository {
  list(): Promise<Task[]>;
  create(data: ICreateTaskDTO): Promise<Task>;
}
