import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
console.log(config);
export const sequelize = new Sequelize(
  // "postgres://postgres:postgres@postgres.cdsx9nzb8wez.us-east-1.rds.amazonaws.com:5432/postgres"

  {
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port,
  dialect: "postgres",
  storage: ":memory:",
}

);
