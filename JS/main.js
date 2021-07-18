// declareing the variabale 
const todoInp = document.getElementById("todos");
const addTodo = document.getElementById("add-todos");
const getTodo = document.querySelector(".get-result");
const saveBtn = document.getElementById("save-btn")
let saveIndex = document.getElementById("save-index")
let clearAll = document.getElementById("clear-all");

// declareing the variabale 
// add event lisener to the (add) button 
// explanation "when the user click on add its take the input value and assign it to array in localstorage withe the same key and every time you clicked add btn and write any value in the input it push it to the same array "
addTodo.addEventListener('click', () => {
    let todoInpVal = todoInp.value ;
    if(todoInpVal.trim()!=0){
    let toDoTask = localStorage.getItem("localtodo");
    
    if(toDoTask == null){
      todoObj = [];
    }
     else{ 
      todoObj = JSON.parse(toDoTask) ;
    }
    todoObj.push(todoInpVal);
    localStorage.setItem("localtodo", JSON.stringify(todoObj))
    }
    location.reload();
    
    })
//end of the  add event lisener to the (add) button
