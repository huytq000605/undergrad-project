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
    try {
        const data = await knex("chi_so_pha_a")
            .orderBy("created_at", "desc")
            .first();
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(422).end(error.message);
    }
});

app.get("/pha-b", async (req, res) => {
    try {
        const data = await knex("chi_so_pha_b")
            .orderBy("created_at", "desc")
            .first();
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(422).end(error.message);
    }
});

app.get("/pha-c", async (req, res) => {
    try {
        const data = await knex("chi_so_pha_c")
            .orderBy("created_at", "desc")
            .first();
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(422).end(error.message);
    }
});

app.get("/3-pha", async (req, res) => {
    try {
        const [pha_a, pha_b, pha_c] = await Promise.all([
            knex("chi_so_pha_a").orderBy("created_at", "desc").first(),
            knex("chi_so_pha_b").orderBy("created_at", "desc").first(),
            knex("chi_so_pha_c").orderBy("created_at", "desc").first(),
        ]);
        res.end(
            JSON.stringify({
                pha_a: pha_a?.dien_ap,
                pha_b: pha_b?.dien_ap,
                pha_c: pha_c?.dien_ap,
                tan_so: "50",
            })
        );
    } catch (error) {
        res.status(422).end(error.message);
    }
});

app.post("/settings/waring", async (req, res) => {
    try {
        const {
            dien_ap_pha_a_cao,
            dien_ap_pha_b_cao,
            dien_ap_pha_c_cao,
            dien_ap_pha_a_thap,
            dien_ap_pha_b_thap,
            dien_ap_pha_c_thap,
            qua_dong_pha_a,
            qua_dong_pha_b,
            qua_dong_pha_c,
            tan_so_thap,
            tan_so_cao,
            do_am_thap,
            do_am_cao,
            nhiet_do_thap,
            nhiet_do_cao,
            cos_phi_pha_a_thap,
            cos_phi_pha_b_thap,
            cos_phi_pha_c_thap
        } = req.body;

        for (const [key, value] of Object.entries(req.body)) {
            if (!value) {
                delete req.body[key];
            } else {
                req.body[key] = Number(value);
            }
        }

        const data = await knex("nguong_canh_bao")
        .orderBy("id", "desc")
        .first();
        if (data?.id) {
            knex('nguong_canh_bao').update({...req.body}).where({id: data?.id})
                .then(()=>{
                    console.log("updated to nguong_canh_bao where id: ", data.id);
                });
        } else {
            knex('nguong_canh_bao').insert({...req.body})
                .then(()=>{
                    console.log("updated to nguong_canh_bao where id: ", data.id);
                });
        }
        res.status(200).end();
    } catch (error) {
        res.status(422).end(error.message);
    }
})

app.get("/waring-threshold", async (req, res) => {
    try {
        const data = await knex("nguong_canh_bao")
            .orderBy("id", "desc")
            .first();
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(422).end(error.message);
    }
});

app.get("/3-pha/graph", async (req, res) => {
    try {
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
    } catch (error) {
        res.status(422).end(error.message);
    }
});

app.get("/warning", async (req, res) => {
    try {
        res.json({
            data: new Array(12).fill(0).map(() => {
                if(Math.random()) {
                    return true
                } else {
                    return false
                }
            })
        })
    } catch (error) {
        res.status(422).end(error.message);
    }
});

app.get("/do-tin-cay", async (req, res) => {
    try {
        const time = new Date();
        const {
            pha_a: khachHangPhaA,
            pha_b: khachHangPhaB,
            pha_c: khachHangPhaC,
            total: tongSoKhachHang
        } = await knex("so_luong_khach_hang")
            .orderBy("id", "desc")
            .first();
        const data = await knex("thong_so_mat_dien")
            .where({ year: time.getFullYear() })
            .havingNotNull('end')
            .orderBy("start", "asc");
        const result = [];
        for (let month = 1; month <= 12; month++) {
            let saidi = 0, saifi = 0, maifi = 0, khachHangMatDien = 0;
            const monthRecords = data.filter(record => record.month == month);
            monthRecords.forEach(record => {
                switch (record.pha) {
                    case 'A':
                        khachHangMatDien = khachHangPhaA;
                        break;
                    case 'B':
                        khachHangMatDien = khachHangPhaB;
                        break;
                    case 'C':
                        khachHangMatDien = khachHangPhaC;
                        break;
                }
                if (record.minutes < 5) {
                    maifi += khachHangMatDien / tongSoKhachHang;
                } else {
                    saifi += khachHangMatDien / tongSoKhachHang;
                    saidi += (khachHangMatDien * record.minutes) / tongSoKhachHang;
                }
            });
            result.push({
                month,
                saidi: saidi.toFixed(3),
                saifi: saifi.toFixed(3),
                maifi: maifi.toFixed(3),
            });
        }
        res.json({
            data: result,
        });
    } catch (error) {
        res.status(422).end(error.message);
    }
});

app.get("/moi-truong", async (req, res) => {
    try {
        const data = await knex("thong_so_moi_truong")
            .orderBy("created_at", "desc")
            .first();
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(422).end(error.message);
    }
});


app.get("/thong-so-tieu-thu-3-pha", async (req, res) => {
    try {
        const timeStamp = 10; // 10s
        const [pha_a, pha_b, pha_c] = await Promise.all([
            knex("chi_so_pha_a").orderBy("created_at", "desc").first(),
            knex("chi_so_pha_b").orderBy("created_at", "desc").first(),
            knex("chi_so_pha_c").orderBy("created_at", "desc").first(),
        ]);
        const dienNang = ((pha_a.cong_suat_hieu_dung + pha_b.cong_suat_hieu_dung + pha_c.cong_suat_hieu_dung) * (timeStamp / 3600)).toFixed(3);
        const phanKhang = (pha_a.cong_suat_phan_khang + pha_b.cong_suat_phan_khang + pha_c.cong_suat_phan_khang).toFixed(3);
        const hieuDung = (pha_a.cong_suat_hieu_dung + pha_b.cong_suat_hieu_dung + pha_c.cong_suat_hieu_dung).toFixed(3);
        const bieuKienTong = Math.sqrt(phanKhang * phanKhang + hieuDung * hieuDung).toFixed(3);
        res.end(
            JSON.stringify({
                dien_nang_tieu_thu: dienNang,
                cong_suat_bieu_kien_tong: bieuKienTong,
                cong_suat_hieu_dung_tong: hieuDung,
                cong_suat_phan_khang_tong: phanKhang
            })
        );
    } catch (error) {
        res.status(422).end(error.message);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
