const combineRoutes = require('koa-combine-routers');

import demoRouter from './PublicRouter';

export default combineRoutes(
  demoRouter
);
