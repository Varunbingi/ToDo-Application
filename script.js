
const button = document.getElementById("button");
const taskList = document.getElementById("taskList");

button.addEventListener('click', function() {
    var textarea = document.getElementById("textarea").value;
    if(textarea == 0){

    }
    else{
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    var label = document.createElement('label');
    label.appendChild(document.createTextNode(textarea));

    var taskItem = document.createElement('div');
    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);

    taskList.appendChild(taskItem);

    checkbox.addEventListener('change', function() {
        if (checkbox.checked === true) {
            taskList.removeChild(taskItem);
        }
    });
    }   
});
