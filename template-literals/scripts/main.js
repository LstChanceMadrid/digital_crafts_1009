

let addTask = document.getElementById('add-task-button');

let tasks = ''
let completedList = document.getElementById('completed-tasks');
let pendingList = document.getElementById('pending-tasks');

const removeTask = (removebutton) => {
     let item = removebutton.parentElement;
     item.parentElement.removeChild(item);
 }


const swapList = (checkbox) => {

    let taskItem = checkbox.parentElement;
    console.log(taskItem.parentElement);
    console.log(checkbox.checked);
    if (checkbox.checked == true) {
        completedList.appendChild(taskItem);
    } else {
        pendingList.appendChild(taskItem);
    }
}


addTask.addEventListener('click', function(e) {
    e.preventDefault();
    let taskInput = document.getElementById('task-input');
    let taskTitle = taskInput.value;
    
    let pendingTasks = document.querySelector('#pending-task-list #pending-tasks');



    let task = 
                `
                <div class="task-list-item">
                    <input class="task-checkbox" type="checkbox" onChange="swapList(this)" />

                    <h2 class="task-title">${taskTitle}</h2>

                    <button class="remove-task-button" onClick="return removeTask(this)">Remove</button>
                </div>
                `;




    pendingTasks.insertAdjacentHTML('beforeend', task);
});
