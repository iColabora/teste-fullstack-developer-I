import { Router } from 'express';

import tasksRoutes from '@modules/tasks/infra/http/routes/tasks.routes';

const routes = Router();

routes.post('/', (req, res) => res.status(401).send('Permission Denied'));
routes.get('/', (req, res) => res.status(401).send('Permission Denied'));
routes.get('/health', (req, res) => res.json({ up: true }));

routes.use('/tasks', tasksRoutes);

export default routes;
