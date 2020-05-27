var db = require("../models");

module.exports = function (app) {

    app.get("/api/:user/projects", (req, res) => {
        db.Project.findAll({
            include: [
                { model: db.ProjectTool}]
        })
        .then(data => {
            res.json(data);
            console.log(data)
        })
        .catch(err => {
            res.json(err);
        });
    });
            
    app.get("/api/project/:projid", (req, res) => {
        db.Project.findOne({
            where: {
                id: req.params.projid
            },
            include: [
                { model: db.ProjectTool}]
        }).then(project => {
            res.json(project);
            console.log(project)
        }).catch(err => {
            res.json(err)
        });
    });

    app.post("/api/project", (req, res) => {
        db.Project.create(req.body)
        .then(result => {
                console.log(result.dataValues)
                res.json(result.dataValues)
            }).catch(err => {
                res.json(err)
            })
    })



    app.put("/api/project/:projid", (req, res) => {
        db.Project.update(req.body, {
            where: {
                id: req.params.projid
            },
        }).then(project => {
            res.JSON(project.dataValues);
        }).catch(err => {
            res.JSON(err)
        });
    });

    app.delete("/api/project/:projid", (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.projid
            },
        }).then(result => {
            res.JSON(result);
        }).catch(err => {
            res.JSON(err)
        });
    });
}