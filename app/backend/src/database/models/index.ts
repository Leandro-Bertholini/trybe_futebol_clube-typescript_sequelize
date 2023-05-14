import { Sequelize } from 'sequelize';
import * as config from '../config/database';

const sequelize = new Sequelize(config) // criada instancia de sequelize baseada nas configuraçõs do database com a tipagem

export default sequelize;
