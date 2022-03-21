import { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../database/db";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();

  const id = req.query.id  



  const allEntris = await db.getAll();
  const length = allEntris.length

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ data: id }));
};

export default allAvos;