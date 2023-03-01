module.exports = {
    client: "mysql",
    connection: {
        host: '127.0.0.1',
        port: 3306,
        database: "compreLocal",
        user: "root",
        password: "Cl@udio.2016"
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}