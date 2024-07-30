document.querySelector('[data-date]').innerHTML = String(new Date().getDate()) + ' de ' + String(new Date().toLocaleString('default', { month: 'long' }))

document.querySelector('[data-button]').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block'
})

document.querySelector('[data-create-task]').addEventListener("keypress", (enter) => {
    if (enter.key === "Enter") {


        if (document.querySelector("[data-create-task]").value != '') {
            const task = document.createElement('li')
            task.classList.add('task')
            document.querySelector('ul').appendChild(task)
            task.appendChild(taskCheck())
            task.appendChild(taskInfo())
            task.appendChild(taskDelete())

            if (document.querySelector('.vazio').style.display = 'block') {
                document.querySelector('.vazio').style.display = 'none'
            } 
        }

        document.querySelector("[data-create-task]").value = ''
    }
})

const taskCheck = () => {
    const taskCheck = document.createElement(`img`)
    taskCheck.classList.add('taskCheck')
    taskCheck.setAttribute('src', './imgs/emptyCheckbox.png')
    taskCheck.addEventListener("click", completeTask)
    taskCheck.addEventListener("click", completeTask)
    return taskCheck
}

const completeTask = (i) => {
    const botaoConclui = i.target
    const tarefaCompleta = botaoConclui.parentElement
    if (botaoConclui.src !== 'http://127.0.0.1:5500/imgs/markedCheckbox.png') {
        tarefaCompleta.style.textDecoration = 'line-through'
        tarefaCompleta.style.color = 'grey'
        botaoConclui.setAttribute('src', './imgs/markedCheckbox.png')
    } else {
        tarefaCompleta.style.textDecoration = 'none'
        tarefaCompleta.style.color = 'white'
        botaoConclui.setAttribute('src', './imgs/emptyCheckbox.png')
    }
}

const taskInfo = () => {
    const taskInfo = document.createElement(`p`)
    taskInfo.classList.add('taskInfo')
    const inputTask = document.querySelector("input").value
    taskInfo.textContent = inputTask
    return taskInfo
}

const taskDelete = () => {
    const taskDelete = document.createElement(`img`)
    taskDelete.classList.add('taskDelete')
    taskDelete.setAttribute('src', './imgs/lixeiraBranca.png')
    taskDelete.addEventListener("click", deleteTask)
    return taskDelete
}


const deleteTask = (i) => {
    const botaoDeletar = i.target
    const tarefaDeletar = botaoDeletar.parentElement
    tarefaDeletar.remove()
    if (document.querySelector('ul').contains(document.querySelector('li'))) {
    } else {
        document.querySelector('.vazio').style.display = 'flex'
    }
    return botaoDeletar
}

