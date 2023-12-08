const button = document.getElementById("Enter");
const taskList = document.getElementById("taskList");
const button5 = document.getElementById("Clear");

// Load tasks from localStorage on page load
window.addEventListener('load', function() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        taskList.innerHTML = savedTasks;
        attachEventListeners();
    }
});

button.addEventListener('click', function() {
    const textarea = document.getElementById("textarea").value;
    if (textarea === "") {
        return;
    } else {
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute("id","checkbox");
        let label = document.createElement('label');
        label.appendChild(document.createTextNode(textarea));
        let para = document.createElement('p');
        para.innerText = "Pending...";
        let button1 = document.createElement('button');
        button1.innerHTML = "Update";
        let button2 = document.createElement('button');
        button1.setAttribute("id","button1");
        button2.setAttribute("id","button2");
        button2.innerHTML = "Delete";
        var taskItem = document.createElement('div');
        taskItem.setAttribute("id","div1");
        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(para);
        taskItem.appendChild(button1);
        taskItem.appendChild(button2);
        taskList.appendChild(taskItem);
        document.getElementById("textarea").value = '';

        // Save tasks to localStorage
        saveTasks();

        attachEventListeners();
    }
});

button5.addEventListener('click', function() {
    taskList.innerHTML = '';

    // Clear tasks from localStorage
    localStorage.removeItem('tasks');
});

function saveTasks() {
    // Convert tasks to string (JSON) and save to localStorage
    localStorage.setItem('tasks', taskList.innerHTML);
}

function attachEventListeners() {
    // Attach event listeners for checkboxes, update buttons, and delete buttons
    document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const para = this.parentElement.querySelector('p');
            if (this.checked) {
                para.innerText = "Completed";
            } else {
                para.innerText = "Pending...";
            }
            // Save tasks after checkbox change
            saveTasks();
        });
    });

    document.querySelectorAll('#button1').forEach(function(button1) {
        button1.addEventListener('click', function() {
            const textarea = document.getElementById("textarea");
            const label = this.parentElement.querySelector('label');
            textarea.value = label.innerText;
            
            saveTasks();
        });
    });

    document.querySelectorAll('#button2').forEach(function(button2) {
        button2.addEventListener('click', function() {
            taskList.removeChild(this.parentElement);
            // Save tasks after deletion
            saveTasks();
        });
    });
}
