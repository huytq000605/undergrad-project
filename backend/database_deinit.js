import 'dotenv/config';
import client from "knex";

const ENV = process.env

const knex = client({
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

await knex.raw(`DROP DATABASE IF EXISTS ${ENV["DB_NAME"] || "undergrad"} `)

console.log("DONE")
process.exit(0)