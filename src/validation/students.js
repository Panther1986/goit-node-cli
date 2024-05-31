import Joi from 'joi';

export const createStudentSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(10)
    .required()
    .message({ 'string base': 'Username should be a string' }),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(3).max(16).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  avgMark: Joi.number().min(2).max(12).required(),
  onDuty: Joi.boolean(),
});
