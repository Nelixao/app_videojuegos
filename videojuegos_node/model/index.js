import { Sequelize } from "sequelize";

import videojuego from './videojuego.js';
import plataforma from './plataforma.js';
import videojuego_plataforma from './videojuego_plataforma.js';

plataforma.belongsToMany(videojuego, { through: videojuego_plataforma });
videojuego.belongsToMany(plataforma, { through: videojuego_plataforma });

export {videojuego, plataforma, videojuego_plataforma}