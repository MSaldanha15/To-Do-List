
var tasks =[];

function idGeneration(){
    var tempo = new Date();

    var id = tempo.getHours().toString() +
             tempo.getMinutes().toString() +  
             tempo.getSeconds().toString();

             return id;
}

function CreateTask(){
        var taskDescreption = document.getElementById("newTask").value;

        var task = {
            id: idGeneration(),
                data: {
                    description: taskDescreption
                }
            };
        tasks.push(task);

        UpdateScreen();
}

function DeleteTask(element){
    tasks = tasks.filter(task=>task.id!=element.getAttribute("id-data"));

    UpdateScreen();
}

function UpdateScreen(){
    var list = "<ul>";

    tasks.forEach(task=>{
        list += "<li id-data="+task.id+">"+task.data.description+"</li>"
        list += "<button onclick=DeleteTask(this) id-data="+task.id+">Apagar</button>"
    });

    list += "</ul>";
    

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
}

