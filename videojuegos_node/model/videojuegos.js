import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const videojuegos = db.define(
  "videojuegos",
  {
    id_videojuegos: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: Sequelize.STRING,
    },
    imagen: {
      type: Sequelize.STRING,
    },
    trailer: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

export default videojuegos;
