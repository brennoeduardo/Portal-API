import { NextFunction, Request, Response } from "express";
import { TarefasAttributes } from "../interfaces/tarefas";
import TarefaMovimentacaoService from "../services/tarefasMvimentação";
import { TarefaMovimentacaoAttributes } from "../interfaces/tarefasMovimentação";

class TarefaMovimentacaoController {

    public async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const tarefas = await TarefaMovimentacaoService.find();
            res.json(tarefas);
        } catch (error) {
            next(error);
        }
    }

    public async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const tarefa = await TarefaMovimentacaoService.findOne(Number(id));
            res.json(tarefa);
        } catch (error) {
            next(error);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const tarefa: TarefaMovimentacaoAttributes = req.body;
            const newTarefa = await TarefaMovimentacaoService.create(tarefa);
            res.json(newTarefa);
        } catch (error) {
            next(error);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const tarefa: TarefaMovimentacaoAttributes = req.body;
            const updatedTarefa = await TarefaMovimentacaoService.update(Number(id), tarefa);
            res.json(updatedTarefa);
        } catch (error) {
            next(error);
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            await TarefaMovimentacaoService.delete(Number(id));
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    }

}   

export default new TarefaMovimentacaoController();