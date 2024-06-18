import { Router } from 'express';
import {
  getStudentsController,
  getStudentByIdController,
  creatrStedetnController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/students.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const router = Router();
router.use(authenticate);
router.get('/', checkRoles(ROLES.TEACHER), ctrlWrapper(getStudentsController));

router.get(
  '/students/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  ctrlWrapper(getStudentByIdController),
);

router.post(
  '/students',
  checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  ctrlWrapper(creatrStedetnController),
);

router.delete(
  '/students/:studentId',
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(deleteStudentController),
);

router.put(
  '/students/:studentId',
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  'students/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

export default router;
