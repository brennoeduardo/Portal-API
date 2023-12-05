// import { Model, DataTypes } from 'sequelize';
// import portal from '../../database/env';
// import { TarefaMovimentacaoAttributes } from '../interfaces/tarefasMovimentação'

// class TarefaMovimentação extends Model<TarefaMovimentacaoAttributes> implements TarefaMovimentacaoAttributes {
//     public data_inicio!: Date;
//     public data_fim?: Date | null | undefined;
//     public status_id!: number;
//     public tarefa_id!: number;
//     public usuario_id!: number;
//     public readonly created_at!: Date;
//     public readonly updated_at!: Date;
// }

// TarefaMovimentação.init({
//     data_inicio:{
//         type: DataTypes.TIME,
//         allowNull: false,
//     },
//     data_fim: {
//         type: DataTypes.TIME,
//         allowNull: true,
//     },
//     status_id:{
//         type: DataTypes.NUMBER,
//         allowNull: false
//     },
//     tarefa_id: {
//         type: DataTypes.NUMBER,
//         allowNull: false
//     },
//     usuario_id:{
//         type: DataTypes.NUMBER,
//         allowNull: false
//     },
//     created_at: { 
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW
//     },
//     updated_at: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW
//     }
// },{
//     sequelize: portal,
//     tableName: 'tarefa_movimentacao',
//     timestamps: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
// })

// export default TarefaMovimentação;