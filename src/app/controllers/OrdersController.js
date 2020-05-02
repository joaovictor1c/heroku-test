import Orders from '../models/Orders';

class OrdersController {
  async store(req, res) {
    const orderExists = await Orders.findOne({
      where: { email: req.body.email },
    });

    if (orderExists) {
      return res.status(400).json({ error: 'Order already exists' });
    }

    const { id, email, provider, name } = await Orders.create(req.body);
    return res.json({ id, name, email, provider });
  }

  async index(req, res) {
    return res.json({});
  }
}

export default new OrdersController();
