import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const plataformas = db.define(
  "plataformas",
  {
    id_plataformas: {
      type: Sequelize.INTEGER,
    },
    nombre: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

export default plataformas;
