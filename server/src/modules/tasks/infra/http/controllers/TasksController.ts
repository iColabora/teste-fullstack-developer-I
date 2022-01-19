import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListTasksService from '../../../services/ListTasksService';

export default class TasksController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listService = container.resolve(ListTasksService);

    const items = await listService.execute();

    return res.json(items);
  }
}
