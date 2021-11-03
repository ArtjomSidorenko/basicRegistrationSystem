const config = {
    dev: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'basic_registration_system'
    },
    prod: {
        host: process.env.CLEARDB_DATABASE_HOST,
        port: '3306',
        user: process.env.CLEARDB_DATABASE_USERNAME,
        password: process.env.CLEARDB_DATABASE_PASSWORD,
        database: process.env.CLEARDB_DATABASE_NAME
    }
};


module.exports = config;