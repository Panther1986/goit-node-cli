import { registerUser } from '../services/auth';

export const registerUsersController = async (req, res) => {
  const user = await registerUser(req.body);

  res.json({
    status: 200,
    message: 'Successfully registered a user!',
    data: user,
  });
};
