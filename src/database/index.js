import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import DeliveryMan from '../app/models/DeliveryMan';
import Company from '../app/models/Company';
import Order from '../app/models/Order';
import PreOrder from '../app/models/PreOrder';

const models = [Company, DeliveryMan, PreOrder, Order];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
