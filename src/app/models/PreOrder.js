import Sequelize, { Model } from 'sequelize';

class PreOrder extends Model {
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
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, {
      foreignKey: 'company_id',
      as: 'company',
    });
  }
}

export default PreOrder;
