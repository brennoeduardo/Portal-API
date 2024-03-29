import { TarefaMovimentacaoAttributes } from '../interfaces/tarefasMovimentação';
import TarefaMovimentação from '../models/tarefasMovimentação';

class TarefaMovimentacaoService {

    public async find(): Promise<TarefaMovimentacaoAttributes[]> {
        const tarefas = await TarefaMovimentação.findAll();
        return tarefas;
    }

    public async findOne(id: number): Promise<TarefaMovimentacaoAttributes | null> {
        const tarefa = await TarefaMovimentação.findByPk(id);
        return tarefa;
    }

    public async create(tarefaMovimentacao: TarefaMovimentacaoAttributes): Promise<TarefaMovimentacaoAttributes> {
        const tarefa = await TarefaMovimentação.create(tarefaMovimentacao);
        return tarefa;
    }

    public async update(id: number, tarefaMovimentacao: TarefaMovimentacaoAttributes): Promise<TarefaMovimentacaoAttributes[]> {
        // const tarefa = await TarefaMovimentação.update(tarefaMovimentacao, { where: { id } });
        return [];
    }

    public async delete(id: number): Promise<void> {
        // await TarefaMovimentação.destroy({ where: { id } });
    }

    public async getAllByTarefaId(tarefa_id: number): Promise<TarefaMovimentacaoAttributes[]> {
        const tarefas = await TarefaMovimentação.findAll({ where: { tarefa_id } });
        return tarefas;
    }

    public async getAllByUserId(usuario_id: number): Promise<TarefaMovimentacaoAttributes[]> {
        const tarefas = await TarefaMovimentação.findAll({ where: { usuario_id } });
        return tarefas;
    }

}

export default new TarefaMovimentacaoService();