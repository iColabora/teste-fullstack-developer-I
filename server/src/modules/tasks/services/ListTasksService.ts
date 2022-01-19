import { injectable, inject } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import AppError from '@shared/errors/AppError';

import ITasksRepository from '../repositories/ITasksRepository';
import Task from '../infra/typeorm/entities/Task';

@injectable()
class ListTaskService {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository
  ) {}

  public async execute(): Promise<Task[]> {
    try {
      const list = await this.tasksRepository.list();

      return instanceToInstance(list);
    } catch (error) {
      throw new AppError(error as Error);
    }
  }
}

export default ListTaskService;
