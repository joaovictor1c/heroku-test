import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        company: Sequelize.STRING,
        branch: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        zip_code: Sequelize.STRING,
        address: Sequelize.STRING,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        district: Sequelize.STRING,
        login: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (company) => {
      if (company.password) {
        company.password_hash = await bcrypt.hash(company.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Company;
