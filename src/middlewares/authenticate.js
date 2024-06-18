import createHttpErrors from 'http-errors';
import { SessionCollection } from '../db/models/session.js';
import { UserCollection } from '../db/models/user.js';

export const authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    next(createHttpErrors(401, 'Please provide Authorization header'));
    return;
  }

  const bearer = authHeader.split(' ')[0];
  const token = authHeader.split(' ')[1];

  if (bearer !== 'Bearer' || !token) {
    next(createHttpErrors(401, 'Auth header should be of type Bearer'));
    return;
  }
  const session = await SessionCollection.findOne({
    accessToken: token,
  });

  if (!session) {
    next(createHttpErrors(401, 'Session not found'));
    return;
  }

  const isAccessTokenExpired =
    new Date() > new Date(session.accessTokenValidUntil);

  if (isAccessTokenExpired) {
    next(createHttpErrors(401, 'Access token expired'));
  }
  const user = await UserCollection.findById(session.userId);

  if (!user) {
    next(createHttpErrors(401));
    return;
  }
  req.user = user;

  next();
};
