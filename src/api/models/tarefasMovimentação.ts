import { Model, DataTypes } from 'sequelize';
import portalT from '../../database/env';
import { TarefaMovimentacaoAttributes } from '../interfaces/tarefasMovimentação'
import User from './users';
import Tarefas from './tarefa';

class TarefaMovimentação extends Model<TarefaMovimentacaoAttributes> implements TarefaMovimentacaoAttributes {
    public data_inicio!: Date;
    public data_fim?: Date | null | undefined;
    public status_id!: number;
    public tarefa_id!: number;
    public usuario_id!: number;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

TarefaMovimentação.init({
    data_inicio:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    data_fim: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    status_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tarefa_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usuario_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    sequelize: portalT,
    tableName: 'tarefa_movimentacao',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    schema: 'tarefas' 
})

TarefaMovimentação.belongsTo(Tarefas, { foreignKey: 'tarefa_id', as: 'tarefa' });
Tarefas.hasMany(TarefaMovimentação, { foreignKey: 'tarefa_id', as: 'tarefa' });

TarefaMovimentação.belongsTo(User, { foreignKey: 'usuario_id', as: 'user' });
User.hasMany(TarefaMovimentação, { foreignKey: 'usuario_id', as: 'user' });


export default TarefaMovimentação;