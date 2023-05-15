import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

export default class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    teamName: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
    sequelize: db, // inicializa a instância com as configurações da DB
    modelName: 'teams',
  },
);
