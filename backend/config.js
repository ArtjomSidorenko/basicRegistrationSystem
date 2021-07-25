const env = process.env;

const config = {
    db: { /* don't expose password or any sensitive info, done only for demo */
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'basic_registration_system'
    }
};


module.exports = config;