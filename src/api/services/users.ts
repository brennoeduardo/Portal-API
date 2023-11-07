import bcrypt from 'bcrypt';
import { UserAttributes } from '../interfaces/users';
import User from '../models/users';

class UsersServices {

    async findAll(): Promise<UserAttributes[]> {
        return User.findAll();
    }

    public async findOne(id: number): Promise<UserAttributes | null> {
        return User.findByPk(id);
    }

    public async create(user: UserAttributes): Promise<UserAttributes> {
        return User.create(user);
    }

    public async findByEmail(email: string): Promise<UserAttributes | null> {
        return User.findOne({ where: { email } });
    }

    public async update(id: number, user: UserAttributes): Promise<UserAttributes | null> {
        const userFound = await User.findByPk(id);
        if (!userFound) return null;
        return userFound.update(user);
    }

    public async delete(id: number) {
        const userFound = await User.findByPk(id);
        if (!userFound) return null;
        return userFound.destroy();
    }
}

export default new UsersServices();