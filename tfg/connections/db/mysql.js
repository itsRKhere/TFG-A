// Import required modules
const mysql = require('mysql2/promise');
const { mySqlConfig } = require('../../config.json');

const mysqlHost = mySqlConfig.host;
const mysqlUser = mySqlConfig.mysql_user;
const mysqlPassword = mySqlConfig.mysql_password;
const mysqlDb = mySqlConfig.mysql_db;
const mysSqlPort = mySqlConfig.port

// Connection options
const options = {
    connectionLimit: mySqlConfig.connection_pool,
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDb,
    port: mysSqlPort,
    multipleStatements: true
};

const pool = mysql.createPool(options);

// Standard Errors
const CONNECTION_LOST = 'PROTOCOL_CONNECTION_LOST';
const EPIPE = 'EPIPE';

// Mysql Pool Wrapper - Handling connection errors
const wrapper = {};

wrapper.query = (queryString, queryArgs) => {
    return pool.query(queryString, queryArgs).catch((err) => {
        // handle connection lost and fd errors
        if (err.code === CONNECTION_LOST || err.code === EPIPE) {
            console.log({ err }, 'PROTOCOL_CONNECTION_LOST|EPIPE - Retrying');
            return wrapper.query(queryString, queryArgs);
        }
        console.log({ err, queryString }, 'DB_QUERY_FAILED_WITHOUT_RETRY');
        return Promise.reject(err);
    });
};

// Escape Connection
wrapper.escape = (input) => pool.escape(input);
wrapper.getConnection = () => pool.getConnection();

module.exports = wrapper;
