import {Sequelize} from "sequelize";
import db from "../config/db.js";

export const videojuego_plataforma = db.define(
    "videojuego_plataforma", {
        id_videojuego: {
            type: Sequelize.INTEGER,
        },
        id_plataforma: {
            type: Sequelize.INTEGER,
        },
        stock: {
            type: Sequelize.INTEGER,
        },
        costo: {
            type: Sequelize.INTEGER,
        },
        precio: {
            type: Sequelize.INTEGER,
        }
    },
    {timestamps: false}
)

export default videojuego_plataforma