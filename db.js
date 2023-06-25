var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  database: "jsmysql",
  user: "root",
  password: "$Zx21114620"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT * FROM workers", function (error, results, fields) {
  if (error) throw error;
  console.log("the table data is ", results);
  console.log("error : ", error);
  console.log("fields : ", fields);
});
con.query(
  "SELECT name FROM workers where id = 5",
  function (error, results, fields) {
    if (error) throw error;
    console.log("the table data is ", results[0]);
    console.log(results[0].name);
});
