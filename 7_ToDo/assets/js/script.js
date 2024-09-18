// npva tarefa
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        newTask.setAttribute('draggable', 'true');
        
        // drag e drop
        newTask.addEventListener('dragstart', handleDragStart);
        newTask.addEventListener('dragover', handleDragOver);
        newTask.addEventListener('drop', handleDrop);
        newTask.addEventListener('dragenter', handleDragEnter);
        newTask.addEventListener('dragleave', handleDragLeave);

        // completo
        newTask.addEventListener('click', toggleCompleteTask);

        // remover
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X'; 
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', removeTask);
        newTask.appendChild(removeBtn);

        document.getElementById('todo-list').appendChild(newTask);
        taskInput.value = '';
    }
}
function removeTask() {
    const taskToRemove = this.parentElement;
    taskToRemove.remove();
}

// marcar/desmarcar 
function toggleCompleteTask(e) {
    if (e.target.tagName !== 'BUTTON') {
        this.classList.toggle('completed');
    }
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    setTimeout(() => this.classList.add('dragging'), 0);
}

function handleDragOver(e) {
    e.preventDefault(); 
}

function handleDrop(e) {
    e.preventDefault();
    if (draggedElement !== this) {
        const list = document.getElementById('todo-list');
        const children = Array.from(list.children);
        const draggedIndex = children.indexOf(draggedElement);
        const targetIndex = children.indexOf(this);
        
        if (draggedIndex > targetIndex) {
            list.insertBefore(draggedElement, this);
        } else {
            list.insertBefore(draggedElement, this.nextSibling);
        }
    }
    draggedElement.classList.remove('dragging');
    draggedElement = null;
}

function handleDragEnter(e) {
    if (this !== draggedElement) {
        this.classList.add('over');
    }
}

function handleDragLeave() {
    this.classList.remove('over');
}
