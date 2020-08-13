const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

const app = express();

//---Importando las rutas de la aplicacion----//

const customerRouter = require('./routes/customer');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views'));


//-----Holas-----//

app.use(morgan('dev'));
app.use(myconnection(mysql , {

    host: 'localhost',
    user : 'root',
    password : '',
    port : 3306,
    database : 'prueba'
}, 'single'));

app.use(express.urlencoded({extended:false}));


//---Rutas--//

app.use('/', customerRouter);

app.listen(3000, () =>{

    console.log('Server en puerto 3000');
});