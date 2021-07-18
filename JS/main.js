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
