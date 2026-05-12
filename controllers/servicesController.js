import fs from "fs/promises"; // Import del módulo de promesas

export async function getServicios(req, res) {
  try {
    const data = await fs.readFile("./data/servicios.json", "utf-8"); // Se lee el archivo de servicios

    const servicios = JSON.parse(data); // Convertir el JSON en objeto JavaScript

    res.json(servicios); // Se envia el objeto JSON como response
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener los servicios" });
    // Si ocurre un error al intentar parsear el JSON, se envia una respuesta de error.
  }
}

export async function getServicioById(req, res) {
  try {
    const { id } = req.params; // Se obtiene el ID del servicio desde los parámetros de la ruta

    const data = await fs.readFile("./data/servicios.json", "utf-8"); // Se lee el archivo de servicios

    const servicios = JSON.parse(data); // Convertir el JSON en objeto JavaScript

    const servicio = servicios.find((s) => s.id === parseInt(id)); // Se busca el servicio con el ID especificado

    if (!servicio) {
      return res.status(404).json({ msg: "Servicio no encontrado" }); // Si no se encuentra el servicio, se envia una respuesta de error 404
    }

    res.json(servicio); // Se envia el servicio encontrado como response
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener el servicio" }); // Si ocurre un error al intentar parsear el JSON, se envia una respuesta de error.
  }
}
