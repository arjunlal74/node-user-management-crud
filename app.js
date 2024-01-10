require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express();

//connect to database
connectDB();

const port = 5000 || process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files
app.use(express.static('public'));

//templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

//routes
app.use('/', require('./server/routes/customer'));

app.get('*', (req, res) => {
    res.status(404).render('404');
});


app.listen(port, () => {
    console.log(`App started running at http://localhost:${port}`);
});