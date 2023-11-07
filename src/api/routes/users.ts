import {Router} from 'express';
import UsersController from '../controllers/users';

const router = Router();

router.route('/')
    .get(UsersController.findAll)
    .post(UsersController.create);

router.route('/:id')
    .get(UsersController.findOne)
    .put(UsersController.update)
    .delete(UsersController.delete);

export default router;