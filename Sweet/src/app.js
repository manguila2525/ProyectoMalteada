const express = require('express');
const path = require('path');
const morgan = require('morgan');
const moongose = require('mongoose');
const cors = require('cors')
//Initialization
const app = express();

//Connecting to db
moongose.connect('mongodb://localhost/crud-mongo2', {
    useNewUrlParser: true
})
.then(db => console.log('Db connected'))
.catch(err => console.log(err));

//Setting
 app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// //Routes
app.use('/', require('./routes/index'));


//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get("port")}`);
})