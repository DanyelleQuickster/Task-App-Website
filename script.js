
var taskForm = document.querySelector('.taskForm');
var output = document.querySelector('.output');

var taskArray = [];

window.addEventListener('load',function(event){
    var storedTask = localStorage.getItem('tasks');

    if(storedTask && storedTask.length>=1){
        taskArray = JSON.parse(storedTask);
        render(taskArray);
    }
});

taskForm.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(event);
    var task = taskForm['task'].value;
    //Adding task to the array
    taskArray.push(task);
    console.log(taskArray);
    localStorage.setItem('tasks',JSON.stringify(taskArray));
    output.innerHTML += `<li class="list">${task}</li>`;
    taskForm.reset();
});

function render(task){
    task.forEach(function(item){
        output.innerHTML += `<li class="list">${item}</li>`;
    });
}
