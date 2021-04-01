const express = require('express');

const app_old1 = express();

function middleware1 (req, res, next) {
    req.customProperty = 100;
    next();
}

function middleware2 (req, res, next) {
    console.log(`The custom property value is: ${req.customProperty}`);
    req.customProperty = 600;
    next();
}

// function middleware (req, res, next) {
//     console.log('I am a middleware');
//
//     const errObj = new Error('I am an error');
//
//     next(errObj);
// }

// function errorHandler(err, req, res, next) {
//     // if (err) {
//     //     res.send('<h1>There was an error, please try again</h1>');
//     // }
//     res.json({err: err});
// }

// app_old1.use(middleware);
app_old1.use(middleware1);
app_old1.use(middleware2);

app_old1.get('/', (req, res, next) => {
    console.log('I am the standard Express function');
    res.send(`The value is: ${req.customProperty}`);
});

// app_old1.use(errorHandler);

app_old1.listen(3000);
