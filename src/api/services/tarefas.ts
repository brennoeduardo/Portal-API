import { TarefasAttributes } from '../interfaces/tarefas';
import Tarefa from '../models/tarefa';

class TarefasServices {

    async findAll(): Promise<TarefasAttributes[]> {
        return Tarefa.findAll();
    }

    async findOne(id: number): Promise<TarefasAttributes | null> {
        return Tarefa.findByPk(id);
    }

    async create(tarefa: TarefasAttributes): Promise<TarefasAttributes> {
        return Tarefa.create(tarefa);
    }

    async update(id: number, tarefa: TarefasAttributes): Promise<TarefasAttributes | null> {
        const TarefaFound = await Tarefa.findByPk(id);
        if (!TarefaFound) return null;
        return TarefaFound.update(tarefa);
    }

    async delete(id: number) {
        const TarefaFound = await Tarefa.findByPk(id);
        if (!TarefaFound) return null;
        return TarefaFound.destroy();
    }
}

export default new TarefasServices();