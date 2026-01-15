// src/routes/user.routes.ts
import { Router } from 'express';
import { UsersCtrl } from './ctrl.js';

const router = Router();
const ctrl = new UsersCtrl();

router.post('/', ctrl.registerUser.bind(ctrl));
router.get('/', ctrl.getUsers.bind(ctrl));
router.get('/:id', ctrl.getUser.bind(ctrl));
router.put('/:id', ctrl.updateUser.bind(ctrl));
router.delete('/:id', ctrl.deleteUser.bind(ctrl));

export default router;
