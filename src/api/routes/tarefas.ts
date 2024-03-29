import {Router} from 'express';
import TarefaController from '../controllers/tarefas';

const router = Router();

router.route('/')
    .get(TarefaController.findAll)
    .post(TarefaController.create);

router.route('/:id')
    .get(TarefaController.findOne)
    .put(TarefaController.update)
    .delete(TarefaController.delete);

export default router;