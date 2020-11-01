import fs from 'fs';
import fn_router from 'koa-router';
import path from 'path';

const __dirname = path.resolve()
const router = fn_router()

function addMapping(router, mapping) {
    for (const url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

async function addControllers(router, controllers_dir) {
    const files = fs.readdirSync(__dirname + `/${controllers_dir}`);
    const js_files = files.filter((f) => {
        return f.endsWith('.js');
    });
    for (const f of js_files) {
        let mapping = await import(__dirname + `/${controllers_dir}/` + f);
        addMapping(router, mapping.default); // 注意此时动态import进来的模块要通过defaut属性获取
    }
}


export default function (dir) {
    let controllers_dir = dir || 'controllers'; // 如果不传参数，扫描目录默认为'controllers'
    addControllers(router, controllers_dir);
    return router.routes();
};