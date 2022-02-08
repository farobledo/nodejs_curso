var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ventas",
});

connection.connect(function (err) {
    if (!err) {
      console.log("Conexion establecida");
    } else {
      console.log("Conexion fallida");
    }
  });
module.exports=connection;
/*connection.query("SELECT * FROM  datos", function (err, resultados) {
  console.log("resultados");
});
*/
//connection.end();
