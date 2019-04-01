const express = require('express')
const app = express()
const port = 8080
const googleTrends = require('google-trends-api');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

/* Google work around api call to use google-trends-api*/
app.get('/api/googleTrends/:withParam', (req, res) => {
    googleTrends.interestOverTime({
        keyword: req.params.withParam,
        startTime: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        geo: 'US'
    }).then((googleResponse) => {
        res.send(googleResponse);
    }).catch((err) => {
        res.status(500).json(err);
    });
})


app.listen(port, () => {
    console.log(`Running in port${port}`)
})
