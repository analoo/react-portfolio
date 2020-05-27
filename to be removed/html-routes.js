var db = require("../models");
var path = require("path");

module.exports = function (app) {

    if (process.env.NODE_ENV === "production") {
        app.use(function (req, res) {
            res.sendFile(path.join(__dirname, "../client/build/index.html"))
        })
    }
}

// var db = require("../models");

// module.exports = function (app) {

//     app.get("/", function (req, res) {
//         res.render("index")
//     });

//     app.get("/about", function (req, res) {
//         // app.get("/api/users/:id", (req,res) => {
//         db.User.findOne({
//             where: {
//                 id: 1
//             }
//         }).then(user => {
//             console.log(user.dataValues)
//             res.render("about-me", user.dataValues);
//         }).catch(err => {
//             res.json(err)
//         });
//         // });
//     });

//     app.get("/portfolio", function (req, res) {
//         res.render("portfolio")
//     });



//     app.get("/resume", function (req, res) {
//         res.render("resume")
//     });

//     app.get("/users", function (req, res) {
//         res.render("user-admin")
//     });

//     app.get("/projects", function (req, res) {
//         res.render("projects-admin")
//     });

//     app.get("/tools", function (req, res) {
//         res.render("tools-admin")
//     });

// }