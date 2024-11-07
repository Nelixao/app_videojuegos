import db from "../config/db.js";
import videojuegos from "../model/videojuegos.js";
// Request -> Peticion Usuario (req)
// Resource -> Resultado de la Peticion (res)
// async function consulta(condicion, valores = []) {
//     let juegos = await db.query(
//         `SELECT videojuego.id_videojuego, videojuego.titulo, videojuego.imagen, videojuego.trailer, videojuego_plataforma.precio
//         FROM videojuego
//         INNER JOIN videojuego_plataforma ON videojuego.id_videojuego = videojuego_plataforma.id_videojuego
//         INNER JOIN plataforma ON videojuego_plataforma.id_plataforma = plataforma.id_plataforma
//         WHERE ${condicion};`,
//         {
//             replacements: valores,
//             model: videojuego,
//             mapToModel: true,
//         }
//     );

//     return juegos;
// }

async function consulta(condicion, valores = []) {
  let juegos = await Videojuegos.findAll({
    include: [
      {
        model: Plataforma,
        where: { nombre: valores[0] }, // Filtra por el nombre de la consola/plataforma
      },
    ],
    where: Sequelize.literal(condicion), // Puedes ajustar para evitar inyección SQL
  });

  return juegos;
}

const accionMostrarPredeterminados = async (req, res) => {
  const condicion = `videojuegos.id_videojuegos >= ? AND videojuegos.id_videojuegos < (? + 3)`;
  const valores = [req.params.id]; // Usa el valor de id de forma segura como parámetro

  try {
    const juegos = await consulta(condicion, [valores, valores]);
    res.json(juegos); // Devuelve los videojuegos en formato JSON
    console.log(juegos);
  } catch (error) {
    res.status(500).json({ error: "Error al cargar los videojuegos" });
  }
};

const accionMostrarJuegos = async (req, res) => {
  const condicion = `plataforma.nombre = ?`;
  const valores = [req.params.consola]; // Usa el valor de consola de forma segura como parámetro
  try {
    const juegos = await consulta(condicion, valores);
    res.json(juegos); // Devuelve los videojuegos en formato JSON
    console.log(juegos);
  } catch (error) {
    res.status(500).json({ error: "Error al cargar los videojuegos" });
  }
};

const inicio = async (req, res) => {
  res.render("inicio");
};

// Exportaciones de funciones
export { inicio, accionMostrarJuegos, accionMostrarPredeterminados };
