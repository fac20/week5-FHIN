const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.env.DB_URL;
console.log(connectionString);

if (!connectionString) {
    console.error()
  };

const db = new pg.Pool({ connectionString });

db.query("SELECT * FROM users").then((result) => console.log(result));

module.exports = db;