import mysql from "mysql2/promise";
import mysqlConfig from "../../dbConfig.js";

const allTypes = async (req: any, res: any): Promise<void> => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const sql: string = `
        SELECT *
        FROM type
        `;
    const [data]: object[] = await con.query(sql);
    await con.end();
    res.send(data);
  } catch (err) {
    res.send({ err: err });
  }
};

const getTypeByID = async (req: any, res: any): Promise<void> => {
  try {
    const typeId: string = req.params.id;
    const con = await mysql.createConnection(mysqlConfig);
    const sql: string = `
          SELECT *
          FROM type
          WHERE id = ?
          `;
    const [data]: object[] = await con.query(sql, typeId);
    await con.end();
    res.send(data);
  } catch (err) {
    res.send({ err: err });
  }
};

export { allTypes, getTypeByID };
