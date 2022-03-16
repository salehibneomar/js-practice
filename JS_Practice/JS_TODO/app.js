const addTodo  = document.querySelector('.add-form');
const todoList = document.querySelector('.list-group');
const search   = document.querySelector('.search-form');

const todoTemplate = (todo) => {
    const template = `
    <li class="list-group-item d-flex justify-content-between align-items-start py-3">
        <div class="ms-2 me-auto">
        ${todo}
        </div>
        
        <i class="fa-solid fa-trash-can btn btn-sm btn-danger del-btn"></i>
        
    </li>
    `;

    todoList.innerHTML += template;
};

addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = e.target.field.value.trim();

    if(!todo.length){
        console.log('Empty field');
    }
    else if(todo.length>100){
        console.log('Keep the todo within 100 chars');
    }
    else{     
        todoTemplate(todo);
        addTodo.reset();
    }
});

todoList.addEventListener('click', e => {
    if(e.target.classList.contains('del-btn') && confirm('Are you sure?')){
        e.target.parentElement.remove();
    }
});

search.addEventListener('submit', e => {
    e.preventDefault();
});

const filteredList = (key) => {

    Array.from(todoList.children)
         .forEach(todo => todo.classList.remove('d-none'));

    Array.from(todoList.children)
         .filter((todo, index) => index!=0 && !todo.textContent.toLowerCase().includes(key))
         .forEach(todo => todo.classList.add('d-none'));   
};

search.field.addEventListener('keyup', e => {
    const key = search.field.value.trim().toLowerCase();
    if(todoList.children.length>1){
        filteredList(key);
    }
});
