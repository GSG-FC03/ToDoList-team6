// declareing the variabale 
const todoInp = document.getElementById("todos");
const addTodo = document.getElementById("add-todos");
const getTodo = document.querySelector(".get-result");
const saveBtn = document.getElementById("save-btn")
let saveIndex = document.getElementById("save-index")
let clearAll = document.getElementById("clear-all");

// declareing the variabale
// show TO-DOs  
function showTodo(){
  let toDoTask = localStorage.getItem("localtodo");
  toDoTask == null ?todoObj=[]:todoObj = JSON.parse(toDoTask);
  let finalTodo = '';
let addTodoList = getTodo;
todoObj.forEach((item, index) =>{
  finalTodo +=` 
  <h3> Key: ${index+1}</h3>  
  <p> To-do: ${item} </p> 
 <p> Date:  ${new Date().toLocaleDateString()}</p>
<div class="icons">
<i class="fas fa-trash-alt " id="del-icon" onclick="deleteTodo(${index})"></i>
<i class="far fa-edit" id="edit-icon" onclick="editTodo(${index})"></i>

</div>
<br>
`
});
getTodo.innerHTML = finalTodo;

}
// end of show TO-DOS function