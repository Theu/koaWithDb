import Koa from 'koa';
import { CLIENT_RENEG_LIMIT } from 'tls';


const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const elapsedTime = Date.now() - start;
    ctx.set('X-Response-Time', `manually set ${elapsedTime} ms` )
})

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const elapsedTime = Date.now() - start;
    console.log(`METHOD USED ${ctx.method} URL USED ${ctx.url} - ${elapsedTime}`)
})

app.use(async ctx => {
    ctx.body = 'Hello world!!'
});


app.listen(3000)