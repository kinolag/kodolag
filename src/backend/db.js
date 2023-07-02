// after installing it, import mongodb
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
// const url = 'mongodb://$[username]:$[password]@$[hostlist]/$[database]?authSource=$[authSource]';
// const url = 'mongodb://user:pass@localhost:27017/dbname?retryWrites=true';

require("dotenv").config();

// NODE_ENV set on start in package.json
const url =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL_PRD
    : process.env.DB_URL_DEV;
const dbName = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("?"));

// connect db function (imported into app.js)

module.exports = { connect };

function connect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      url,
      { useUnifiedTopology: true },
      function (err, client) {
        assert.equal(null, err);
        console.log("Connected succesfully to server");
        const dbo = client.db(dbName);
        resolve(dbo);
      }
    );
  });
}
