const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

var router = express.Router();

//upstream middleware: before API endpoint
app.use((req, res, next) => {
  console.log(`Upstream middleware -> I'm about to log a new request  ${req.url}`);
  next();
});

//API endpoint: is aspecial kind of middleware
router.get("/api/products", (req, res, next) => {
  res.json(req.body);
  next();
});

app.use(router);

process.on('SIGTERM', function () {
  console.log('SIGTERM');
  // app.server.close(function () {
  //   process.exit(0);
  // });
});

//downstream middleware: after API endpoint
app.use((req, res, next) => {
  console.log("Downstream middleware -> I'm about to log the request success status")
  console.log(res.statusCode);
  next();
});

console.log(`Starting`);