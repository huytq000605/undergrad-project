import "dotenv/config";
import express from "express";
import { mqttClient, receiveTopic, sendTopic } from "./mqtt.js";
import client from "knex";
import cors from "cors";

const app = express();
const ENV = process.env;
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
await knex("chi_so_pha_a").select(["dong_dien", "dien_ap"]);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/pha-a", async (req, res) => {
    const data = await knex("chi_so_pha_a")
        .orderBy("created_at", "desc")
        .first();
    res.end(JSON.stringify(data));
});

app.get("/pha-b", async (req, res) => {
    const data = await knex("chi_so_pha_b")
        .orderBy("created_at", "desc")
        .first();
    res.end(JSON.stringify(data));
});

app.get("/pha-c", async (req, res) => {
    const data = await knex("chi_so_pha_c")
        .orderBy("created_at", "desc")
        .first();
    res.end(JSON.stringify(data));
});

app.get("/3-pha", async (req, res) => {
    const [pha_a, pha_b, pha_c] = await Promise.all([
        knex("chi_so_pha_a").orderBy("created_at", "desc").first(),
        knex("chi_so_pha_b").orderBy("created_at", "desc").first(),
        knex("chi_so_pha_c").orderBy("created_at", "desc").first(),
    ]);
    res.end(
        JSON.stringify({
            pha_a: pha_a.dien_ap,
            pha_b: pha_b.dien_ap,
            pha_c: pha_c.dien_ap,
            tan_so: "50",
        })
    );
});

app.get("/3-pha/graph", async (req, res) => {
    const [pha_a, pha_b, pha_c, moi_truong] = await Promise.all([
        knex("chi_so_pha_a").orderBy("id", "desc").limit(30),
        knex("chi_so_pha_b").orderBy("id", "desc").limit(30),
        knex("chi_so_pha_c").orderBy("id", "desc").limit(30),
        knex("thong_so_moi_truong").orderBy("id", "desc").limit(30),
    ]);
    pha_a.reverse();
    pha_b.reverse();
    pha_c.reverse();
    moi_truong.reverse();
    return res.json({
        pha_a: {
            dong_dien: pha_a.map((element) => element.dong_dien),
            dien_ap: pha_a.map((element) => element.dien_ap),
            time: pha_a.map((element) => element.created_at),
        },
        pha_b: {
            dong_dien: pha_b.map((element) => element.dong_dien),
            dien_ap: pha_b.map((element) => element.dien_ap),
            time: pha_b.map((element) => element.created_at),
        },
        pha_c: {
            dong_dien: pha_c.map((element) => element.dong_dien),
            dien_ap: pha_c.map((element) => element.dien_ap),
            time: pha_c.map((element) => element.created_at),
        },
        moi_truong: {
            nhiet_do: moi_truong.map((element) => element.nhiet_do),
            do_am: moi_truong.map((element) => element.do_am),
            time: moi_truong.map((element) => element.created_at),
        }
    });
});

app.get("warning", async (req, res) => {
  res.json({
    data: new Array(12).fill(0).map(() => {
      if(Math.random()) {
        return true
      } else {
        return false
      }
    })
  })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
