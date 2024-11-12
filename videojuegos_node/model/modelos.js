import { Sequelize } from "sequelize";

import Videojuego from './videojuego.js';
import Plataforma from './plataforma.js';
import Videojuego_plataformas from './videojuego_plataforma.js';

Plataforma.hasMany(Videojuego_plataformas, { foreignKey: "id_plataforma" });
Videojuego_plataformas.belongsTo(Plataforma, { foreignKey: "id_plataforma" });

Videojuego.hasMany(Videojuego_plataformas, { foreignKey: "id_videojuego" });
Videojuego_plataformas.belongsTo(Videojuego, { foreignKey: "id_videojuego" });

export {Videojuego, Plataforma, Videojuego_plataformas}