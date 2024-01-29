import Sequelize from 'sequelize';
import { dataBaseUrl } from '../config';

const sequelize = new Sequelize(dataBaseUrl, {
  define: {
    freezeTableName: true,
  },
});

export default sequelize;