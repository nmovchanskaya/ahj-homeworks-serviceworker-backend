const combineRouters = require('koa-combine-routers');

const index = require('./index/index.js');
const news = require('./news/index.js');

const router = combineRouters(
  index,
  news
);

module.exports = router;
