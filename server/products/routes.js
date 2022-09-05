const Controller = require("./controller");

exports.routesConfig = function (app) {
  app.get("/products/total", [Controller.getTotal]);
  app.get("/products/page/:pageId", [Controller.getByPage]);
  app.get("/products/:_id", [Controller.getById]);
};
