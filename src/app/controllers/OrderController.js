import Order from '../models/Order';
import Company from '../models/Company';

class OrderController {
  async store(req, res) {
    const {
      id,
      name_product,
      description_product,
      phone_client,
      zip_code_client,
      address_client,
      number_client,
      complement_client,
      state_client,
      city_client,
      district_client,
    } = req.body;

    const company = await Company.findOne({
      where: { id: req.userId },
    });

    if (!company) {
      return res
        .status(401)
        .json({ error: 'You can only create orders with company' });
    }

    const order = await Order.create({
      id,
      company_id: req.userId,
      name_product,
      description_product,
      phone_client,
      zip_code_client,
      address_client,
      number_client,
      complement_client,
      state_client,
      city_client,
      district_client,
    });

    return res.json({ order });
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const orders = await Order.findAll({
      where: { done: false },
      limit: 10,
      offset: (page - 1) * 10,
      attributes: [
        'id',
        'done',
        'courier_id',
        'name_product',
        'description_product',
        'phone_client',
        'zip_code_client',
        'address_client',
        'number_client',
        'complement_client',
        'state_client',
        'city_client',
        'district_client',
      ],
      include: [
        {
          model: Company,
          as: 'company',
          attributes: ['company', 'branch', 'phone'],
        },
      ],
    });
    return res.json(orders);
  }

  async uptade(req, res) {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    const { done, courier_id } = req.body;
    const updateOrder = await order.update({ done, courier_id });

    return res.json(updateOrder);
  }
}

export default new OrderController();
