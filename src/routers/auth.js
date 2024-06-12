import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { loginUserShema, registerUserShema } from '../validation/auth.js';
import {
  loginUserController,
  registerUsersController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserShema),
  ctrlWrapper(registerUsersController),
);
router.post(
  '/login',
  validateBody(loginUserShema),
  ctrlWrapper(loginUserController),
);

export default router;
