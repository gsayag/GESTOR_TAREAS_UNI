import {
  loadTasksFromStorage,
  saveTasksToStorage
} from './storage.js'


const defaultTasks = [
  {
    id: 1,
    title: 'Terminar proyecto web',
    description:
      'Completar la interfaz responsive y revisar la navegación de la aplicación.',
    category: 'Desarrollo Web',
    priority: 'high',
    date: '2026-09-22',
    completed: false
  },

  {
    id: 2,
    title: 'Resolver ejercicios',
    description:
      'Resolver los ejercicios pendientes antes de la siguiente clase.',
    category: 'Matemática',
    priority: 'medium',
    date: '2026-09-24',
    completed: false
  },

  {
    id: 3,
    title: 'Revisar material del curso',
    description:
      'Repasar las diapositivas y organizar los apuntes de la semana.',
    category: 'Universidad',
    priority: 'low',
    date: '2026-09-26',
    completed: false
  },

  {
    id: 4,
    title: 'Configurar proyecto Vite',
    description:
      'Crear el proyecto y preparar la arquitectura inicial.',
    category: 'Programación',
    priority: 'medium',
    date: '2026-09-18',
    completed: true
  }
]

const storedTasks = loadTasksFromStorage()


let tasks =
  storedTasks !== null
    ? storedTasks
    : defaultTasks.map((task) => ({ ...task }))


if (storedTasks === null) {
  saveTasksToStorage(tasks)
}


export function getTasks() {
  return tasks
}

export function addTask(taskData) {
  const newTask = {
    id: Date.now(),
    title: taskData.title,
    description: taskData.description,
    category: taskData.category,
    priority: taskData.priority,
    date: taskData.date,
    completed: false
  }

  tasks.unshift(newTask)

  saveTasksToStorage(tasks)

  return newTask
}

export function toggleTaskCompleted(taskId) {
  const task = tasks.find(
    (task) => task.id === taskId
  )

  if (!task) return null

  task.completed = !task.completed

  saveTasksToStorage(tasks)

  return task
}


export function getTaskById(taskId) {
  return tasks.find(
    (task) => task.id === taskId
  )
}


export function updateTask(taskId, taskData) {
  const task = getTaskById(taskId)

  if (!task) return null

  task.title = taskData.title
  task.description = taskData.description
  task.category = taskData.category
  task.priority = taskData.priority
  task.date = taskData.date

  saveTasksToStorage(tasks)

  return task
}

export function deleteTask(taskId) {
  const taskIndex = tasks.findIndex(
    (task) => task.id === taskId
  )

  if (taskIndex === -1) return false

  tasks.splice(taskIndex, 1)

  saveTasksToStorage(tasks)

  return true
}

export function clearAllTasks() {
  tasks = []

  saveTasksToStorage(tasks)
}

