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
	  }).then(function () {
		const initData = {
			pha_a: 2000,
			pha_b: 3000,
			pha_c: 5000,
			total: 10000
		}
		return knex("so_luong_khach_hang").insert(
			[initData]
		);
	});
}

if (!await knex.schema.hasTable('nguong_canh_bao')) {
	await knex.schema.createTable('nguong_canh_bao', function (table) {
		table.increments();
        table.specificType('dien_ap_pha_a_cao', 'double precision')
		table.specificType('dien_ap_pha_b_cao', 'double precision')
        table.specificType('dien_ap_pha_c_cao', 'double precision')
		table.specificType('dien_ap_pha_a_thap', 'double precision')
		table.specificType('dien_ap_pha_b_thap', 'double precision')
		table.specificType('dien_ap_pha_c_thap', 'double precision')
		table.specificType('qua_dong_pha_a', 'double precision')
		table.specificType('qua_dong_pha_b', 'double precision')
		table.specificType('qua_dong_pha_c', 'double precision')
		table.specificType('tan_so_thap', 'double precision')
		table.specificType('tan_so_cao', 'double precision')
		table.specificType('do_am_thap', 'double precision')
		table.specificType('do_am_cao', 'double precision')
		table.specificType('nhiet_do_thap', 'double precision')
		table.specificType('nhiet_do_cao', 'double precision')
		table.specificType('cos_phi_pha_a_thap', 'double precision')
		table.specificType('cos_phi_pha_b_thap', 'double precision')
		table.specificType('cos_phi_pha_c_thap', 'double precision')
	  });
}

// if (!await knex.schema.hasTable('account')) {
// 	await knex.schema.createTable('account', function (table) {
// 		table.increments();
//         table.specificType('username', 'string')
// 		table.specificType('password', 'string')
//         table.specificType('full_name', 'string')
// 		table.specificType('academic_year', 'int')
// 		table.specificType('gender', 'boolean')
// 		table.specificType('id', 'string')
// 		table.specificType('info', 'text')
// 		table.specificType('role', 'int')
// 	  });
// }

console.log("DONE")
process.exit(0)