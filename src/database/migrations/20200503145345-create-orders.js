module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      courier_id: {
        type: Sequelize.INTEGER,
        references: { model: 'couriers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: { model: 'companies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      name_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_client: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      zip_code_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complement_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      district_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('orders');
  },
};
