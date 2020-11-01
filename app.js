import Koa from 'koa';
import bodyParser from 'koa-bodyparser'

import controller from './controller.js';

const app = new Koa()

app.use(bodyParser());
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');