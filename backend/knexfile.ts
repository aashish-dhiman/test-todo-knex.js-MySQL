import { Knex } from "knex";

const config: Knex.Config = {
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "",
        database: "sample_todo",
    },
    migrations: {
        directory: "./migrations",
    },
    debug: true,
};

export default config;
