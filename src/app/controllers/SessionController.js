import jwt from 'jsonwebtoken';
import DeliveryMan from '../models/DeliveryMan';
import authConfig from '../../config/auth';

class SessionController {
  async storeDelivery(req, res) {
    const { email, password } = req.body;

    const user = await DeliveryMan.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;
    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async storeCompany(req, res) {
    const { login, password } = req.body;

    const user = await DeliveryMan.findOne({ where: { login } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, company } = user;
    return res.json({
      user: { id, company, login },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
