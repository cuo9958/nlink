import Router from 'koa-router';
import { setData } from '../core/scan';

const router = new Router();

router.post('/', function(ctx) {
    const { name, data, action } = ctx.request.body;
    console.log('接口拿到数据', name, data, action);
    setData(name, data, action);
    ctx.body = '不存在的接口';
});

export default router.routes();
