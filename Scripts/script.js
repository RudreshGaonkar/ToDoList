let todoList = JSON.parse(localStorage.getItem('todoList'))||[];

RenderTask();

function addTask()
{
    const inputElementName = document.querySelector('.js-input');
    const inputElementDate = document.querySelector('.js-date');
    const inputElementTime = document.querySelector('.js-time');

    const taskName = inputElementName.value;
    const taskDate = inputElementDate.value;
    const tasktime = inputElementTime.value;

    todoList.push({
        name : taskName,
        DueDate : taskDate,
        DueTime : tasktime
    });
    //console.log(todoList);

    inputElementName.value ='';

    saveToStorage();

    RenderTask();
}

function RenderTask()
{
    let taskList = '';
    for(let i=0; i < todoList.length; i++)
    {
        const todoObject = todoList[i];

        const html = `<div class="taskGrid">
        <div class="items-text">${todoObject.name}</div>
        <div class="items-text">${todoObject.DueDate}</div>
        <div class="items-text">${todoObject.DueTime}</div> 
        <button class="remove-btn" onclick="
            removeTask(${i});
        ">Remove</button>
        </div>`;
        taskList += html;
    }
    document.querySelector('.js-listTask').innerHTML = taskList;
}

function removeTask(index)
{
    todoList.splice(index, 1);
    saveToStorage();
    RenderTask();

}

function saveToStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}