import { UserAttributes } from "./users";

export interface TarefasAttributes {
    title: string,
    description: string,
    usuario_id: number,
    data_prazo: Date;
    data_fim?: Date;
}