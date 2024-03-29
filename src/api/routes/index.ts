import { Router } from 'express';
import users from './users'
import tarefas from './tarefas';
import tarefasMovimentação from './tarefasMovimentação';

const router = Router();

router.use('/users', users)
router.use('/tarefas', tarefas)
router.use('/tarefasMovimentação', tarefasMovimentação)

export default router;