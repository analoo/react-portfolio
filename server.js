var express = require("express");
var app = express();

var PORT = process.env.PORT || 4001;


var db = require("./models")
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"))



// Routes
require("./routes/user-api-routes")(app);
require("./routes/project-api-routes")(app);
require("./routes/tools-api-routes")(app);
require("./routes/html-routes")(app);



db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
})



