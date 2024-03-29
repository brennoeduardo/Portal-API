import { NextFunction, Request, Response } from "express";
import { UserAttributes } from "../interfaces/users";
import UsersServices from "../services/users";

class UsersController {

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const login = req.body;
            const user = await UsersServices.login(login);

            res.status(200).json({
                success: true,
                message: 'User authenticated success',
                data: user
            });

        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    async routerAuth(req: Request, res: Response, next: NextFunction){
        res.status(200).json({
            success: true,
            message: 'Rota autenticada'
        })
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {

            const users = await UsersServices.findAll();
            res.json(
                {
                    success: true,
                    message: 'Users retrieved successfully',
                    data: users
                }

            );
        } catch (error) {
            next(error);
        }
    }

    async findOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await UsersServices.findOne(parseInt(id));
            if (!user) {
                res.status(404).json({
                    success: false,
                    message: 'User not found',
                    data: {}
                });
            } else {
                res.json({
                    success: true,
                    message: 'User retrieved successfully',
                    data: user
                });
            }
        } catch (error) {
            next(error);
        }
    }


    async create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body);
            const user: UserAttributes = req.body;
            const userCreated = await UsersServices.create(user);
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: userCreated
            });
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user: UserAttributes = req.body;
            const userUpdated = await UsersServices.update(parseInt(id), user);
            if (!userUpdated) {
                res.status(404).json({
                    success: false,
                    message: 'User not found',
                    data: {}
                });
            } else {
                res.json({
                    success: true,
                    message: 'User updated successfully',
                    data: userUpdated
                });
            }
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const userDeleted = await UsersServices.delete(parseInt(id));
            if (!userDeleted) {
                res.status(404).json({
                    success: false,
                    message: 'User not found',
                    data: {}
                });
            } else {
                res.json({
                    success: true,
                    message: 'User deleted successfully',
                    data: userDeleted
                });
            }
        } catch (error) {
            next(error);
        }
    }
}

export default new UsersController();