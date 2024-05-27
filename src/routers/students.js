import { Router } from 'express';
import {
  getStudentsController,
  getStudentByIdController,
  creatrStedetnController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudentsController));

router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

router.post('/students', ctrlWrapper(creatrStedetnController));

export default router;
