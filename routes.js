const express = require('express');
const routes = express.Router();

const mysql = require('mysql');
const myconn = require('express-myconnection');
const app = express();
const dbOptions = {
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    port: '3306',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
}

app.use(myconn(mysql, dbOptions, 'single'));

routes.get('/productos', (req, res) => {

    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('SELECT * FROM product WHERE url_image != "" || null ORDER BY name ASC LIMIT 6', (err, rows) => {
            if (err) return res.send(err);

            res.json(rows);
        })
    })

})

routes.get('/categorias', (req, res) => {

    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('SELECT * FROM category', (err, rows) => {
            if (err) return res.send(err);

            res.json(rows);
        })
    })

})

routes.get('/busquedaByCategorias/:id', (req, res) => {

    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        if ([req.params.id] != 0) {
            conn.query('SELECT * FROM product WHERE category = ? && url_image != "" || null', [req.params.id], (err, rows) => {
                if (err) return res.send(err);

                res.json(rows);
            })
        }else {
            conn.query('SELECT * FROM product WHERE url_image != "" || null ORDER BY name ASC', (err, rows) => {
                if (err) return res.send(err);

                res.json(rows);
            })
        }

    })

})

routes.get('/buscador/:busqueda', (req, res) => {   

    req.getConnection((err, conn) => {
        if (err) return res.send(err);
            
        if([req.params.busqueda] != '-'){
            conn.query("SELECT * FROM product WHERE name LIKE '%" + [req.params.busqueda] + "%' && url_image != '' || null ORDER BY name ASC", (err, rows) => {
                if (err) return res.send(err);
                res.json(rows);
            })
        } else {
            conn.query("SELECT * FROM product WHERE url_image != '' || null ORDER BY name ASC", (err, rows) => {
                if (err) return res.send(err);
                res.json(rows);
            })
        }      
    })
})

routes.get('/ordenarProducto/:orden/:categoria', (req, res) => {

    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        let orden = [req.params.orden];
        let categoria = [req.params.categoria];

        if (categoria != 0) {
            conn.query("SELECT * FROM product WHERE category = "+categoria+" && url_image != '' || null ORDER BY name "+orden+"",  (err, rows) => {
                    if (err) return res.send(err);
        
                    res.json(rows);
                })
        }else {
            conn.query('SELECT * FROM product WHERE url_image != "" || null ORDER BY name '+orden+'', (err, rows) => {
                if (err) return res.send(err);

                res.json(rows);
            })
        }
    })

})

module.exports = routes;