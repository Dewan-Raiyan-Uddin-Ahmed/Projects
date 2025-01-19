const todoList = [{
    name : 'make dinner',
    date : '2024-1-1'
}];

function renderTodoList(){
    
    let todoListHTML = '';

    for(i=0;i<todoList.length;i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const date = todoObject.date;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="
        todoList.splice(${i},1);
        renderTodoList();"
        class="delete-button">Delete</button>`;
        todoListHTML = todoListHTML + html;
    }

    document.querySelector('.js-todo-list-grid')
    .innerHTML = todoListHTML;
}





function todoMethod(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateinputElement = document.querySelector('.js-date-input');
    const date = dateinputElement.value;

    todoList.push({
        name : name,
        date : date
    });
    inputElement.value = '';
    renderTodoList();

    
}
