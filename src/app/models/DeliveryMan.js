import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class DeliveryMan extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        active: Sequelize.BOOLEAN,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (deliveryMan) => {
      if (deliveryMan.password) {
        deliveryMan.password_hash = await bcrypt.hash(deliveryMan.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default DeliveryMan;
