const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');
const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    port: '3306',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
}

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
});

app.use(myconn(mysql, dbOptions, 'single'));

// rutas
app.use('/api', routes);

// servidor corriendo
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
})