const combineRoutes = require('koa-combine-routers');

const aRoutes = require("./aRouter");
const bRoutes = require("./bRouter");

module.exports = combineRoutes(
  aRoutes,
  bRoutes
)
