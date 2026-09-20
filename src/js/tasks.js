const tasks = [
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

  return newTask
}

export function toggleTaskCompleted(taskId) {
  const task = tasks.find(
    (task) => task.id === taskId
  )

  if (!task) return null

  task.completed = !task.completed

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

  return task
}