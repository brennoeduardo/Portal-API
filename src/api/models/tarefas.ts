import { Model, DataTypes } from 'sequelize';
import { TarefasAttributes } from '../interfaces/tarefas';
import portal from '../../database/env';
import User from '../models/users'; // 

class Tarefa extends Model<TarefasAttributes> implements TarefasAttributes {
  public title!: string;
  public description!: string;
  public usuario_id!: number; 
  public data_prazo!: Date;
  public data_fim?: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Tarefa.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    data_prazo: {
      type: DataTypes.DATE, 
      allowNull: false,
    },
    data_fim: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: portal,
    tableName: 'tarefas',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    schema: 'tarefas'
  }
);

Tarefa.belongsTo(User, { foreignKey: 'usuario_id', as: 'user' });
User.hasMany(Tarefa, { foreignKey: 'usuario_id', as: 'tarefas' });

export default Tarefa;
