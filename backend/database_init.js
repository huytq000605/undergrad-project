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

if (!await knex.schema.hasTable('chi_so_pha_a')) {
	await knex.schema.createTable('chi_so_pha_a', function (table) {
		table.increments();
		  table.specificType('dong_dien', 'double precision')
		  table.specificType('cong_suat_dieu_khien', 'double precision')
		  table.specificType('cos_phi', 'double precision')
		  table.specificType('cong_suat_hieu_dung', 'double precision')
		  table.specificType('cong_suat_phan_khang', 'double precision')
		  table.specificType('dien_ap', 'double precision')
		  table.timestamps(true, true)
	  });
}

if (!await knex.schema.hasTable('chi_so_pha_b')) {
	await knex.schema.createTable('chi_so_pha_b', function (table) {
		table.increments();
		  table.specificType('dong_dien', 'double precision')
		  table.specificType('cong_suat_dieu_khien', 'double precision')
		  table.specificType('cos_phi', 'double precision')
		  table.specificType('cong_suat_hieu_dung', 'double precision')
		  table.specificType('cong_suat_phan_khang', 'double precision')
		  table.specificType('dien_ap', 'double precision')
		  table.timestamps(true, true)
	  });
}

if (!await knex.schema.hasTable('chi_so_pha_c')) {
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
}

if (!await knex.schema.hasTable('dien_nang')) {
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
	  });
}

if (!await knex.schema.hasTable('do_tin_cay')) {
	await knex.schema.createTable('do_tin_cay', function (table) {
		table.increments();
		  table.specificType('saidi', 'double precision')
		  table.specificType('saifi', 'double precision')
		  table.specificType('maifi', 'double precision')
		  table.timestamps(true, true)
	  });
}

if (!await knex.schema.hasTable('thong_so_mat_dien')) {
	await knex.schema.createTable('thong_so_mat_dien', function (table) {
		table.increments();
		  table.timestamp('start')
		  table.timestamp('end')
		  table.integer('minutes')
		  table.integer('check_times').defaultTo(1)
		  table.integer('year')
		  table.integer('month')
		  table.integer('date')
		  table.string('pha', 1)
	  });
}

if (!await knex.schema.hasTable('thong_so_moi_truong')) {
	await knex.schema.createTable('thong_so_moi_truong', function (table) {
		table.increments();
		  table.specificType('nhiet_do', 'double precision')
		  table.specificType('do_am', 'double precision')
		  table.timestamps(true, true)
	  });
}

if (!await knex.schema.hasTable('so_luong_khach_hang')) {
	await knex.schema.createTable('so_luong_khach_hang', function (table) {
		table.increments();
			table.integer('pha_a')
			table.integer('pha_b')
			table.integer('pha_c')
			table.integer('total')
	  });
}

console.log("DONE")
process.exit(0)