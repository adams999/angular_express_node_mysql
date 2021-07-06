const modelTest = require("./model/Test"); //traemos nuestra conexion a la db
const DB = require("./config/dbconfig");
//Requerido en todos
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true })); //se usa para los post
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router); // creacion de ruta para las peticiones de la api

router.route("/test/getAll/:txtSearch?").get((req, response) => {
  let query = "SELECT * FROM test WHERE test_est = 1 ";
  if (req.params.txtSearch) {
    query += `AND test_name LIKE '%${req.params.txtSearch}%'`;
  }
  query += " ORDER BY test_name, test_edad ASC";
  DB.query(query, (err, data = new modelTest()) => {
    response.json(data);
  });
});

router.route("/test/:id").get((req, res) => {
  DB.query(
    `SELECT * FROM test WHERE test_id = ${req.params.id} AND test_est = 1`,
    (err, data = new modelTest()) => {
      res.json(data);
    }
  );
});

router.route("/test/insert").post((req, res) => {
  DB.query(
    `INSERT INTO test (test_name, test_edad, test_email, test_est) VALUES ('${req.body.test_name}', '${req.body.test_edad}', '${req.body.test_email}', 1)`,
    (err, data) => {
      if (err) {
        throw console.log(err);
      }
      res.json({ SUCCESS: "OK" });
    }
  );
});

router.route("/test/update/:id").put((req, res) => {
  DB.query(
    `UPDATE test SET test_name = '${req.body.test_name}', test_edad = '${req.body.test_edad}', test_email = '${req.body.test_email}', test_est = '${req.body.test_est}' WHERE test.test_id = ${req.params.id}`,
    (err, data) => {
      if (err) {
        throw console.log("ERROR", err, req.body);
      }
      res.json({ STATUS: "OK" });
    }
  );
});

router.route("/test/delete/:id").delete((req, res) => {
  DB.query(
    `UPDATE test SET test_est = 0 WHERE test_id = ${req.params.id} AND test_est <> 0`,
    (err, data) => {
      if (err) {
        throw console.log(err);
      }
      res.json({ STATUS: "OK" });
    }
  );
});

router.route("/getChartPie").get((req, res) => {
  DB.query(
    `SELECT count(*) as value, IF(test_est = 1,'Activos','Inactivos') as name FROM test GROUP BY test_est;`,
    (err, data = new modelTest()) => {
      res.json(data);
    }
  );
});

router.route("/getChartBar").get((req, res) => {
  DB.query(
    `SELECT count(*) as value, CONCAT(test_edad,' Años') as name FROM test GROUP BY test_edad;`,
    (err, data = new modelTest()) => {
      res.json(data);
    }
  );
});

//creacion del puerto para ponerlo en escucha
const port = process.env.PORT || 8090;
app.listen(port);
