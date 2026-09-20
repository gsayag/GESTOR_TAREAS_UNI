const TASKS_STORAGE_KEY = 'organiza_plus_tasks'


export function loadTasksFromStorage() {
  const storedTasks = localStorage.getItem(
    TASKS_STORAGE_KEY
  )

  if (storedTasks === null) {
    return null
  }

  try {
    const parsedTasks = JSON.parse(storedTasks)

    if (!Array.isArray(parsedTasks)) {
      return null
    }

    return parsedTasks
  } catch (error) {
    console.error(
      'No se pudieron cargar las tareas:',
      error
    )

    return null
  }
}


export function saveTasksToStorage(tasks) {
  try {
    localStorage.setItem(
      TASKS_STORAGE_KEY,
      JSON.stringify(tasks)
    )
  } catch (error) {
    console.error(
      'No se pudieron guardar las tareas:',
      error
    )
  }
}


export function clearTasksStorage() {
  localStorage.removeItem(
    TASKS_STORAGE_KEY
  )
}