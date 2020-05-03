import { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.PreOrder, {
      foreignKey: 'pre_order_id',
      as: 'pre_order',
    });
    this.belongsTo(models.DeliveryMan, {
      foreignKey: 'delivery_man_id',
      as: 'delivery_man',
    });
  }
}

export default Order;
