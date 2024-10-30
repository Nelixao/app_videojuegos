import { Sequelize } from "sequelize";
import db from "../config/db.js";



export const plataforma = db.define(
    "plataforma",{
        id_plataforma: {
            type: Sequelize.INTEGER,
        },
        nombre: {
            type: Sequelize.STRING,
        }
    },
    {timestamps: false}
);



export default plataforma
