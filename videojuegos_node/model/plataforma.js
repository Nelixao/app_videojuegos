import { Sequelize } from "sequelize";
import db from "../config/db.js";



export const Plataforma = db.define(
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



export default Plataforma
