const Pool = require("pg").Pool;

const pool = new Pool({
  user: "",
  host: "",
  database: "",
  password: "",
  port: 5432,
});

const runQuery = (query, queyData = []) => {
  pool.query(query, queyData, (error, results) => {
    if (error) throw error;
    return results.rows;
  });
};

module.exports = { runQuery };
