import { Sequelize } from "sequelize";

import Videojuego from './Videojuego.js';
import Plataforma from './Plataforma.js';
import Videojuego_plataformas from './Videojuego_plataforma.js';

Plataforma.hasMany(Videojuego_plataformas, { foreignKey: "id_plataforma" });
Videojuego_plataformas.belongsTo(Plataforma, { foreignKey: "id_plataforma" });

Videojuego.hasMany(Videojuego_plataformas, { foreignKey: "id_videojuego" });
Videojuego_plataformas.belongsTo(Videojuego, { foreignKey: "id_videojuego" });

export {Videojuego, Plataforma, Videojuego_plataformas}