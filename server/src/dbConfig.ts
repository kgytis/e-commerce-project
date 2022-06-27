import "dotenv/config";

const dbport: string | undefined = process.env.DBPORT;
const username: string | undefined = process.env.USER;
const host: string | undefined = process.env.HOST;
const pass: string | undefined = process.env.PASS;
const db: string | undefined = process.env.DB;

const mysqlConfig: object = {
  host: host,
  user: username,
  password: pass,
  database: db,
  port: dbport,
};

export default mysqlConfig;
