import { Model, DataTypes } from 'sequelize';
import portal from '../../database/env';
import { TarefaMovimentacaoAttributes } from '../interfaces/tarefasMovimentação'
import User from './users';

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
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tarefa_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    usuario_id:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
},{
    sequelize: portal,
    tableName: 'tarefa_movimentacao',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

TarefaMovimentação.belongsTo(User, { foreignKey: 'usuario_id', as: 'user' });
User.hasMany(TarefaMovimentação, { foreignKey: 'usuario_id', as: 'tarefas' });


export default TarefaMovimentação;