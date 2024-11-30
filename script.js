
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const todoList = document.querySelector("#todo-list");
const toolTip = document.querySelector(".notification-tooltip");
const todoBackdrop = document.getElementById("list-backdrop");


addTaskBtn.onclick = addTask;

taskInput.addEventListener("input", event => {
    if(!taskInput.value == ""){
        addTaskBtn.classList.replace("disabled","enabled");
    }
    else{
        addTaskBtn.classList.replace("enabled", "disabled");
    }
})

document.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        event.preventDefault();
        addTask();
    }
});

function controlBackdrop(){
    if(todoList.querySelectorAll(".todo-item").length > 0){
        if(todoList.querySelector("#list-backdrop")){
            todoList.removeChild(todoBackdrop);
        }
        else{
            return;
        }
    }
    else{
        todoList.append(todoBackdrop);
    }
}

function addTask(){

    if(!taskInput.value == ""){

        let newTask = taskInput.value;
        taskInput.value = "";

        let newTodoItem = document.createElement("li");
        newTodoItem.className = "todo-item";

        if(newTask.length > 25){
            newTodoItem.innerHTML = 
        `
            <div class="todo-main">
                <input type="checkbox" name="todo-check" class="todo-check">
                <span class="todo-title">
                    <span class="strike-through"></span>
                    ${newTask.slice(0, 22)}...
                </span>
            </div>
            <div class="controls">
                <button type="button" class="move-up">
                    <svg width="14px" height="14px" viewBox="0 -5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>navigation / 3 - navigation, arrow, chevron, direction, forward, move, up icon</title> <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"> <g transform="translate(-895.000000, -678.000000)" id="Group" stroke="#ffffff" stroke-width="1"> <g transform="translate(893.000000, 672.000000)" id="Shape"> <polyline points="21.0026841 17.0026841 12.0005807 7.00152261 2.99847739 17.0026841"> </polyline> </g> </g> </g> </g></svg>
                </button>
                <button type="button" class="move-down">
                    <svg width="14px" height="14px" viewBox="0 -5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>navigation / 4 - navigation, arrow, chevron, direction, forward, move, down icon</title> <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"> <g transform="translate(-969.000000, -678.000000)" id="Group" stroke="#ffffff" stroke-width="1"> <g transform="translate(967.000000, 672.000000)" id="Shape"> <polyline points="2.99847739 7.00152261 12.0005807 17.0026841 21.0026841 7.00152261"> </polyline> </g> </g> </g> </g></svg>
                </button>
                <button type="button" class="delete-task">
                    <svg width="20px" height="20px" viewBox="-1 -6 20 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#b72e13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
        `
        }
        else{
            newTodoItem.innerHTML = 
        `
            <div class="todo-main">
                <input type="checkbox" name="todo-check" class="todo-check">
                <span class="todo-title">
                    <span class="strike-through"></span>
                    ${newTask}
                </span>
            </div>
            <div class="controls">
                <button type="button" class="move-up">
                    <svg width="14px" height="14px" viewBox="0 -5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>navigation / 3 - navigation, arrow, chevron, direction, forward, move, up icon</title> <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"> <g transform="translate(-895.000000, -678.000000)" id="Group" stroke="#ffffff" stroke-width="1"> <g transform="translate(893.000000, 672.000000)" id="Shape"> <polyline points="21.0026841 17.0026841 12.0005807 7.00152261 2.99847739 17.0026841"> </polyline> </g> </g> </g> </g></svg>
                </button>
                <button type="button" class="move-down">
                    <svg width="14px" height="14px" viewBox="0 -5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>navigation / 4 - navigation, arrow, chevron, direction, forward, move, down icon</title> <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"> <g transform="translate(-969.000000, -678.000000)" id="Group" stroke="#ffffff" stroke-width="1"> <g transform="translate(967.000000, 672.000000)" id="Shape"> <polyline points="2.99847739 7.00152261 12.0005807 17.0026841 21.0026841 7.00152261"> </polyline> </g> </g> </g> </g></svg>
                </button>
                <button type="button" class="delete-task">
                    <svg width="20px" height="20px" viewBox="-1 -6 20 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#b72e13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
        `;
        }
    
        
        todoList.append(newTodoItem);
        controlBackdrop();
    
        newTodoItem.querySelector(".delete-task").addEventListener("click", () => {
            todoList.removeChild(newTodoItem);
            controlBackdrop();
        });
    
        newTodoItem.querySelector(".move-up").addEventListener("click", () => {
    
            if(newTodoItem.previousElementSibling){
                todoList.insertBefore(newTodoItem, newTodoItem.previousElementSibling);
            }
            else{
                console.log("No previous sibling");
            }
            
        });
    
        newTodoItem.querySelector(".move-down").addEventListener("click", () => {
    
            if(newTodoItem.nextElementSibling){
                todoList.insertBefore(newTodoItem.nextElementSibling, newTodoItem);
            }
            else{
                console.log("No next sibling");
            }
            
        });
    
    
        newTodoItem.querySelector(".todo-check").addEventListener("change", () => {
    
            if(newTodoItem.querySelector(".todo-check").checked){
                newTodoItem.querySelector(".strike-through").style.display = "block";
                newTodoItem.querySelector(".todo-title").style.color = "#646464";
                
            }
            else{
                newTodoItem.querySelector(".strike-through").style.display = "none";
                newTodoItem.querySelector(".todo-title").style.color = "#cecece";
            }
            
        });
    
    }
    else{
        toolTip.style = "opacity: 100%";
        setTimeout(() => {toolTip.style = "opacity: 0%";}, 2000);
    }

}