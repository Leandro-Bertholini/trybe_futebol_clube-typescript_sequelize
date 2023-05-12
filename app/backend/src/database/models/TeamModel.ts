import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

export default class Team extends Model {
  id!: number;
  teamName!: string;
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
    sequelize: db,
    modelName: 'teams',
  },
);
