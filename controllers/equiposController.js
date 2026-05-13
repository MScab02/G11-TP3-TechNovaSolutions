import fs from "fs";

export const getEquipos = (req, res) => {
  const data = JSON.parse(
    fs.readFileSync("./data/equipos.json", "utf-8")
  );

  res.json(data);
};