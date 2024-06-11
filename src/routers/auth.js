import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserShema } from '../validation/auth.js';
import { registerUsersController } from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserShema),
  ctrlWrapper(registerUsersController),
);

export default router;
