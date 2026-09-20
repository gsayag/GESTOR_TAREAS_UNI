import {
  loadSettingsFromStorage,
  saveSettingsToStorage
} from './storage.js'


const defaultSettings = {
  name: 'Usuario',

  email:
    'usuario@universidad.edu.pe',

  darkMode: false,

  compactMode: false,

  pendingReminders: true,

  dueDateReminders: true
}


const storedSettings =
  loadSettingsFromStorage()


let settings = {
  ...defaultSettings,
  ...(storedSettings || {})
}


if (!storedSettings) {
  saveSettingsToStorage(settings)
}


export function getSettings() {
  return {
    ...settings
  }
}


export function updateSettings(
  newSettings
) {
  settings = {
    ...settings,
    ...newSettings
  }


  saveSettingsToStorage(settings)

  applySettings()


  return getSettings()
}


export function resetSettings() {
  settings = {
    ...defaultSettings
  }

  saveSettingsToStorage(settings)

  applySettings()
}


export function applySettings() {
  document.body.classList.toggle(
    'dark-mode',
    settings.darkMode
  )

  document.body.classList.toggle(
    'compact-mode',
    settings.compactMode
  )


  const avatar =
    document.querySelector(
      '.user-avatar'
    )


  if (avatar) {
    const firstLetter =
      settings.name
        .trim()
        .charAt(0)
        .toUpperCase()

    avatar.textContent =
      firstLetter || 'U'
  }
}