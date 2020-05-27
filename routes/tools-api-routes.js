var db = require("../models");

module.exports = function (app) {

    app.post("/api/tools", (req, res) => {
        db.Tool.create(req.body, {
        }).then(result => {
            console.log(result)
            res.json(result.dataValues)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/tools", (req, res) => {
        db.Tool.findAll({
        }).then(tool => {
            console.log(tool);
            res.json(tool)
        }).catch(err => {
            res.send(err);
        });
    });

    app.post("/api/projectTools", (req, res) => {
        db.ProjectTool.create(req.body,{
        }).then(result => {
            console.log(result)
            res.json(result.dataValues)
        }).catch(err => {
            console.log(err)
        })
    })


}