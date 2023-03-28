const MySql = require('sync-mysql');
//const mysql = require('mysql2');

class Database {
    constructor() {
        // this.connection = mysql.createConnection({
        //     host: 'localhost',
        //     user: 'root',
        //     database: 'compre-local'
        // });

        this.connection = new MySql({
            host: 'localhost',
            database: 'back-compre-local',
            user: 'root'
            
        });
    }

    consulta(query) {
        return  this.connection.query(query);
    }
}



module.exports = { singleton: new Database() }