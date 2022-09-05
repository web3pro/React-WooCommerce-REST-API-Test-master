require("dotenv").config();

const http_port = process.env.HTTP_PORT;
const allowed_domains = ["http://localhost:3000"];

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowed_domains.indexOf(origin) === -1) {
        var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

const http = require("http");

const httpServer = http.createServer(app);
httpServer.listen(http_port, () => {
  console.log("HTTP Server running on port " + http_port);
});

const ProductRouter = require("./products/routes");
ProductRouter.routesConfig(app);
