const http = require('http');
const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();
const koabody = require('koa-body');
const cors = require('@koa/cors');
const static = require('koa-static');
const htmls = require('./dataBases/html.js');
const database = path.join(__dirname, './databases/database.json');
const BDWorker = require('./js/BDWorker.js');
const port = process.env.PORT || 9090;

app.use(cors())

app.use(koabody({
    json: true,
    urlencoded: true,
    multipart: true,
}))


app.use(async ctx => {
    switch(ctx.request.method) {
        case 'GET':
            if(ctx.request.query.getWindow === 'loginWindow'){ ctx.response.body = htmls.loginWindow };
            if(ctx.request.query.getWindow === 'appWindow') { ctx.response.body = htmls.appWindow };
            if(ctx.request.query.getWindow === 'regWindow') { ctx.response.body = htmls.regWindow };

            if(ctx.request.query.loggedIn === 'checkUser') {
                const bd = JSON.parse(fs.readFileSync(database, 'utf-8'));
                BDWorker.loggedInUser(
                    ctx.request.query.email, 
                    ctx.request.query.pass,
                    bd
                ).then(resolve => {
                    if(resolve) {
                        ctx.response.body = {status: true, user: resolve.user};
                    } else {
                        ctx.response.body = {status: false, text: 'Не верный логин или пароль. Проверьте правильность данных.'};
                    }
                });
                ctx.response.body = {text:'Запрос получен.'};
                console.log(ctx.request.query.email);
            }
            break;

        case 'POST':
            const obj = ctx.request.body;
            const bd = JSON.parse(fs.readFileSync(database, 'utf-8'));

            if(obj.tag === 'registration'){
                BDWorker.duplicateCheck(obj.email, bd).then(resolve => {
                    if(resolve) {
                        ctx.response.body = {status: false, text: 'Такой email уже зарегистрирован.'};
                    } else {
                        obj.tag = 'registration compliete';
                        obj.regDate = BDWorker.setDate();
                        bd.persons.push(obj);
                        fs.writeFileSync(database, JSON.stringify(bd, null, ' '));
                        ctx.response.body = {status: true, text: 'Регистрация успешна', user: obj};
                    }
                })
            }
            break;
    }
})

const server = http.createServer(app.callback()).listen(port);