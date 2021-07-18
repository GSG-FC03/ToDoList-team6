// declareing the variabale 
const todoInp = document.getElementById("todos");
const addTodo = document.getElementById("add-todos");
const getTodo = document.querySelector(".get-result");
const saveBtn = document.getElementById("save-btn")
let saveIndex = document.getElementById("save-index")
let clearAll = document.getElementById("clear-all");

// declareing the variabale 

// How the edit button works: when a user clicks on the edit button, the value and show on the input felid and then the save button will show next to the add button and the add button will get disabled
function editTodo(i){
    let toDoTask = localStorage.getItem("localtodo");
    saveIndex.value = i;
    let todoObj = JSON.parse(toDoTask);
    todoInp.value = todoObj[i];
    saveBtn.style.display = "block";
    addTodo.setAttribute("disabled", true)
    };

    saveBtn.addEventListener('click', ()=> {
        let toDoTask = localStorage.getItem("localtodo");
        let todoObj = JSON.parse(toDoTask);
        let savedIndex = saveIndex.value;
        todoObj[savedIndex] = todoInp.value;
        localStorage.setItem("localtodo", JSON.stringify(todoObj));
        showTodo();
        addTodo.removeAttribute("disabled",false)
        saveBtn.style.display = "none"; 
        })
        // end of the edit function