import dotenv from "dotenv";

const config = {
  port: 5432,
  db: {
    client: "pg",
    connection: {
      user: "postgres",
      password: "Mbobo22Y",
      database: "accountingbase",
    },
  },
};
export default config;
