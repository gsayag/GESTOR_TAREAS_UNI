const pageTitles = {
  home: 'Inicio',
  tasks: 'Tareas',
  agenda: 'Agenda',
  categories: 'Categorías',
  stats: 'Progreso',
  settings: 'Ajustes'
}

export function initRouter() {
  const navButtons = document.querySelectorAll('[data-page]')

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.dataset.page

      navigateTo(page)
    })
  })
}

function navigateTo(page) {
  updateActiveNavigation(page)
  updatePageTitle(page)
  renderPage(page)
}

function updatePageTitle(page) {
  const pageTitle = document.querySelector('#page-title')

  if (pageTitle) {
    pageTitle.textContent = pageTitles[page] || 'Organiza+'
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

  switch (page) {
    case 'home':
      renderHome(mainContent)
      break

    case 'tasks':
      renderTasks(mainContent)
      break

    case 'agenda':
      renderAgenda(mainContent)
      break

    case 'categories':
      renderCategories(mainContent)
      break

    case 'stats':
      renderStats(mainContent)
      break

    case 'settings':
      renderSettings(mainContent)
      break

    default:
      renderHome(mainContent)
  }
}












function renderHome(container) {
  container.innerHTML = `
    <section class="page-placeholder">
      <h2>Inicio</h2>
      <p>Resumen general de tus actividades.</p>
    </section>
  `
}

function renderTasks(container) {
  container.innerHTML = `
    <section class="page-placeholder">
      <h2>Mis tareas</h2>
      <p>Aquí podrás crear, editar y completar tus tareas.</p>
    </section>
  `
}

function renderAgenda(container) {
  container.innerHTML = `
    <section class="page-placeholder">
      <h2>Agenda</h2>
      <p>Consulta tus actividades organizadas por fecha.</p>
    </section>
  `
}

function renderCategories(container) {
  container.innerHTML = `
    <section class="page-placeholder">
      <h2>Categorías</h2>
      <p>Organiza tus tareas por cursos o categorías.</p>
    </section>
  `
}

function renderStats(container) {
  container.innerHTML = `
    <section class="page-placeholder">
      <h2>Mi progreso</h2>
      <p>Revisa el avance de tus actividades.</p>
    </section>
  `
}

function renderSettings(container) {
  container.innerHTML = `
    <section class="page-placeholder">
      <h2>Ajustes</h2>
      <p>Configura las preferencias de Organiza+.</p>
    </section>
  `
}