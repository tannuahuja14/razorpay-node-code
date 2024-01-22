require("dotenv").config();

const app = require('express')();
var http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);

http.listen(3030, function(){
    console.log('Server is running at port : 3030');
});