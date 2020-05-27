var express = require("express");
var app = express();

var PORT = process.env.PORT || 4001;


var db = require("./models")
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



// Routes
require("./routes/user-api-routes")(app);
require("./routes/project-api-routes")(app);
require("./routes/tools-api-routes")(app);
require("./routes/html-routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use("*",function (req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
})



