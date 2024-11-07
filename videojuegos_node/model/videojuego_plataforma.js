import {Sequelize} from "sequelize";
import db from "../config/db.js";

export const videojuego_plataformas = db.define(
    "videojuego_plataformas", {
        id_plataforma: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: "plataforma",
                key: "id_plataforma",
            },
        },
        id_videojuego: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: "videojuego",
                key: "id_videojuego",
            },
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
    {
        timestamps: false
    }
);

export default videojuego_plataformas