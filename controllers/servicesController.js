import fs from "fs/promises"; // Import del módulo de promesas

export async function getServices(req, res) {
  try {
    const data = await fs.readFile("./data/services.json", "utf-8"); // Se lee el archivo de servicios

    const services = JSON.parse(data); // Convertir el JSON en objeto JavaScript

    res.json(services); // Se envia el objeto JSON como response
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener los servicios" }); // Si ocurre un error al intentar parsear el JSON, se envia una respuesta de error 500.
  }
}

export async function getServiceById(req, res) {
  try {
    const { id } = req.params; // Se obtiene el ID del servicio desde los parámetros de la ruta

    const data = await fs.readFile("./data/services.json", "utf-8"); // Se lee el archivo de servicios

    const services = JSON.parse(data); // Convertir el JSON en objeto JavaScript

    const service = services.find((s) => s.id === parseInt(id)); // Se busca el servicio con el ID especificado

    if (!service) {
      return res.status(404).json({ msg: "Servicio no encontrado" }); // Si no se encuentra el servicio, se envia una respuesta de error 404
    }

    res.json(service); // Se envia el servicio encontrado como `response`
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener el servicio" }); // Si ocurre un error al intentar parsear el JSON, se envia una respuesta de error 500.
  }
}

export async function getSubserviceById(req, res) {
  try {
    const { id, subId } = req.params; // Se obtiene el ID del servicio y del subservicio desde los parámetros de la ruta

    const data = await fs.readFile("./data/services.json", "utf-8"); // Se lee el archivo de servicios

    const services = JSON.parse(data); // Convertir el JSON en objeto JavaScript

    const service = services.find((s) => s.id === parseInt(id)); // Se busca el servicio con el ID especificado

    if (!service) {
      return res.status(404).json({ msg: "Servicio no encontrado" }); // Si no se encuentra el servicio, se envia una respuesta de error 404
    }

    const subservice = service.subservicios.find(
      (s) => s.id === parseInt(subId),
    ); // Se busca el subservicio con el ID especificado

    if (!subservice) {
      return res.status(404).json({ msg: "Subservicio no encontrado" }); // Si no se encuentra el subservicio, se envia una respuesta de error 404
    }

    res.json(subservice); // Se envia el subservicio encontrado como response
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener el subservicio" }); // Si ocurre un error al intentar parsear el JSON, se envia una respuesta de error 500.
  }
}
