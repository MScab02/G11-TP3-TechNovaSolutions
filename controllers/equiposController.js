export const getServices= (req, res) => {
    res.json([
        {
            id: 1,
            nombre: "frontend"
        },
        {
            id: 2, 
            nombre: "backend"
        }
    ]);
};

export const getServiceById= (req, res) => {
    const id = req.params.id;
    res.json({
        id: id,
        nombre: `Servicio${id}`
    });
};

export const getSubserviceById= (req, res) => {
    const id = req.params.id;
    res.json({
        id: id,
        nombre: `Subservicio${id}`
    });
};