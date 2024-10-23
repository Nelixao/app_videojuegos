import {Sequelize} from "sequelize";
import db from "../config/db.js";

export const videojuegos = db.define(
    "videojuegos", {
        data_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        consola: {
            type: Sequelize.STRING,
        },
        titulo: {
            type: Sequelize.STRING,
        },
        precio: {
            type: Sequelize.STRING,
        },
        imagen: {
            type: Sequelize.STRING,
        },
        video_link: {
            type: Sequelize.STRING,
        }
    },
    {timestamps: false}
)

export default videojuegos
