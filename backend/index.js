import 'dotenv/config';
import express from "express";
import { mqttClient, receiveTopic, sendTopic } from "./mqtt.js";
import client from "knex";
import cors from "cors";

const app = express();
const ENV = process.env
const port = 3000;

export const knex = client({
    client: "mysql",
    connection: {
        host: ENV["DB_HOST"] || "localhost",
        port: ENV["DB_PORT"] || 3306,
        user: ENV["DB_USER"],
        password: ENV["DB_PASSWORD"]
    },
    migrations: {
        tableName: "migrations",
    },
});

// Write migration
console.log(await knex("data").select(["GPIO", "temperature"]))

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
