const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector(".todo-input")

let todos = []


todoForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(todoInput.value.trim());

    const todo = {
        id: Date.now(),
        text: todoInput.value.trim(),
        completed: false
    }

    todos = [...todos, todo]
    

    renderTodos(todos)
    resetForm()
    
})


function resetForm(){
    // todoInput.value = ""
    todoForm.reset()
}

function renderTodos(allTodos){
    const list = document.querySelector(".list-group")
    list.innerHTML = ""
    allTodos.forEach((todo)=>{
        const li = document.createElement("li")
        li.className = "list-group-item list-group-item-success mb-3 d-flex justify-content-between align-items-center"

        li.innerHTML = `
            <div>
                <input type="checkbox" class="completed" data-id="${todo.id}"} ${todo.completed ? "checked" : ""} />
                <span class="${todo.completed ? "text-decoration-line-through" : ""}">${todo.text}</span>
            </div>
            <button data-id="${todo.id}" class="btn btn-danger delete">delete</button>
`

        list.appendChild(li)

    })


    const allDeleteBtns = document.querySelectorAll(".delete")
    const allCheckBoxs = document.querySelectorAll(".completed")

    allDeleteBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
           const todoId = e.target.getAttribute("data-id");
            todos = todos.filter((q)=>q.id != todoId)

            btn.parentElement.remove()
            // renderTodos(todos)
        })
    })
    allCheckBoxs.forEach((input)=>{
        input.addEventListener("change", (e)=>{
            const todoId = e.target.getAttribute("data-id");
           const selectedTodo = todos.find((q)=>q.id == todoId)
           selectedTodo.completed = !selectedTodo.completed
            console.log(selectedTodo);
            
            renderTodos(todos)     
           
        })
    })
}


