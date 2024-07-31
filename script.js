document.querySelector('[data-date]').innerHTML = String(new Date().getDate()) + ' de ' + String(new Date().toLocaleString('default', { month: 'long' }))

document.querySelector('[data-button]').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block'
})
document.querySelector('[data-close-modal]').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none'
})


// Criar tarefa
document.querySelector('[data-create-task]').addEventListener("click", () => {
        if (document.querySelector(".task-title").value != '') {
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

        document.querySelector("[data-task-title]").value = ''
        document.querySelector("[data-task-description]").value = ''
        document.querySelector('.modal').style.display = 'none'
})


// Checkbox
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
// ----------------------------



// Título e Descrição
const taskInfo = () => {
    const taskText = document.createElement(`div`)
    const taskInfo = document.createElement(`p`)
    const taskDesc = document.createElement(`p`)

    taskText.classList.add('taskInfo')

    taskInfo.classList.add('taskTitle')
    const inputTask = document.querySelector("[data-task-title]").value
    taskInfo.textContent = inputTask

    taskDesc.classList.add('taskDesc')
    const inputDesc = document.querySelector("[data-task-description]").value
    taskDesc.textContent = inputDesc
    taskDesc.addEventListener('click', () => {
        const modal = document.createElement('div')
        modal.classList.add('modalTask')
        modal.style.display = 'block'
    
        const modalContent = document.createElement('div')
        modalContent.classList.add('modal-content')
    
        const modalInfo = document.createElement('div')
        modalInfo.classList.add('modal-info')
        modalInfo.style.width = '400px'
        modalInfo.style.paddingBottom = '0'
    
        const modalTitle = document.createElement('h1')
        modalTitle.classList.add('modalH1')
        modalTitle.textContent = inputTask
    
        const closeButton = document.createElement('button') 
        closeButton.innerHTML = '&times;'
        closeButton.classList.add('close-modal')
        closeButton.addEventListener('click', closeModal)

        const modalDivisor = document.createElement('div')
        modalDivisor.classList.add('container-divisor')

        const modalDesc = document.createElement('p')
        modalDesc.textContent = inputDesc
        modalDesc.classList.add('modalDesc')
    
        modalInfo.appendChild(modalTitle)
        modalInfo.appendChild(closeButton)
        modalContent.appendChild(modalInfo)
        modalContent.appendChild(modalDivisor)
        modalContent.appendChild(modalDesc)
        modal.appendChild(modalContent)
        document.body.appendChild(modal)
        
    })

    taskText.appendChild(taskInfo)
    taskText.appendChild(taskDesc)
    return taskText
}
// ----------------------------



// Deletar Task
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
// ----------------------------

const closeModal = () => {
    document.querySelector('.modalTask').remove()
}

// ----------------------------