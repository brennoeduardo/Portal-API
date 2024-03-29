import {Router} from 'express';
import UsersController from '../controllers/users';
import AuthUser from '../middlewares/auth';

const router = Router();

router.route('/')
    .get(UsersController.findAll)
    .post(UsersController.create);

router.route('/login')
    .post(AuthUser.isUser);

router.route('/routerAuth')
    .post(AuthUser.verifyToken, )

router.route('/:id')
    .get(UsersController.findOne)
    .put(UsersController.update)
    .delete(UsersController.delete);

export default router;