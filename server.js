var express  = require('express');

var app = express();
const port = process.env.port || 3000;

app.use(function (req, res, next) {
   if(req.headers['x-forwarded-proto'] === 'https') {
       res.redirect('http://' + req.hostname + req.url);
   } else {
       next();
   }
});
app.use(express.static('public'));

app.listen(port, function () {
    console.log("Express server is up at" + port);
});