if (process.env.NODE_ENV !== 'development') {
    require('dotenv').config();
}

const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

//Rutas
//const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');
//Settings
//Configure if there is a server to deploy or use port 3000 for development and uncomment ejs if you are developing 
app.set('port', process.env.PORT || 3000);
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
//app.use('/', indexRoutes);
app.use('/api',tasksRoutes);

//static files
   app.use(express.static(path.join(__dirname, 'dist')));
//start server
app.listen(app.get('port'), () => {
    console.log('server on', app.get('port'));
}); 