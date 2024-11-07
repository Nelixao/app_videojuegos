import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const videojuegos_plataformas = db.define(
  "videojuegos_plataformas",
  {
    id_videojuegos: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    id_plataformas: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    stock: {
      type: Sequelize.INTEGER,
    },
    costo: {
      type: Sequelize.INTEGER,
    },
    precio: {
      type: Sequelize.INTEGER,
    },
  },
  { timestamps: false }
);

export default videojuegos_plataformas;
