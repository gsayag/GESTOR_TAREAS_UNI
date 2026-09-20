const TASKS_STORAGE_KEY = 'organiza_plus_tasks'

const SETTINGS_STORAGE_KEY = 'organiza_plus_settings'


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

export function loadSettingsFromStorage() {
  const storedSettings =
    localStorage.getItem(
      SETTINGS_STORAGE_KEY
    )

  if (!storedSettings) {
    return null
  }


  try {
    return JSON.parse(storedSettings)
  } catch (error) {

    console.error(
      'No se pudieron cargar los ajustes:',
      error
    )

    return null
  }
}


export function saveSettingsToStorage(settings) {
  try {

    localStorage.setItem(
      SETTINGS_STORAGE_KEY,
      JSON.stringify(settings)
    )

  } catch (error) {

    console.error(
      'No se pudieron guardar los ajustes:',
      error
    )

  }
}


export function clearSettingsStorage() {
  localStorage.removeItem(
    SETTINGS_STORAGE_KEY
  )
}