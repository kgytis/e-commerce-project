import mysql from "mysql2/promise";
import mysqlConfig from "../../dbConfig.js";

const allMedia = async (req: any, res: any): Promise<void> => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const sql: string = `
        SELECT *
        FROM item_media
        INNER JOIN item_images AS img
        ON item_media.img_id = img.id
        `;
    const [data]: object[] = await con.query(sql);
    await con.end();
    res.send(data);
  } catch (err) {
    res.send({ err: err });
  }
};

const getMediaByID = async (req: any, res: any): Promise<void> => {
  try {
    const mediaId: string = req.params.id;
    const con = await mysql.createConnection(mysqlConfig);
    const sql: string = `
    SELECT *
    FROM item_media
    INNER JOIN item_images AS img
    ON item_media.img_id = img.id
    WHERE id = ?
    `;
    const [data]: object[] = await con.query(sql, mediaId);
    await con.end();
    res.send(data);
  } catch (err) {
    res.send({ err: err });
  }
};

export { allMedia, getMediaByID };
