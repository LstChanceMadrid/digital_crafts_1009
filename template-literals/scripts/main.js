

let addTask = document.getElementById('add-task-button');

let completedList = document.getElementById('completed-tasks');

let pendingList = document.getElementById('pending-tasks');

// used to put each individual task together at add to the inner html
let tasks = ''


const removeTask = (removebutton) => {
     let item = removebutton.parentElement;

     item.parentElement.removeChild(item);
 }

// when the 
const swapList = (checkbox) => {
    let taskItem = checkbox.parentElement;

    if (checkbox.checked == true) {
        completedList.appendChild(taskItem);
    } else {
        pendingList.appendChild(taskItem);
    }
}

// sends the text input into the pending list.
addTask.addEventListener('click', function(e) {
    e.preventDefault();
    let taskInput = document.getElementById('task-input');
    let taskTitle = taskInput.value;
    
    let pendingTasks = document.querySelector('#pending-task-list #pending-tasks');


    // creates the list item inside of a div
    let task = 
                `
                <div class="task-list-item">
                    <input class="task-checkbox" type="checkbox" onChange="swapList(this)" />

                    <h2 class="task-title">${taskTitle}</h2>

                    <button class="remove-task-button" onClick="return removeTask(this)">Remove</button>
                </div>
                `;



    // appending the tasks to the todo list
    pendingTasks.insertAdjacentHTML('beforeend', task);
});
