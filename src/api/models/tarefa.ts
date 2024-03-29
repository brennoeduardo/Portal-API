import { Model, DataTypes } from 'sequelize';
import portalT from '../../database/env';
import { TarefasAttributes } from '../interfaces/tarefas';
import User from './users'; // 

class Tarefas extends Model<TarefasAttributes> implements TarefasAttributes {
    public title!: string;
    public description!: string;
    public usuario_id!: number; 
    public data_prazo!: Date;
    public data_fim?: Date;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Tarefas.init({
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
    sequelize: portalT,
    tableName: 'tarefas',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    schema: 'tarefas'
  }
);

Tarefas.beforeCreate(async (tarefa: Tarefas) => {
  console.log(tarefa);
})
  
Tarefas.belongsTo(User, { foreignKey: 'usuario_id', as: 'user' });
User.hasMany(Tarefas, { foreignKey: 'usuario_id', as: 'tarefas' });

export default Tarefas;
