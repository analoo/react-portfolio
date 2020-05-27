$(function () {

    let userid = 1;
   
    $.ajax("/api/tools", {
        type: "GET"
    }).then(res => {
        console.log(res)
        $("#tool-selection").append(res)
    })

    $("#project-submit").on("click", function (event) {
        event.preventDefault();

        let selections = document.querySelectorAll("option")

        let projectool = []

        
        // console.log(res)
        selections.forEach(element => {
            if($(element).prop("selected")){
                projectool.push({toolID: $(element).data("toolid"), name:$(element).val() })
                
            }
        })


        let newProject = {
            title: $("#project-title").val(),
            description: $("#project-description").val(),
            githubRep: $("#project-githubRep").val(),
            deployedLink: $("#project-deployedLink").val(),
            associatedImage: $("#project-associatedImage").val(),
            language: $("#project-language").val(),
            UserId: userid,
            // tools: projectool,
        }

        $.ajax(`/api/project/new`, {
            type: "POST",
            data: newProject
        }).then(res => {
            let projectId = res.id;

            console.log(projectId)
            projectool.forEach(element => {
                var newtool = {
                    name: element.name,
                    ProjectId: projectId, 
                    ToolId: element.toolID,
                }

                console.log(newtool)
                $.ajax(`/api/projectTools/new`, {
                    type: "POST",
                    data: newtool
                }).then(res =>
                    console.log(res))
            })
            
           
        })


    })

    $("#tool-submit").on("click", function (event) {
        event.preventDefault();
        let newTool = {
            type: $("#tool-type").val().trim(),
            useCase: $("#tool-useCase").val().trim(),
        }

        $.ajax("/api/tools/new", {
            type: "POST",
            data: newTool
        }).then(res => {
            console.log(res)
            
        })
    })

    console.log("Live from the projects profile")

})