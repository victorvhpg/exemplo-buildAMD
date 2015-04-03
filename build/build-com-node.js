var requirejs = require("requirejs");
var fs = require("fs");

var config =  eval(fs.readFileSync("config.build.js", "utf8"));

requirejs.optimize(config, function(buildResponse) {
    console.log("build gerado em: " + config.out);
}, function(err) {
    //optimization err callback
    console.log(err);
});
