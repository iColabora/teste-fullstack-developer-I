import { Repository, getRepository } from 'typeorm';

import ITasksRepository from '../../../repositories/ITasksRepository';
import Task from '../entities/Task';

import { ICreateTaskDTO } from '../../../dtos/ICreateTaskDTO';

type Scale = 'finished' | 'd0' | 'd1' | 'd2' | 'd3';

class TasksRepository implements ITasksRepository {
  private ormRepository: Repository<Task>;

  constructor() {
    this.ormRepository = getRepository(Task);
  }

  public async list(): Promise<Task[]> {
    const items = await this.ormRepository.find({
      relations: ['drilldowns'],
    });

    const total: Record<string, number> = {
      finished: 0,
      d0: 0,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    };

    const response = items.reduce<Task[]>((acc, item) => {
      const task = item;
      item.drilldowns.forEach(drill => {
        task[drill.scale as Scale] += 1;
        task.total += 1;

        total[drill.scale as Scale] += 1;
        total.total += 1;
      });

      acc.push(task);
      return acc;
    }, []);

    response.push({
      id: 0,
      task: 'Total',
      stt: 'total',
      finished: total.finished,
      d0: total.d0,
      d1: total.d1,
      d2: total.d2,
      d3: total.d3,
      total: total.total,
      drilldowns: [],
    });

    return response;
  }

  public async create(data: ICreateTaskDTO): Promise<Task> {
    const item = await this.ormRepository.create(data);

    await this.ormRepository.save(item);

    return item;
  }
}

export default TasksRepository;
