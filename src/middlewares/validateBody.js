import createHttpErrors from 'http-errors';

export const validateBody = (shema) => async (req, res, next) => {
  try {
    await shema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const error = createHttpErrors(404, 'Bad request', {
      errors: err.details,
    });
    next(error);
  }
};
