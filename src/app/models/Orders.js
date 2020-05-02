import Sequelize, { Model } from 'sequelize';

class Orders extends Model {
  static init(sequelize) {
    super.init(
      {
        name_product: Sequelize.STRING,
        description_product: Sequelize.STRING,
        phone_client: Sequelize.INTEGER,
        zip_code_client: Sequelize.STRING,
        address_client: Sequelize.STRING,
        number_client: Sequelize.STRING,
        complement_client: Sequelize.STRING,
        state_client: Sequelize.STRING,
        city_client: Sequelize.STRING,
        district_client: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Orders;
