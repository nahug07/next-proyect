import { IncomingMessage, ServerResponse } from "http";
import DB from "../../../database/db";

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB();
  const allEntris = await db.getAll();
  const length = allEntris.length

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ data: allEntris, length }));
};

export default allAvos;
