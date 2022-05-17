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

await knex.schema.createTable('chi_so', function (table) {
  table.increments();
	table.specificType('dong_dien', 'double precision')
	table.specificType('dien_ap', 'double precision')
  table.timestamps();
})

console.log("DONE")
process.exit(0)