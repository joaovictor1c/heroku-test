import PreOrder from '../models/PreOrder';
import Company from '../models/Company';

import NotificationDelivery from '../jobs/NotificationDelivery';
import Queue from '../../lib/Queue';

class PreOrderController {
  async store(req, res) {
    const { id } = req.body;

    const company = await Company.findOne({
      where: { id: req.userId },
    });

    if (!company) {
      return res
        .status(401)
        .json({ error: 'You can only create orders with company' });
    }

    const {
      name_product,
      description_product,
      phone,
      zip_code,
      address,
      number,
      complement,
      state,
      city,
      district,
    } = await PreOrder.create(req.body);

    await company.save();

    await Queue.add(NotificationDelivery.key, {
      company,
    });

    return res.json({
      id,
      name_product,
      description_product,
      phone,
      zip_code,
      address,
      number,
      complement,
      state,
      city,
      district,
    });
  }

  async index(req, res) {
    const order = await PreOrder.findOne({
      where: { deliveryman_id: req.userId },
      attributes: [
        'name_product',
        'description_product',
        'phone',
        'zip_code',
        'address',
        'number',
        'complement',
        'state',
        'city',
        'district',
      ],
      include: [
        {
          model: Company,
          as: 'provider',
          attributes: ['company', 'branch', 'phone'],
        },
      ],
    });
    return res.json(order);
  }
}

export default new PreOrderController();
