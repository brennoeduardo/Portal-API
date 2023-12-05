export interface TarefaMovimentacaoAttributes {
    data_inicio: Date;
    data_fim?: Date | null;
    status_id: number;
    tarefa_id?: number;
    usuario_id: number;
}