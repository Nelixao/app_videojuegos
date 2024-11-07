import {Sequelize} from "sequelize";
import db from "../config/db.js";



export const videojuego = db.define(
    "videojuegos", {
        id_videojuego: {
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
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    },
    
);



export default videojuego
