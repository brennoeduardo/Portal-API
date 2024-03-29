import {Router} from 'express';
import TarefaMovimentacaoController from '../controllers/tarefasMovimentação';
const router = Router();

router.route('/')
    .get(TarefaMovimentacaoController.findAll)
    .post(TarefaMovimentacaoController.create);

router.route('/:id')
    .get(TarefaMovimentacaoController.findOne)
    .put(TarefaMovimentacaoController.update)
    .delete(TarefaMovimentacaoController.delete);


export default router;