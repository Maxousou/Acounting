import cors from "cors";
import express, { json } from "express";
import knex from "knex";
import { Model } from "objection";
import config from "./config.js";
import knexfile from "./knexfile.js";
import router from "./src/routes/route.js";

const app = express();
const db = knex(knexfile);

Model.knex(db);

app.use(json());
app.use(cors());

app.use(router);

// eslint-disable-next-line no-console
app.listen(config.port, () => console.log(`Listening on : ${config.port}`));
