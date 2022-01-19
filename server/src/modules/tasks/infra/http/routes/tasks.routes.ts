import { Router } from 'express';

import TasksController from '../controllers/TasksController';

const controller = new TasksController();

const router = Router();

router.get('/', controller.index);

export default router;
