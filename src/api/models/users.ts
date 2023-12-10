import { Model, DataTypes } from 'sequelize';
import portal from '../../database/env';
import bcrypt from 'bcrypt';
import { UserAttributes } from '../interfaces/users';
class User extends Model<UserAttributes> implements UserAttributes {
    public name!: string;
    public last_name!: string;
    public email!: string;
    public password!: string;
    public ativo!: boolean;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize: portal,
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    schema: 'usuarios'
});

User.beforeCreate(async (user: User) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

export default User;