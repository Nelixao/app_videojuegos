import { Sequelize } from "sequelize";

import videojuego from './videojuego.js';
import plataforma from './plataforma.js';
import videojuego_plataformas from './videojuego_plataforma.js';

plataforma.hasMany(videojuego_plataformas, { foreignKey: "id_plataforma" });
videojuego_plataformas.belongsTo(plataforma, { foreignKey: "id_plataforma" });

videojuego.hasMany(videojuego_plataformas, { foreignKey: "id_videojuego" });
videojuego_plataformas.belongsTo(videojuego, { foreignKey: "id_videojuego" });

export {videojuego, plataforma, videojuego_plataformas}