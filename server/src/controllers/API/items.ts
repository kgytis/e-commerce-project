import mysql from "mysql2/promise";
import mysqlConfig from "../../dbConfig.js";

const allItems = async (req: any, res: any) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const sql = `
        SELECT *
        FROM item
        `;
    const [data] = await con.query(sql);
    await con.end();
    res.send(data);
  } catch (err) {
    res.send({ err: err });
  }
};

export { allItems };
