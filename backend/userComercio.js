import { Sequelize } from 'sequelize';

import sequelize from './database';

const User = sequelize.define('usersComercio', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   name: {
      type: Sequelize.STRING,
   },
   cnpj: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   cpf: {
    type: Sequelize.INTEGER,
    allowNull: false,
 },
 rj: {
    type: Sequelize.INTEGER,
    allowNull: false,
 },
});

export default User;