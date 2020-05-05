require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'ec2-18-233-32-61.compute-1.amazonaws.com',
  username: 'wdbxmhqqregemb',
  password: 'b9f652e4fd8e28a9e69f32c0770faf30e3aa3f271d3d2b90e841eb0ade54680a',
  database: 'da98hc8iecra3d',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
