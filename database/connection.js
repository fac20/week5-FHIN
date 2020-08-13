const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const dataBaseURL = process.env.DATABASE_URL;
console.log(dataBaseURL);

if (!dataBaseURL) {
    console.error()
  };

const db = new pg.Pool({ connectionString: dataBaseURL });

db.query("SELECT * FROM users").then((result) => console.log(result));

module.exports = db;