import mysql from "mysql2/promise";
import mysqlConfig from "../../dbConfig.js";

const allItems = async (req: any, res: any): Promise<void> => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const sql: string = `
        SELECT *
        FROM item
        `;
    const [data]: object[] = await con.query(sql);
    await con.end();
    res.send(data);
  } catch (err) {
    res.send({ err: err });
  }
};

const getItemByID = async (req: any, res: any): Promise<void> => {
  try {
    const itemId: string = req.params.id;
    const con = await mysql.createConnection(mysqlConfig);
    const sql: string = `
          SELECT *
          FROM item
          WHERE id = ?
          `;
    const [data]: object[] = await con.query(sql, itemId);
    await con.end();
    res.send(data);
  } catch (err) {
    res.send({ err: err });
  }
};

export { allItems, getItemByID };
