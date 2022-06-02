import 'dotenv/config';
import client from "knex";

const ENV = process.env

const knexWithOutDB = client({
	client: "mysql",
	connection: {
			host: ENV["DB_HOST"] || "localhost",
			port: ENV["DB_PORT"] || 3306,
			user: ENV["DB_USER"],
			password: ENV["DB_PASSWORD"],
	},
	migrations: {
			tableName: "migrations",
	},
});

await knexWithOutDB.raw(`CREATE DATABASE IF NOT EXISTS ${ENV["DB_NAME"] || "undergrad"}`)

const knex = client({
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

await knex.schema.createTable('chi_so_pha_a', function (table) {
  table.increments();
	table.specificType('dong_dien', 'double precision')
	table.specificType('cong_suat_dieu_khien', 'double precision')
	table.specificType('cos_phi', 'double precision')
	table.specificType('cong_suat_hieu_dung', 'double precision')
	table.specificType('cong_suat_phan_khang', 'double precision')
	table.specificType('dien_ap', 'double precision')
	table.timestamps(true, true)
})

await knex.schema.createTable('chi_so_pha_b', function (table) {
  table.increments();
	table.specificType('dong_dien', 'double precision')
	table.specificType('cong_suat_dieu_khien', 'double precision')
	table.specificType('cos_phi', 'double precision')
	table.specificType('cong_suat_hieu_dung', 'double precision')
	table.specificType('cong_suat_phan_khang', 'double precision')
	table.specificType('dien_ap', 'double precision')
	table.timestamps(true, true)
})

await knex.schema.createTable('chi_so_pha_c', function (table) {
  table.increments();
	table.specificType('dong_dien', 'double precision')
	table.specificType('cong_suat_dieu_khien', 'double precision')
	table.specificType('cos_phi', 'double precision')
	table.specificType('cong_suat_hieu_dung', 'double precision')
	table.specificType('cong_suat_phan_khang', 'double precision')
	table.specificType('dien_ap', 'double precision')
	table.timestamps(true, true)
})

await knex.schema.createTable('dien_nang', function (table) {
  table.increments();
	table.specificType('dien_nang_tieu_thu', 'double precision')
	table.specificType('cong_suat_bieu_kien', 'double precision')
	table.specificType('cong_suat_bieu_kien_tong', 'double precision')
	table.specificType('cong_suat_phan_khang', 'double precision')
	table.specificType('cong_suat_phan_khang_tong', 'double precision')
	table.specificType('cong_suat_hieu_dung_tong', 'double precision')
	table.specificType('tan_so', 'double precision')
	table.timestamps(true, true)
})

await knex.schema.createTable('do_tin_cay', function (table) {
  table.increments();
	table.specificType('saidi', 'double precision')
	table.specificType('saifi', 'double precision')
	table.specificType('maifi', 'double precision')
	table.timestamps(true, true)
})

console.log("DONE")
process.exit(0)