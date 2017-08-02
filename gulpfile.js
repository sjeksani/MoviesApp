var express = require('express');
var gulp = require('gulp');

var app = express();
app.use('/', express.static('public'));

app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
 });

gulp.task('express', function() {
    var server = app.listen(3000, function() {
        console.log("Server is running at 3000");
    });
});

gulp.task('default', ['express']);
