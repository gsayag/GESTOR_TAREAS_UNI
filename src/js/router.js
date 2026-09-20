import { homeView } from './views/homeView.js'
import {
  tasksView,
  initTasksView
} from './views/tasksView.js'
import { agendaView } from './views/agendaView.js'
import { categoriesView } from './views/categoriesView.js'
import { statsView } from './views/statsView.js'
import { settingsView } from './views/settingsView.js'


const pageTitles = {
  home: 'Inicio',
  tasks: 'Tareas',
  agenda: 'Agenda',
  categories: 'Categorías',
  stats: 'Progreso',
  settings: 'Ajustes'
}


const views = {
  home: homeView,
  tasks: tasksView,
  agenda: agendaView,
  categories: categoriesView,
  stats: statsView,
  settings: settingsView
}


export function initRouter() {

  const navButtons = document.querySelectorAll('[data-page]')

  navButtons.forEach((button) => {

    button.addEventListener('click', () => {

      const page = button.dataset.page

      navigateTo(page)

    })

  })

  // Vista inicial
  navigateTo('home')
}


export function navigateTo(page) {

  const validPage = views[page] ? page : 'home'

  updateActiveNavigation(validPage)

  updatePageTitle(validPage)

  renderPage(validPage)

}


function updatePageTitle(page) {

  const pageTitle = document.querySelector('#page-title')

  if (pageTitle) {
    pageTitle.textContent = pageTitles[page]
  }

}


function updateActiveNavigation(page) {

  const navButtons = document.querySelectorAll('[data-page]')

  navButtons.forEach((button) => {

    button.classList.toggle(
      'active',
      button.dataset.page === page
    )

  })

}


function renderPage(page) {

  const mainContent = document.querySelector('#main-content')

  if (!mainContent) return

  const view = views[page]

  mainContent.innerHTML = view()

  if (page === 'tasks') {
    initTasksView()
  }

}