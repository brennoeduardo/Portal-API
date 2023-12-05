import { Model, DataTypes } from 'sequelize';
import { TarefasAttributes } from '../interfaces/tarefas';
import { UserAttributes } from '../interfaces/users';
import portal from '../../database/env';
import User from '../models/users'; // Import your User model

class Tarefa extends Model<TarefasAttributes> implements TarefasAttributes {
  public title!: string;
  public description!: string;
  public usuario_id!: number; // Use DataTypes.INTEGER for foreign keys
  public data_prazo!: Date;
  public data_fim?: Date;
}

Tarefa.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER, // Use INTEGER for foreign keys
      allowNull: false,
    },
    data_prazo: {
      type: DataTypes.DATE, // Use DATE for date and time
      allowNull: false,
    },
    data_fim: {
      type: DataTypes.DATE, // Use DATE for date and time
      allowNull: true,
    },
  },
  {
    sequelize: portal,
    tableName: 'tarefas',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

Tarefa.belongsTo(User, { foreignKey: 'usuario_id', as: 'user' });
User.hasMany(Tarefa, { foreignKey: 'tarefa_id', as: 'tarefa'}) 

export default Tarefa;
