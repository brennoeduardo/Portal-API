import { LoginAttributes } from '../interfaces/login';
import bcrypt from 'bcrypt';
import User from '../models/users';
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
const key = '4BiFnsU68Trx86565E1GOubab5sIQ086lcmEt2hD2mhjeUkYfvoNq'

class AuthUser {
    public async isUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const email = req.body.email
            const password = req.body.password

            const user = await User.findOne({ where: { email } });
            if (!user) throw new Error('Usuário não encontrado')

            if (!bcrypt.compareSync(password, user.password)) throw new Error('Invalid password');

            const token = jwt.sign({ id: user }, key, { expiresIn: 864000 })

            res.status(200).json({
                success: true,
                message: 'Usuário autenticado com sucesso!',
                data: user,
                token
            })

        } catch (error) {
            res.status(401).json({ error: 'Authentication failed' });
        }
    }

    public async verifyToken(req: Request, res: Response, next: NextFunction): Promise<any> {

        const tokenHeader = req.headers["authorization"]
        const token = tokenHeader && tokenHeader.split(" ")[1]

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Não autorizado"
            })
        }

        try {

            jwt.verify(token, key)
            next()

        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Token inválido"
            })
        }

    }

}

export default new AuthUser()