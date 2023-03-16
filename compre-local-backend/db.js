async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://localhost:3306/compre-local");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
} 
