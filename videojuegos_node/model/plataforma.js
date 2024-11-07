import { Sequelize } from "sequelize";
import db from "../config/db.js";



export const plataforma = db.define(
    "plataformas",{
        id_plataforma: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: Sequelize.STRING,
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);



export default plataforma
