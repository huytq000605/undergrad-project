import 'dotenv/config';
import express from "express";
import { mqttClient, receiveTopic, sendTopic } from "./mqtt.js";
import client from "knex";
import cors from "cors";

const app = express();
const ENV = process.env
const port = 4000;

export const knex = client({
    client: "mysql",
    connection: {
        host: ENV["DB_HOST"] || "localhost",
        port: ENV["DB_PORT"] || 3306,
        user: ENV["DB_USER"],
        password: ENV["DB_PASSWORD"],
        database: ENV["DB_NAME"] || "undergrad",
    },
    migrations: {
        tableName: "migrations",
    },
});

// Write migration
await knex("chi_so_pha_a").select(["dong_dien", "dien_ap"])

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/pha-a', async function (req, res) {
    // await knex('chi_so_pha_a').insert({"id":1,"dong_dien":1,"cong_suat_dieu_khien":10,"cos_alpha":20,"cong_suat_hieu_dung":30,"cong_suat_phan_khang":40,"dien_ap":2})
    const data = await knex("chi_so_pha_a").orderBy("created_at", "desc").first();
    res.end(JSON.stringify(data));
})

app.get('/pha-b', function (req, res) {
    res.end(JSON.stringify({ a: 1 }));
})

app.get('/pha-c', function (req, res) {
    res.end(JSON.stringify({ a: 1 }));
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

export default app